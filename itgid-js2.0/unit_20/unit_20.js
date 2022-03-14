// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая по событию keydown считывает содержимое event.key и добавляет в .out-1. Во всех последующих задачах - работаем с латиницей и цифрами. */

function t1(event) {
    // console.log(event);
    let out = document.querySelector(".out-1")
    out.textContent += event.key
    return event.key
}

document.querySelector('.i-1').onkeydown = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая по событию onkeypress выводит в out-2 числовой код символа (event.keyCode). */



document.querySelector('.i-2').onkeypress = (event) => {
    document.querySelector('.out-2').textContent = event.code
}

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте keyCode. */



document.querySelector('.i-3').onkeypress = event => {
    let out = document.querySelector('.out-3')
        // console.log(event.keyCode)
    event.keyCode > 57 ? out.textContent = "true" : out.textContent = "false";
}


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out-4 получаем ab4ci. */

function t4(event) {
    // console.log(event.keyCode);
    let out = document.querySelector(".out-4")
    out.textContent += event.key.toLowerCase()

}

document.querySelector('.i-4').onkeypress = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    document.querySelector(".out-5").textContent = event.key.toUpperCase();

}

document.querySelector('.i-5').onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая позволяет вводить в i-6 только символы в нижнем регистре. Т.е. мы до функции создаем строку. Внутри функции проверяем код символа. Если символ - в нижнем регистре - добавляем в строку. Потом принудительно присваиваем строку в value input i-6. Чтобы блокировать стандартный вывод в input в конце функции пишем return false;  */


let value = ""
document.querySelector('.i-6').onkeypress = event => {
    let input = event.target
        // console.log(input);
        // console.log(event.keyCode)
    if (event.keyCode > 96) {
        value += event.key
    }
    input.value = value
    return false
}


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = ['a', 'z', 'x', 'w', 'y', 't'];



document.querySelector('.i-7').onkeydown = event => {
    let out = document.querySelector(".out-7")
        // console.log(Math.floor(Math.random() * (a7.length)))
    let random = a7[Math.floor(Math.random() * (a7.length))]
    out.textContent = random
    return false
}

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая дописывает в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

const a8 = {
    i: 1,
    o: 0,
    l: 7
};

let out = "";

document.querySelector('.i-8').onkeydown = event => {
    let outDoc = document.querySelector('.out-8');
    // console.log(event)
    for (let k in a8) {
        if (k == event.key) {
            // console.log(k)
            out += a8[k];
            outDoc.textContent = out
            return false
        }
    }
    out += event.key
    outDoc.textContent = out
}


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество (число) нажатых клавиш стрелка вниз. */
let count = 0

function t9(event) {

    if (event.key = "ArrowDown") {
        count++
    }
    document.querySelector('.out-9').textContent = count
}

document.querySelector('.i-9').onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и блок .block-10. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину блока. Клавиши стрелка вверх и вниз - увеличивать высоту блока. Одно нажатие клавиши - 1px. */

let h = 75;
let w = 75;

function t10(event) {
    console.log(event)
    let block10 = document.querySelector(".block-10")
    console.log(block10)
    if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
        w++
        // console.log(w)
        block10.style.width = w + "px"
    }
    if (event.key == "ArrowUp" || event.key == "ArrowDown") {
        h++
        // console.log(h)
        block10.style.height = h + "px"
    }

}

document.querySelector('.i-10').onkeydown = t10;

// Task 11 ============================================
/*  Проект. 
1. Изучите верстку клавиатуры.
2. При вводе символа в i-11 ( латиница, нижний регистр) - клавише с таким символом присвойте класс .active. Это окрасит клавишу оранжевым фоном. Перед поиском и присвоением active, с помощью цикла удалите класс active у всех клавиш с классом keyboard.
3. Если все сделано верно, то при вводе следующего символа, предыдущая клавиша потеряет оранжевый фон, а новая введенная окрасится. 
4. Самостоятельно добавьте все цифры и второй ряд клавиш от a до l
5. Самостоятельно добавьте клавишу alt, enter.
*/



document.querySelector('.i-11').onkeydown = event => {
    console.log(event)
    let keyboard = document.getElementsByClassName("keyboard")
        // console.log(keyboard[0].getAttribute('data'))
    for (let k = 0; k < keyboard.length; k++) {
        if (event.key.toLowerCase() == keyboard[k].getAttribute('data') || event.code.toLowerCase() == keyboard[k].getAttribute('data')) {
            keyboard[k].classList.add("active")
        }
    }
}
document.querySelector('.i-11').onkeyup = event => {
    let keyboard = document.getElementsByClassName("keyboard")
    for (let k = 0; k < keyboard.length; k++) {
        if (keyboard[k].classList.length > 0) {
            keyboard[k].classList.remove("active")
        }
    }
}