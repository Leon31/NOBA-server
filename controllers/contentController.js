const Collection = require('../db');

module.exports.getAll = async (ctx) => {
  const dbdata = await Collection.find();  
  ctx.response.body = dbdata.sort(function (a, b) {
      return ('' + a._id).localeCompare(b._id);
    });
  ctx.response.status = 200;
};

module.exports.postOne = async (ctx) => {
  const artwork = ctx.request.body.artwork;
  Collection.insert(artwork);
  ctx.response.status = 200;
};

module.exports.editOne = async (ctx) => {
  ctx.response.body = await collection.collection.update(
    { job: ctx.request.body.job },
    { $set: { salary: ctx.request.body.newsalary } });
  ctx.response.status = 200;
};

module.exports.deleteOne = async (ctx) => {
  Collection.remove({ _id: ctx.request.body._id });
  ctx.response.status = 200;
};
