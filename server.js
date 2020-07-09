const next = require('next');
const express = require('express');
const cookieParser = require('cookie-parser');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler();



app.prepare().then(() => {
    const server = express();

    server.use(express.json());
    server.use(cookieParser(COOKIE_SECRET))


    server.get('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(port, err => {
    if (err) throw err;
    console.log(`listening on port ${port}`)
})
})