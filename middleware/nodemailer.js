const nodemailer = require('nodemailer');
require('dotenv').config();

const createHtmlTemplate = (firstName, lastName, email, phone, address, order) => {
  const html = `<div>
  <p>User: ${JSON.stringify(`${firstName} ${lastName}`)}</p>
  <p>Credentials: ${JSON.stringify(`${email} ${phone} ${address}`)}</p>
  <p>Order: ${JSON.stringify(order.items)}</p>
  <p>Total: ${JSON.stringify(order.totalOrderPrice)}</p>
  </div>`;
  return html;
};

const sendMail = async (user, order) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASS
    }
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL_NAME, // sender address
    to: 'vlad0502vlader@gmail.com', // list of receivers
    subject: 'Request Body', // Subject line
    html: createHtmlTemplate(user.firstName, user.lastName, user.email, user.phone, user.address, order) // html body
  });

  console.log('Message sent: %s', info.messageId);
};

module.exports = sendMail;
