const formatCurrency = (price: number) => {
    return `R$ ${price.toFixed(2)}`
}

export {
    formatCurrency,
}