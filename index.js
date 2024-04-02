function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

document.addEventListener("DOMContentLoaded", ev => {
    const O = document.getElementsByClassName("O");
    const w = document.getElementsByClassName("w")[0];
    const title = document.getElementById("title");

    async function blink() {
        O[0].textContent = "U";
        O[1].textContent = "U";
        title.innerText = "UwU";

        await delay(400);
        O[0].textContent = "O";
        O[1].textContent = "O";
        title.innerText = "OwO";
    }

    setTimeout(async () => {
        while (true) {
            await delay(Math.random() * 6000 + 2000);
            blink();
        }
    }, 0);

    document.addEventListener("mousemove", ev => {
        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

        var moveX = (vw / 2 - ev.clientX) / vw * 2;
        var moveY = (vh / 2 - ev.clientY) / vh * 2;
        
        var transformO = `translate(${moveX * -3}vw, ${moveY * -3 - .5}vw)`;
        var transformw = `translate(${moveX * -.5}vw, ${moveY * -.5}vw)`;

        O[0].style.transform = transformO;
        O[1].style.transform = transformO;
        w.style.transform = transformw;

        if (moveX < 0) {
            O[0].style.transform += ` scale(100%)`;
            O[1].style.transform += ` scale(${100 - Math.pow(moveX * 4, 2)}%)`;
        } else {
            O[0].style.transform += ` scale(${100 - Math.pow(moveX * 4, 2)}%)`;
            O[1].style.transform += ` scale(100%)`;
        }
    })
    
});
