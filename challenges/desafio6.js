db.produtos.find({ curtidas: { $gt: 10, $lt: 100 } }, {
  name: true,
  curtidas: true,
  _id: false,
});
