// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

const url = "http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596"

function t1() {
    fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596&action=1')
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-1").innerHTML = data
        })
}
document.querySelector(".b-1").addEventListener("click", t1)



document.querySelector('.b-2').addEventListener("click", () => {
    fetch(`${url}&action=2&name=Vladimir`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-2").textContent = data
        })
})


document.querySelector(".b-3").addEventListener("click", () => {
    fetch(`${url}&action=3&num1=3&num2=4`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-3").textContent = data;
        })
})


document.querySelector(".b-4").addEventListener("click", () => {
    fetch(`${url}&action=4&num1=2&num2=22`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-4").textContent = data;
        })
})

document.querySelector(".b-5").addEventListener("click", () => {
    fetch(`${url}&action=5`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-5").textContent = data;
        })
})

// ваше событие здесь!!!

document.querySelector(".b-6").addEventListener("click", () => {
    fetch(`${url}&action=6&num1=22&num2=222`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-6").textContent = data;
        })
})

// ваше событие здесь!!!


document.querySelector(".b-7").addEventListener("click", () => {
    fetch(`${url}&action=7`)
        .then(data => data.text())
        .then(data => {
            let img = document.createElement("img");
            img.src = data
            document.querySelector('.out-7').appendChild(img)
        })
})

document.querySelector(".b-8").addEventListener("click", () => {
    fetch(`${url}&action=8&year=1991`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-8").textContent = data;
        })
})

document.querySelector(".b-9").addEventListener("click", () => {
    fetch(`${url}&action=9&m=1&d=1&y=1`)
        .then(data => data.text())
        .then(data => {
            document.querySelector(".out-9").textContent = data;
        })
})

function newPostFetch(button, out, form) {
    document.querySelector(button).addEventListener("click", () => {
        fetch('http://getpost.itgid.info/index2.php', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    //   'Content-Type': 'application/json'
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: form // body data type must match "Content-Type" header
            })
            .then(data => {
                // console.log(form)
                return data.text()
            })
            .then(data => {
                // console.log(data)
                document.querySelector(out).innerHTML = data
            })
    })

}

//task10
let form = "auth=7859d9d42a8834141d529577207c9596&action=1"
newPostFetch(".b-10", ".out-10", form)

//task11
form = "auth=7859d9d42a8834141d529577207c9596&action=2&name=Vladimir"
newPostFetch(".b-11", ".out-11", form)

//task12
form = "auth=7859d9d42a8834141d529577207c9596&action=3&num1=22&num2=33"
newPostFetch(".b-12", ".out-12", form)

//task12
form = "auth=7859d9d42a8834141d529577207c9596&action=3&num1=22&num2=33"
newPostFetch(".b-12", ".out-12", form)

//task13
form = "auth=7859d9d42a8834141d529577207c9596&action=4&num1=22&num2=33"
newPostFetch(".b-13", ".out-13", form)

//task14
form = "auth=7859d9d42a8834141d529577207c9596&action=5"
newPostFetch(".b-14", ".out-14", form)

//task15
form = "auth=7859d9d42a8834141d529577207c9596&action=6&num1=22&num2=33"
newPostFetch(".b-15", ".out-15", form)

//task16
form = "auth=7859d9d42a8834141d529577207c9596&action=7"
newPostFetch(".b-16", ".out-16", form)