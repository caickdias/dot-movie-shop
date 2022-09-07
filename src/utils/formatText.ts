const formatCurrency = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`
}

export {
    formatCurrency,
}