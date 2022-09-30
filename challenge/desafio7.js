db.produtos.find({
  $nor: [
    { vendidos: 50 },
    { tag: true },
  ],
}, {
  name: true,
  vendidos: true,
  _id: false,
});