// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
const url = "http://getpost.itgid.info/index2.php";
let getArray = {
    auth: "7859d9d42a8834141d529577207c9596",
    action: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    name: "Vladimir"
}
let xhr = new XMLHttpRequest

document.querySelector(".container").addEventListener("click", event => {
    //Task1
    if (event.target.closest(".b-1")) {
        const src = `${url}?auth=${getArray.auth}&action=${getArray.action[0]}`;
        xhr.open("GET", src, true)
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                myFunction1(xhr.responseText);
            }
        }
        xhr.send()

        function myFunction1(data) {
            document.querySelector(".out-1").textContent = data;
        }
    }
    if (event.target.closest(".b-2")) {
        let src2 = `${url}?auth=${getArray.auth}&action=2&name=${getArray.name}`
        xhr.open("GET", src2);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.querySelector(".out-2").textContent = xhr.responseText
            }
        }
        xhr.send()
    }
    if (event.target.closest(".b-3")) {
        xhr.open("GET", `http://getpost.itgid.info/index2.php?auth=${getArray.auth}&action=3&num1=3&num2=2`)
        xhr.onreadystatechange = function() {
            if (this.status = 200 && this.readyState == 4) {
                myFunction3(this.responseText)
            } else {
                console.log("не прошла проверку")
            }

        }
        xhr.send()

        function myFunction3(data) {
            document.querySelector(".out-3").textContent = data
        }
    }
    if (event.target.closest(".b-4")) {
        xhr.open("GET", `${url}?auth=${getArray.auth}&action=4&num1=3&num2=220`)
        xhr.onreadystatechange = t4;

        function t4() {
            if (this.readyState == 4 && this.status == 200) {
                console.log("сработал запрос 4")
                myFunction4(this.responseText)
            } else {
                console.log("не сработал запрос")
            }
        }
        xhr.send()

        function myFunction4(data) {
            document.querySelector(".out-4").textContent = data
        }
    }

    if (event.target.closest(".b-5")) {
        xhr.open("GET", `${url}?auth=${getArray.auth}&action=5`)
        xhr.onreadystatechange = t5;

        function t5() {
            if (this.readyState == 4 && this.status == 200) {
                console.log("запрос 5 готов")
                myFunction5(this.responseText)
            }
        }
        xhr.send()

        function myFunction5(data) {
            document.querySelector(".out-5").textContent = data
        }
    }
    if (event.target.closest(".b-6")) {
        sendXhr("GET", "6", "out-6", true, 22, 114)
    }
    if (event.target.closest(".b-7")) {
        sendXhr("GET", 7, "out-7")
    }
    if (event.target.closest(".b-8")) {
        sendXhrYear("GET", 8, 1991, "out-8")
    }
    if (event.target.closest(".b-10")) {
        sendXhrNew("out-10", `auth=${getArray.auth}&action=1`)
    }
    if (event.target.closest(`.b-11`)) {
        sendXhrNew("out-11", `auth=${getArray.auth}&action=2&name=Vladimir`)
    }
    if (event.target.closest(`.b-12`)) {
        sendXhrNew(`out-12`, `auth=${getArray.auth}&action=3&num1=2&num2=3`)
    }
    if (event.target.closest(`.b-13`)) {
        sendXhrNew(`out-13`, `auth=${getArray.auth}&action=4&num1=2&num2=8`)
    }
    if (event.target.closest(`.b-14`)) {
        sendXhrNew(`out-14`, `auth=${getArray.auth}&action=5`)
    }
    if (event.target.closest(`.b-15`)) {
        sendXhrNew(`out-15`, `auth=${getArray.auth}&action=6&num1=5&num2=5`)
    }
    if (event.target.closest(`.b-16`)) {
        sendXhrNew(`out-16`, `auth=${getArray.auth}&action=7`)
    }
    if (event.target.closest(`.b-17`)) {
        sendXhrNew(`out-17`, `auth=${getArray.auth}&action=8&year=1991`)
    }
    if (event.target.closest(`.b-18`)) {
        sendXhrNew(`out-18`, `auth=${getArray.auth}&action=9&m=1&d=1&y=1`)
    }
})

function sendXhrNew(out, randomParameters) {
    const xhr = new XMLHttpRequest
    src = `http://getpost.itgid.info/index2.php`
    console.log("пошла функция")
    xhr.open("POST", src);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Прошел запрос")
            document.querySelector(`.${out}`).textContent = this.responseText;
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.send(randomParameters)

}



function sendXhr(method, actionNumber, input, numsend = false, num1, num2) {
    const url = "http://getpost.itgid.info/index2.php"
    let xhr = new XMLHttpRequest

    let src = ''
    if (numsend == false) {
        src = `${url}?auth=${getArray.auth}&action=${actionNumber}`
    } else {
        src = `${url}?auth=${getArray.auth}&action=${actionNumber}&num1=${num1}&num2=${num2}`
    }
    xhr.open(method, src);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector(`.${input}`).textContent = this.responseText
        }
    }
    xhr.send()
}

function sendXhrYear(method, actionNumber, year, input, numsend = false, num1, num2) {
    const url = "http://getpost.itgid.info/index2.php"
    let xhr = new XMLHttpRequest

    let src = ''
    if (numsend == false) {
        src = `${url}?auth=${getArray.auth}&action=${actionNumber}&year=${year}`
    } else {
        src = `${url}?auth=${getArray.auth}&action=${actionNumber}&num1=${num1}&num2=${num2}`
    }
    xhr.open(method, src);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.querySelector(`.${input}`).textContent = this.responseText
        }
    }
    xhr.send()
}