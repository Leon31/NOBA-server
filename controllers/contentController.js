
exports.getAll = async (ctx) => {
  ctx.response.body = await 'getAll working';
  ctx.response.status = 200;
};

exports.postOne = async (ctx) => {
  ctx.response.body = await 'postOne working';
  ctx.response.status = 200;
};

exports.editOne = async (ctx) => {
  ctx.response.body = await 'editOne working';
  ctx.response.status = 200;
};

exports.deleteOne = async (ctx) => {
  ctx.response.body = await 'deleteOne working';
  ctx.response.status = 200;
};
