const calculateDiscountPercentage = (originalPrice, discountPrice) => {
    const discount = originalPrice - discountPrice;
    const discountPercentage = (discount / originalPrice) * 100
    return `${discountPercentage.toFixed(2)}%`
}

const ans = calculateDiscountPercentage(1200, 500)
console.log(ans)