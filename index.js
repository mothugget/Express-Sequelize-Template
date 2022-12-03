'use strict';

const express = require('express');
const app = express();

const router = require('./router.js');
const db = require('./models/index.js');

const PORT = 3000;



app.use(express.static('./static'));
app.use(express.json());
app.use(router);



(async function bootstrap() {
    await db.sequelize.sync();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})();