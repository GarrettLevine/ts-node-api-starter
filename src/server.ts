import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as mongo from 'connect-mongo';
import * as mongoose from 'mongoose';

import { Request, Response } from 'express';
const MongoStore = mongo(session);
const app = express();

app.set('port', 8080);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'yas' });
});

app.listen(app.get('port'), () => {
  console.log(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});