const express = require('express');
const DefaultRoutes = require('./Routes/DefaultRoute.js');
const app = express();

app.use(express.json());

app.use(DefaultRoutes);

app.listen(3005, () => {
  console.log(`Server Is Running At http://127.0.0.1/3005. Use Ctrl + C To Stop The Server.`);
});