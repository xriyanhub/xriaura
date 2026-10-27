export function init() {
    console.log("Refer module loaded successfully!");
    const copyBtn = document.getElementById('copyBtn');
    const refLink = document.getElementById('refLink');

    if (copyBtn && refLink) {
        copyBtn.onclick = () => {
            refLink.select();
            navigator.clipboard.writeText(refLink.value);
            copyBtn.innerText = 'Copied!';
            setTimeout(() => {
                copyBtn.innerText = 'Copy Link';
            }, 2000);
        };
    }
}
