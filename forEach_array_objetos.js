// forEach array de objetos

let produtos = [
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'Televisão',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    }
]

produtos.forEach((produtoAtual) => {
    console.log(produtoAtual.nomeProduto + ': ' + produtoAtual.valorProduto)
})
