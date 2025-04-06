document.getElementById("yesBtn").addEventListener("click", function () {
    let response = document.getElementById("response");
    response.innerHTML = "Yay! 💕 I knew you'd say yes! 🎉";
    response.style.display = "block";

    // Confetti Effect
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉";
        confetti.style.position = "absolute";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.fontSize = Math.random() * 20 + 15 + "px";
        confetti.style.animation = "floatHearts 3s linear infinite";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }

    // Heart Animation
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
});

document.getElementById("noBtn").addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
