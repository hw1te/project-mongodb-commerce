db.produtos.find({
    vendidos: { $ne: 50 },
    tags: { $exists: 0 },
}, {
  nome: true,
  vendidos: true,
  _id: false,
});
