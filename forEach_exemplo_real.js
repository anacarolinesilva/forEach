// Como funciona um exemplo real, na prática, quando a gente vai precisar do forEach
// No dia a dia, a gente vai utilizar ele quando a gente precisa de algum valor calculado
// forEach exemplo prático, calcular desconto do produto e colocar o desconto em cada produto

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
    let valorDoDesconto = produtoAtual.valorProduto * produtoAtual.porcentagemDesconto
    let valorTotal = produtoAtual.valorProduto - valorDoDesconto
    produtoAtual.valorTotalProduto = valorTotal
    console.log(produtoAtual)
})

