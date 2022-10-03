db.produtos.find({
  ingredientes: {
    $elemMatch: {
      $eq: "picles",
    },
  },
}, {
  _id: 0,
  nome: true,
  ingredientes: true,
  valoresNutricionais: {
    $slice: 3,
  },
});
// https://www.mongodb.com/docs/v4.2/reference/operator/projection/slice/