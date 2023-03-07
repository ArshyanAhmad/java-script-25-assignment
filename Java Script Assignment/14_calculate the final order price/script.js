const customerCart = [
    {price : 300, quantity : 3},
    {price : 500, quantity : 4},
    {price : 400, quantity : 5},
]

const totalPrice = (customerCart) => {
    for(item of customerCart){
        let totalPrice = 0;
        totalPrice = (item.price * item.quantity)
        console.log(`Price of item is ${item.price} Rs and no of quantity is ${item.quantity} and Total Price is ${totalPrice} Rs`)
    }
}

totalPrice(customerCart)


