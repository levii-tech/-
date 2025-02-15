function Calculator(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let equal = document.querySelector('#equal');
    let clear = document.querySelector('#C');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.value;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = "";
        }else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = '';
    })
}

Calculator();

