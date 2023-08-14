

const calculateTotalCost = (customerName, products, discont) => {
    
    for (let i = 0; i < productsList.length; i++) {
        let valorTotal = 0;
        totalDiscont = ((productsList[i].price / 100) * discont);

        if (productsList[i].name == products) {

            valorTotal = productsList[i].price - totalDiscont;
            return `Olá, ${customerName}! O total da sua compra é R$${valorTotal}(${discont}% de desconto.).`;
        }
        

        
    }
    return `Produto não encontrado!`;
}

console.log(calculateTotalCost("Talles", "Caixa de Som Bluetooth", 50));
