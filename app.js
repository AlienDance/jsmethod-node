// server
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const server = require('http').createServer(app);
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// routers
const authRouter = require('./routes/authRoutes');
const eshopRouter = require('./routes/eshopRoutes');

// passport
const cookieParser = require('cookie-parser');
const passport = require('passport');
const { strategy, checkUser } = require('./middleware/authMiddleware');
passport.use(strategy);

// socket.io
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: {
    methods: ['GET', 'POST']
  }
});

// other middleware
const generateLorem = require('./middleware/lorem');
const eshopCreateOrder = require('./middleware/eshopCreateOrder');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors());

io.on('connection', socket => {
  socket.on('NEW_ORDER', order => eshopCreateOrder(io, socket, order));
});

app.use(
  history({
    index: '/',
    rewrites: [
      { from: '/eshop/*', to: '/eshop' },
      { from: '/landing', to: '/landing' }
    ]
  })
);

app.get('/', (req, res) => {
  checkUser(req, res);
});

app.get('/landing', (req, res) => {
  res.render('landing', { title: 'SOMETHING' });
});

app.post('/lorem', generateLorem);

app.use('/', authRouter);

app.use('/eshop', eshopRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(result => {
    console.log('connected to db');
    server.listen(5000, console.log('server is up!'));
  })
  .catch(err => console.log(err));
