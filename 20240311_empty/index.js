/* Canvas 및 Javascript Class 테스트 코드
   타이머 셋팅, 일정 시간마다 원 객체 생성 및 애니메이션처럼 구현
   현재 캔버스를 지우는 코드를 각 객체마다 호출하기 때문에 개선이 필요
*/

class Circle {
    constructor(size) {
        this.size = size;
        this.isComplete = false;
        this.myCanvas = document.getElementById('myCanvas');
    }

    draw(x, y) {
        if(this.isComplete) return;
        const ctx = myCanvas.getContext('2d');
        ctx.beginPath();
        ctx.clearRect(0, 0, myCanvas.clientWidth, myCanvas.height);
        ctx.arc(x, y, this.size, 0, Math.PI * 2, false);
        ctx.stroke();
        this.size += 1;
    }
}

document.getElementById('myCanvas').addEventListener('click', onMouseOver);

function onMouseOver(event) {
    let c = new Circle(0);
    let timerId = setInterval(() => { c.draw(event.offsetX, event.offsetY); }, 10);
    setTimeout(() => { c.isComplete = true; }, 5000);
}