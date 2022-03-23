// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1(event) {
    document.querySelector(".out-1").innerHTML += "сработал тач "
}

document.querySelector(".div-1").addEventListener("touchstart", t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let countTouch = 0
document.querySelector(".div-2").addEventListener("touchstart", e => {

    countTouch++
    document.querySelector(".out-2").textContent = countTouch
})

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

document.querySelector('.task-3').addEventListener('touchstart', e => {

    let out = ""
    for (let item of e.targetTouches) {
        out = item.target.innerHTML
    }
    document.querySelector('.out-3').textContent = out
})


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

document.querySelector(".div-4").addEventListener("touchstart", t4)

function t4(e) {
    let out = e.target.innerHTML
    document.querySelector(".out-4").textContent = out
}
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

document.querySelector('.b-5').addEventListener('touchstart', e => {
    document.querySelector('.div-4').removeEventListener("touchstart", t4)
})

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

document.querySelector(".div-4").addEventListener("touchend", e => {
    document.querySelector(".out-6").textContent = "touchend"
})

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

document.querySelector(".div-7").addEventListener("touchstart", e => {
    e.target.style.backgroundColor = "red"
})

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

const a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow']

function t8(event) {
    let currentColor = a8[Math.floor(Math.random() * a8.length)]
        // console.log(Math.floor(Math.random() * a8.length))
    event.target.style.backgroundColor = currentColor

}
document.querySelector('.div-8').addEventListener("touchstart", t8)

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

document.querySelector(".div-9").addEventListener("touchstart", e => {
    document.querySelector(".out-9").textContent = e.touches.length
})

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let width = 75;

document.querySelector('.div-10').addEventListener("touchmove", e => {
    console.log(e)
    width++;
    e.target.style.cssText = `width: ${width}px;`
})

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

document.querySelector(".div-11").addEventListener("touchmove", e => {
    console.log(e.changedTouches[0].radiusX)
    let radiusX = e.changedTouches[0].radiusX;
    let radiusY = e.changedTouches[0].radiusY;
    document.querySelector('.out-11').innerHTML = `${radiusX} ${radiusY}`;
})

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/


document.querySelector('.slide').addEventListener("click", e => {
    let img = document.querySelectorAll('.img-12-min')
    let imgMax = document.querySelector(".img-12-max")
    if (e.target.closest(".next")) {
        nextImg();
    }
    if (e.target.closest(".prev")) {
        prevImg();
    }

    function nextImg() {
        for (let index = 0; index < img.length; index++) {
            if (img[index].classList.contains('active-img')) {
                if (index + 1 >= img.length) return
                img[index].classList.remove('active-img')
                index++
                img[index].classList.add('active-img')
                imgMax.src = img[index].src
                return
            }
        }
    }

    function prevImg() {
        for (let index = 0; index < img.length; index++) {
            if (img[index].classList.contains('active-img')) {
                if (index == 0) return
                img[index].classList.remove('active-img')
                index--
                img[index].classList.add('active-img')
                imgMax.src = img[index].src
                return
            }
        }
    }
})