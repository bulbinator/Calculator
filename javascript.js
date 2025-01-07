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

let calculator = document.querySelector('.calculator')
let numbers = document.querySelector('.numbers')
let operations = document.querySelector('.operations')
let calcText = document.querySelector('.calcText')
let clear = document.querySelector('.clear')

let expression = []

clear.addEventListener("click", function(e)
{
    calcText.textContent = ""
    expression = []
})


calculator.addEventListener("click", function(e)
{

    if (e.target.tagName === "BUTTON" && numbers.contains(e.target))
    {
        console.log(e.target.textContent)
        calcText.textContent += e.target.textContent
    }

    if (e.target.tagName === "BUTTON" && operations.contains(e.target))
    {
        expression.push(calcText.textContent)
        expression.push(e.target.textContent)
        calcText.textContent = ""
    }

    if (e.target.textContent === "=")
    {
        try
        {
            let answer = 0
            let i = Number(expression.at(-4))
            let operation = expression.at(-3)
            let j = Number(expression.at(-2))

            switch(operation)
            {
                case '+':
                    answer = add(i, j)
                    break
                case '-':
                    answer = subtract(i, j)
                    break
                case 'x':
                    answer = multiply(i, j)
                    break
                case '/':
                    answer = divide(i, j)
                    break
            }

            calcText.textContent = answer
            expression = []
        }
        catch
        {
            calcText.textContent = "Error"
        }
    }

})