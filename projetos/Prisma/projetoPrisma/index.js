    const express = require('express');
    const cors = require('cors');

    const func = require('./src/router/routes');


    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(func);


    app.listen(4500, () => {
        console.log("APP ON 4500 🤨 ");
    });