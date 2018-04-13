const collection = require('../db');




exports.getAll = async (ctx) => {
  const dbdata = await collection.collection.find({});
    ctx.response.body = dbdata;

  // ctx.response.body = dbdata[0].data;
  // ctx.response.set('content-type', dbdata[0].contentType);
 console.log(dbdata);

  ctx.response.status = 200;
};

exports.getTest = async (ctx) => {
  console.log(ctx.request.body.event.collection);
  ctx.response.status = 200;
};

exports.postOne = async (ctx) => {

  // console.log('file ', ctx.request.files);
  // console.log('body ', ctx.request.body);
  ctx.status = 200;


  // const newPost = {
  //   job: ctx.request.body.job,
  //   salary: ctx.request.body.salary,
  // };
  // collection.collection.insert(newPost);
  // ctx.response.status = 200;
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

exports.upLoad = async (ctx) => {
  upload.single('avatar')
  console.log(ctx.request.file);
}
