db.produtos.find({ nome: {
  $nin: ["Big Mac", "McChicken"]
  }
}, {
  _id: false,
  vendidos: true,
  curtidas: true,
  nome: true,
});
