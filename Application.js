const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    try {
        response.status(200);
        response.json([{
            Status: '200 - OK',
            Message: 'Hello, World!',
        }]);
        return;
    } catch (error) {
        response.status(500);
        response.json([{
            Status: '500 - Internal Server Error',
            Message: 'Houston, we have a problem',
        }]);
    }
})

app.get("*", (request, response) => {
    try {
        response.status(404);
        response.json([{
            Status: '404 - Not Found',
            Message: 'The Requested Resource Could Not Be Found!',
        }]);
        return;
    } catch (error) {
        response.status(500);
        response.json([{
            Status: '500 - Internal Server Error',
            Message: 'Houston, we have a problem',
        }]);
    }
})

app.listen(3005, () => {
    console.log(`Server Is Running At http://127.0.0.1:3005. Use Ctrl + C To Stop The Server.`);
});
