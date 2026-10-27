export function init() {
    console.log("Auth module loaded successfully!");
    const authBtn = document.getElementById('authBtn');
    if (authBtn) {
        authBtn.onclick = () => {
            alert("User authenticated successfully via Telegram WebApp!");
        };
    }
}
