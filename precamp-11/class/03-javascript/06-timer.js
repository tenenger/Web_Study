const gettoken = () => {
    if (document.getElementById('setbtn').disabled = true) {
        document.getElementById('setbtn').disabled = false;
    }
    let number = String(Math.floor(Math.random() * 1000000)).padStart('6', 0)
    document.getElementById('numbmers').innerText = number
    document.getElementById('makebtn').style.color = "#" + number;

    let time = 10;

    const interval = setInterval(function() {
        if (time >= 0) {
            document.getElementById('timer').innerText = String(time).padStart(2, '0')
            time = (time - 1)
        }
        else {
            document.getElementById('numbmers').innerText = '삭제'
            document.getElementById('timer').innerText = '시간초과'
            clearInterval(interval);
            time = 10;
            document.getElementById('setbtn').disabled = true;
        }
    }, 1000)
}
