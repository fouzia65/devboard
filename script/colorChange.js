
const colors = ['#00b894', '#00cec9', '#a29bfe', '#55efc4', '#81ecec'];

function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.getElementById("theme-btn").addEventListener('click', changeColor);
