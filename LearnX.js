// const list = document.getElementsByClassName("tolearn");
// const loader = document.querySelector(".loader");
// const main = document.querySelector(".main");


function load() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.opacity = 1;
        setTimeout(() =>{
            setTimeout(() => {
                one.style.opacity = 1;
            }, 1000)
            setTimeout(() => {
                two.style.opacity = 1;
            }, 1150)
            setTimeout(() => {
                three.style.opacity = 1;
            }, 1250)
            setTimeout(() => {
                start.style.opacity = 1;
            }, 1450)
        }, 30)
    }, 1500)
}

load();
