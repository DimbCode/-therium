const range = document.querySelector('.deposit-range')
const profit_result = document.querySelector('.profit-result')
const button = document.querySelectorAll('.deposit-btn')
const price = document.querySelector('.top-col_price-from')
const result = document.querySelector('.top-col_price-to')


range.addEventListener("change", ()=> {
    result.innerHTML = range.value * 2 + (' ETH');
    price.innerHTML = range.value  + (' ETH');
    profit_result.innerHTML = range.value * 2 + (' ETH');
})
range.addEventListener("focus", ()=> {
    range.addEventListener("mousemove", ()=> {
        result.innerHTML = range.value * 2 + (' ETH');
        price.innerHTML = range.value  + (' ETH');
        profit_result.innerHTML = range.value * 2 + (' ETH');
    })
})
range.addEventListener("blur", ()=> {
    range.addEventListener("mousemove", ()=> {
        result.innerHTML = range.value + (' ETH');
        price.innerHTML = range.value / 2 + (' ETH');
        profit_result.innerHTML = range.value + (' ETH');
    })
})
function deposit_btn0() {
    price.innerHTML = 10 + (' ETH');
    result.innerHTML = 20 + (' ETH');
    range.value = 20
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[0].classList.add('button-active')
}
function deposit_btn1() {
    price.innerHTML = 20 + (' ETH');
    result.innerHTML = 40 + (' ETH');
    range.value = 40
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[1].classList.add('button-active')
}
function deposit_btn2() {
    price.innerHTML = 30 + (' ETH');
    result.innerHTML = 60 + (' ETH');
    range.value = 60
    profit_result.innerHTML = range.value * 2 + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[2].classList.add('button-active')
}
function deposit_btn3() {
    price.innerHTML = 40 + (' ETH');
    result.innerHTML = 80 + (' ETH');
    range.value = 80
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[3].classList.add('button-active')
}
function deposit_btn4() {
    price.innerHTML = 50 + (' ETH');
    result.innerHTML = 100 + (' ETH');
    range.value = 100
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[4].classList.add('button-active')
}
function deposit_btn5() {
    price.innerHTML = 60 + (' ETH');
    result.innerHTML = 120 + (' ETH');
    range.value = 120
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[5].classList.add('button-active')
}
function deposit_btn6() {
    price.innerHTML = 70 + (' ETH');
    result.innerHTML = 140 + (' ETH');
    range.value = 140
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[6].classList.add('button-active')
}
function deposit_btn7() {
    price.innerHTML = 80 + (' ETH');
    result.innerHTML = 160 + (' ETH');
    range.value = 160
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[7].classList.add('button-active')
}
function deposit_btn8() {
    price.innerHTML = 90 + (' ETH');
    result.innerHTML = 180 + (' ETH');
    range.value = 180
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[8].classList.add('button-active')
}

