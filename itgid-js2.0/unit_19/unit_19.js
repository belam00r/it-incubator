// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

// function t1() {
//     console.log("work")
//         // document.querySelector('.out-1').textContent = Event.textContent
// }

document.querySelector('.div-1').onclick = (event) => {
        console.log(event)
        document.querySelector(".out-1").textContent = event.target.innerHTML
    }
    // Task 2 ============================================
    /*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
    if (event.altKey) {
        document.querySelector(".out-2").textContent = true
    } else document.querySelector(".out-2").textContent = false

}

document.querySelector(".div-2").onclick = t2

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;
let div3 = document.querySelector(".div-3")
div3.onclick = (event) => {
    console.log(event)
    w3 += 5
    div3.style.width = w3 + "px"
    document.querySelector(".out-3").innerHTML = w3 + "px"

}


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

let div4 = document.querySelector(".div-4")
let out4 = document.querySelector('.out-4')
div4.ondblclick = (e) => out4.textContent = e.target.innerHTML

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

document.querySelector(".div-5").onclick = (event) => {
    // document.querySelector('.div-5').classList.toggle("active")
    event.target.classList.toggle("active")
}

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

document.querySelector(".div-6").ondblclick = event => {
    let ul6 = document.querySelector(".ul-6")
    ul6.classList.toggle("hide")
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

document.querySelector(".div-7").onclick = event => event.target.classList.toggle("active")

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */


document.querySelector(".ch-8").onchange = (event) => {
    if (event.target.checked) {
        document.querySelector("label").oncontextmenu = () => false
    } else {
        document.querySelector("label").oncontextmenu = () => true
    }
}


// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

let div9 = document.querySelector(".div-9")

div9.oncontextmenu = (event) => {
        console.log(event.target)
        event.target.setAttribute('src', "img/2.png")
    }
    // ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
let div10 = document.querySelector(".div-10")

div10.onmouseenter = (event) => {
    console.log(event)
    event.target.children[0].setAttribute('src', "img/2.png")
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

let div11 = document.querySelector(".div-11")

div11.onmouseenter = event => {
    event.target.children[0].setAttribute("src", "img/2.png")
}
div11.onmouseleave = event => {
        event.target.children[0].setAttribute("src", "img/1.png")

    }
    // ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let div12 = document.querySelector('.div-12').onmousedown = event => event.target.classList.toggle("active");

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector(".div-13").onmousedown = event => event.target.classList.add("active")
document.querySelector(".div-13").onmouseup = event => event.target.classList.remove("active")


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

document.querySelector(".b-14").onclick = () => {
    document.querySelector(".div-14").classList.toggle("active")
}


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

document.querySelector('.div-15').onmousemove = (event) => {
        let a = event.target.innerHTML
        a++
        event.target.innerHTML = a
    }
    // ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
document.querySelector('.div-16').onmousemove = t16

function t16(event) {

    let width = event.target.offsetWidth
    if (width < 200) { width++ }

    event.target.style.width = `${width}px`

}
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

document.querySelector(".b-17_on").onclick = () => {
    console.log("выполнилось")
    document.querySelector('.div-16').onmousemove = t16

}


document.querySelector(".b-17_off").onclick = () => {
    document.querySelector('.div-16').onmousemove = () => false
    console.log("выполнилось")

}

// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

document.querySelector('.div-18').onmouseenter = (event) => {
        console.log(event)
        event.target.innerHTML = event.target.clientWidth + 4 + "px"
    }
    // ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

document.querySelector(".div-19").onmouseout = event => {
        console.log(event)
        event.target.innerHTML = event.target.classList
    }
    // ваше событие здесь!!!


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

document.querySelector('progress').onmousemove = event => {
        let progerss = document.querySelector('progress')
        console.log(event)
        let value = +progerss.value
        progerss.value++
    }
    // ваше событие здесь!!!