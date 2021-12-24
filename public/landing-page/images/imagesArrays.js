const firstPageImgArray = [
  'https://images.unsplash.com/photo-1637681129105-036429a7563a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3ODk2OQ&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1638179346808-02785a7552e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTAyOA&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1637912726719-5e4eda3d184a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA0NQ&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1639050291554-1b6db945f5ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA0NQ&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1637779692999-26cdadc69c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA2MQ&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1637855318550-28872c693b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA2MQ&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1639086077895-d6c0767fa462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA3NQ&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1638414154639-0fbc5bceb80f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA3NQ&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1637881408216-0244eba763c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA4OA&ixlib=rb-1.2.1&q=80&w=1080'
];

const secondPageImgArray = [
  'https://images.unsplash.com/photo-1639434871517-cc2839006069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA4OA&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1638631730118-b9b23df56255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI3OTA4OA&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1639336487658-c91287937a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI4MDQzNw&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1639488031986-779a8708fbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI4MDQ1Mw&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1638341798486-75f1d007c79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI4MDQ1Mw&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1637824504309-6dc3a16173c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI4MDQ2Ng&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1638219603034-52376274d730?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI4MDQ3Nw&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1638662817153-620da842c3ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI4MDQ3Nw&ixlib=rb-1.2.1&q=80&w=1080',
  'https://images.unsplash.com/photo-1637248761448-a3b0733a304d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0MDI4MDQ5Nw&ixlib=rb-1.2.1&q=80&w=1080'
];



export default { firstPageImgArray, secondPageImgArray };
