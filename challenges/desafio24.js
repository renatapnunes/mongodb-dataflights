// 24 - Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que litrosCombustivel não seja maior do que 600 e a empresa não seja GOL ou AZUL, e o campo litrosCombustivel exista.
db.voos.findOne(
  { $and: [
    { litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL "] } },
    { litrosCombustivel: { $exists: true } },
  ] },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
