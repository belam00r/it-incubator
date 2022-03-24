// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */


let b1 = document.querySelector('.b-1')
b1.addEventListener("click", () => {
    console.log('Запись')
    localStorage.setItem(5, 11)
})


// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

const a2 = [7, 6, 5]

function t2() {
    localStorage.setItem("a2", JSON.stringify(a2))
}
document.querySelector('.b-2').onclick = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */


document.querySelector(".b-3").addEventListener("click", event => {
    let a = JSON.parse(localStorage.getItem("a2"))
    let out = ""
    for (let key in a) {
        out += `${key} - ${a[key]}<br>`
    }
    console.log(out)
    document.querySelector('.out-3').innerHTML = out
})

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
const a4 = {
    hello: "world",
    hi: "mahai"
};
document.querySelector(".b-4").addEventListener("click", () => {
        localStorage.setItem("a4", JSON.stringify(a4))
    })
    // ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

document.querySelector(".b-5").addEventListener("click", () => {
    const b5 = JSON.parse(localStorage.getItem("a4"))
    let out = "";
    for (let key in b5) {
        out += `${key} ${b5[key]} <br>`
    }
    document.querySelector(".out-5").innerHTML = out;
})

// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

document.querySelector(".b-6").addEventListener("click", () => {
    localStorage.clear()
})

// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/
let arr = []
document.querySelector(".b-7").addEventListener("click", () => {
    let input = document.querySelector(".i-7")
    arr.push(input.value)
    input.value = "";

    function setLocal(key, array) {
        localStorage.setItem(key, JSON.stringify(array))

    }
    setLocal("a7", arr)
})

// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let arr = JSON.parse(localStorage.getItem("a7"))
        // arr.splice(arr.length - 1)
    document.querySelector('.out-8').innerHTML = `Удаляем элемент ${arr.pop()}`

    localStorage.setItem("a7", JSON.stringify(arr))

}
document.querySelector(".b-8").onclick = t8;
// ваше событие здесь!!!