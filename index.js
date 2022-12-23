const h1 = document.querySelector('h1')
const num1 = Math.floor(Math.random()*7)
const num2 = Math.floor(Math.random()*7)

document.querySelector('.img1').setAttribute('src',`./images/dice${num1}.png`)
document.querySelector('.img2').setAttribute('src',`./images/dice${num2}.png`)

if (num1 > num2){
    h1.innerText = "Player 1 Wins!"
}else if (num2 > num1){
    h1.innerText = "Player 2 Wins!"
}else {
    h1.innerText = "Both are Tie!"
}


