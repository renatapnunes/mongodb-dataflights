// 28 - Retorne a quantidade total de voos de natureza Doméstica que a empresa LATAM AIRLINES BRASIL possui, via uso de uma nova coleção chamada resumoVoos.
const nomeEmpresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: nomeEmpresa,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": nomeEmpresa,
    natureza: "Doméstica" }),
});

db.resumoVoos.findOne({
  empresa: nomeEmpresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 });
