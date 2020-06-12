
let count = 0;

const val = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('decrease')) {
            count--;
        } else if (e.currentTarget.classList.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            val.style.color = "green"
        } else if (count < 0) {
            val.style.color = "red";
        } else {
            val.style.color = "black";
        }
        val.textContent = count;




    })
})