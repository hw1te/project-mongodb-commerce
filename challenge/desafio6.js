db.produtos.find({
  $and: [
    { curtidas: { $gt: 10 } },
    { curtidas: { $lt: 100 } },
  ],
}, {
  name: true,
  curtidas: true,
  _id: false,
});