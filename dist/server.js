"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const session = require("express-session");
const mongo = require("connect-mongo");
const MongoStore = mongo(session);
const app = express();
app.set('port', 8080);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'yas' });
});
app.listen(app.get('port'), () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
});
//# sourceMappingURL=server.js.map