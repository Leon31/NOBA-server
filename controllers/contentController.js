const collection = require('../db');

exports.getAll = async (ctx) => {
  ctx.response.body = await collection.collection.find({});
  ctx.response.status = 200;
};

exports.postOne = async (ctx) => {
  const newPost = {
    job: ctx.request.body.job,
    salary: ctx.request.body.salary,
  };
  collection.collection.insert(newPost);
  ctx.response.status = 200;
};

exports.editOne = async (ctx) => {
  ctx.response.body = await collection.collection.update(
    { job: ctx.request.body.job },
    { $set: { salary: ctx.request.body.newsalary } });
  ctx.response.status = 200;
};

exports.deleteOne = async (ctx) => {
  collection.collection.remove({ job: ctx.request.body.job });
  ctx.response.status = 200;
};
