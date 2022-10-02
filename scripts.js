const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')

const redirect = () => {
    window.location.href = "./thankyou-page.html"
}

const checkInputs = (inputs) => {
    let filled = true
    inputs.forEach(function(input) {

        if(input.value === '')
        filled = false  
    });

    return filled
}

inputs.forEach(function(input) {
    const inputIsOk = () => {
        if(checkInputs(inputs)) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }
    input.addEventListener('click', inputIsOk)
})

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')

const clickInput1 = () => {
        input1.style.background = '#FB7312'
        input1.style.color = '#FFF'  
}

const clickInput2 = () => {
        input2.style.background = '#FB7312'
        input2.style.color = '#FFF'
}

const clickInput3 = () => {
    input3.style.background = '#FB7312'
    input3.style.color = '#FFF'
}

const clickInput4 = () => {
    input4.style.background = '#FB7312'
    input4.style.color = '#FFF'
}

const clickInput5 = () => {
    input5.style.background = '#FB7312'
    input5.style.color = '#FFF'
}

input1.addEventListener('click', clickInput1)
input2.addEventListener('click', clickInput2)
input3.addEventListener('click', clickInput3)
input4.addEventListener('click', clickInput4)
input5.addEventListener('click', clickInput5)

const paragraph = document.getElementById('paragraph')
const newParagraph = () => {
if(clickInput1==='1') {
    paragraph.innerText = 'seu texto aqui'
}
}
paragraph.addEventListener('load',newParagraph)