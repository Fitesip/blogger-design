let right = document.getElementById('arrow-right');
let left = document.getElementById('arrow-left');
let img = document.getElementById('image-block');
let i = 0

right.onclick = function () {
    i -= 1920
    img.style.translate = i + 'px';
    right.disabled = true;
    left.disabled = false;
}
left.onclick = function () {
    i += 1920
    img.style.translate = i + 'px';
    right.disabled = false;
    left.disabled = true;
}