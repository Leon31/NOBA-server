const url = 'localhost:27017/noba';
const db = require('monk')(url);

const collection = db.get('document');
db.then(() => {
  console.log('connected to server');
});

module.exports = {
  collection,
};
