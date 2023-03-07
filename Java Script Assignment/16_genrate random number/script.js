const generateRandomNo=()=>{
    const randomNo = Number.parseInt((Math.random() * 100) + 1)
    // const randomNo = Math.floor((Math.random() * 100) + 1)
    return randomNo
}

const randomNumber = generateRandomNo()
console.log(randomNumber)