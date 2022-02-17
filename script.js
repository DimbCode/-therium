const copyText = document.getElementById("bonus-input");
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
    range.addEventListener("mouseleave", ()=> {
        result.innerHTML = range.value * 2 + (' ETH');
        price.innerHTML = range.value + (' ETH');
        profit_result.innerHTML = range.value * 2 + (' ETH');
    })
})
//navigation calculator
function deposit_btn0() {
    price.innerHTML = 10 + (' ETH');
    result.innerHTML = 20 + (' ETH');
    range.value = 10
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[0].classList.add('button-active')
}
function deposit_btn1() {
    price.innerHTML = 20 + (' ETH');
    result.innerHTML = 40 + (' ETH');
    range.value = 20
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[1].classList.add('button-active')
}
function deposit_btn2() {
    price.innerHTML = 30 + (' ETH');
    result.innerHTML = 60 + (' ETH');
    range.value = 30
    profit_result.innerHTML = range.value * 2 + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[2].classList.add('button-active')
}
function deposit_btn3() {
    price.innerHTML = 40 + (' ETH');
    result.innerHTML = 80 + (' ETH');
    range.value = 40
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[3].classList.add('button-active')
}
function deposit_btn4() {
    price.innerHTML = 50 + (' ETH');
    result.innerHTML = 100 + (' ETH');
    range.value = 50
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[4].classList.add('button-active')
}
function deposit_btn5() {
    price.innerHTML = 60 + (' ETH');
    result.innerHTML = 120 + (' ETH');
    range.value = 60
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[5].classList.add('button-active')
}
function deposit_btn6() {
    price.innerHTML = 70 + (' ETH');
    result.innerHTML = 140 + (' ETH');
    range.value = 70
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[6].classList.add('button-active')
}
function deposit_btn7() {
    price.innerHTML = 80 + (' ETH');
    result.innerHTML = 160 + (' ETH');
    range.value = 80
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[7].classList.add('button-active')
}
function deposit_btn8() {
    price.innerHTML = 90 + (' ETH');
    result.innerHTML = 180 + (' ETH');
    range.value = 90
    profit_result.innerHTML = range.value + (' ETH');

    button.forEach((element)=> {
        element.classList.remove('button-active')
    })
    button[8].classList.add('button-active')
}

//copy button
let copy_button = ()=> {
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}
const footer_wrap = document.querySelector('.footer-history')


setInterval(() => {
    function TxHsh(){
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    
        for( var i=0; i < 10; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    function blockF(){
        var text = "";
        var possible = "0123456789";
    
        for( var i=0; i < 6; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    function fromF(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for( var i=0; i < 7; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    function fromF2(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for( var i=0; i < 7; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    function toF(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for( var i=0; i < 7; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    function to2F(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for( var i=0; i < 7; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    let to = toF();
    let to2 = to2F();
    let from = fromF();
    let from2 = fromF2();
    let block = blockF();
    let TxHash = TxHsh();

    let col = document.createElement('div')
    col.innerHTML = `
    <div class="footer-history-col">
    <img src="img/checked-footer.png" alt="" class="checked-footer">
    <span class="history-col-text_TxHash">${TxHash}..</span>
    <span class="history-col-text-number_block">${block}</span>
    <div class="history-col-text_from">
        <span class="history-col-text_from_in">${from}...</span>
        <span class="history-col-text">${from2}...</span>
    </div>
    <div class="history-col-text_to">
        <span class="history-col-text_from_in">${to}...</span>
        <span class="history-col-text">${to2}...</span>
    </div>
    <div class="history-col-text_value">
        <span class="history-col-text-border">200 ETH</span>
        <span class="history-col-text">100 ETH</span>
    </div>
    <span class="history-col-text">0.0000065</span>
    <span class="history-col-text_time">right now</span>
</div>`
footer_wrap.prepend(col)
}, 5000);