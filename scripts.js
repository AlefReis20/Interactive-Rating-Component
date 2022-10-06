const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')

const checkInputs = (inputs) => {
    let filled = true
    inputs.forEach((input) => {
        if (input.value === '')
            filled = false
    });

    return filled
}

inputs.forEach((input) => {
    const inputIsOk = () => {
        if (checkInputs(inputs)) {
            button.disabled = false
        } else {
            button.disabled = true
        }
    }
    input.addEventListener('click', inputIsOk)
})

const selected = (n) => {
    let x = inputs
    for (i = 0; i < x.length; i++) {
        x[i].style.background = "#2F474F"
    }
    document.getElementById(n).style.background = "#FB7413"
    document.getElementById(n).style.color = "#FFF"

    document.getElementById('paragraph').textContent = `You selected ${n} out of 5!`
}

const pressedButton = () => {
    const container = document.getElementById('box1')
    const container2 = document.getElementById('box2')
    if (container.style.display === "none") {
        container.style.display = "block"
        container2.style.display = "none"
    } else {
        container.style.display = "none"
        container2.style.display = "block"
    }
}
button.addEventListener('click', pressedButton)