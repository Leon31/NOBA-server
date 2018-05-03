const monk = require('monk');
require('dotenv').config();
const db = monk(process.env.MONGOLAB_URI || 'localhost/noba_db');
// const db = monk('localhost/noba_db');


const collection = db.get('artwork');
db.then(() => {
  console.log('connected to server', db._connectionURI);
});

module.exports = collection
