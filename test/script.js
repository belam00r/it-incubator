const calc = document.querySelector('body');
let arr = []
calc.addEventListener("mouseover", event => {
    // console.log(event.target)
    if (event.target.closest("span")) {
        event.target.style.backgroundColor = "#7171b0";
    }
})
calc.addEventListener("mouseout", event => {
    if (event.target.closest("span")) {
        event.target.style.backgroundColor = "#51a651";
    }
})

calc.addEventListener('click', event => {
    if (!event.target.closest("span")) {
        return
    }
    let out = document.querySelector(".out")
    if (event.target.closest(".summ")) {
        let summ = arr.join('')
        out.innerHTML = eval(summ)
        arr = []
        return
    }
    arr.push(event.target.innerHTML)
    out.innerHTML = arr.join("")
    console.log(arr)


})