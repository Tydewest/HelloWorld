const express = require('express');
const DefaultRoutes = require('./Routes/DefaultRoute.js');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    try {
        response.status(200);
        response.json({
        Message: 'Hello, World!',
        });
        return;
    } catch (error) {
        response.status(500);
        response.json({
        Message: 'Houston, we have a problem',
        });
    }
})

app.get("*", (req, res) => {
    try {
        response.status(200);
        response.json({
        Message: 'Nothing Found!',
        });
        return;
    } catch (error) {
        response.status(500);
        response.json({
        Message: 'Houston, we have a problem',
        });
    }
})

app.listen(3005, () => {
    console.log(`Server Is Running At http://127.0.0.1/3005. Use Ctrl + C To Stop The Server.`);
});
