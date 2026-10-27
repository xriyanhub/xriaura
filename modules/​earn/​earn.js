export function init() {
    console.log("Earn module loaded successfully!");
    let score = 0;
    const btn = document.getElementById('tapBtn');
    const scoreDisplay = document.getElementById('tapScore');

    if (btn && scoreDisplay) {
        btn.onclick = () => {
            score += 1;
            scoreDisplay.innerText = score;
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 100);
        };
    }
}
