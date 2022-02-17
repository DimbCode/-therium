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
    function valueF(){
        var text = "";
        var possible = "1234567890";
    
        for( var i=0; i < 3; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    function feeF(){
        var text = "";
        var possible = "1234567890000";
    
        for( var i=0; i < 3; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    }
    let fee = feeF();
    let value = valueF();
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
        <span class="history-col-text-border">${value * 2} ETH</span>
        <span class="history-col-text">${value} ETH</span>
    </div>
    <span class="history-col-text">0.0000${fee}</span>
    <span class="history-col-text_time">right now</span>
</div>`
footer_wrap.prepend(col)
}, 5000);