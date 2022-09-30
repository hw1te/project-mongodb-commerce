db.produtos.deleteMany({ curtidas: { $lt: 50 } });
db.produtos.find({}, {
  name: true,
  _id: false,
 });