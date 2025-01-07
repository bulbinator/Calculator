function add(i, j)
{
    return i + j
}

function subtract(i, j)
{
    return i - j
}

function multiply(i, j)
{
    return i * j
}

function divide(i, j)
{
    return i / j
}

function operate(i, operation, j)
{
    return operation(i, j)
}

let calculator = document.querySelector('.calculator')
let numbers = document.querySelector('.numbers')
let calcText = document.querySelector('.calcText')
let clear = document.querySelector('.clear')

clear.addEventListener("click", function(e)
{
    calcText.textContent = ""
})

calculator.addEventListener("click", function(e)
{
    if (e.target.tagName === "BUTTON" && numbers.contains(e.target))
    {
        console.log(e.target.textContent)
        calcText.textContent += e.target.textContent
    }
})