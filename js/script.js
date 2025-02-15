function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(createHeart, 200);