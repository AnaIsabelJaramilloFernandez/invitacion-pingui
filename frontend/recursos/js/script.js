document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTOS
    ========================== */

    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const externalButtons = document.getElementById("externalButtons");
    const acceptScreen = document.getElementById("acceptScreen");

    const songAudio = document.getElementById("songAudio");     // Canción principal
    const effectAudio = document.getElementById("effectAudio"); // Sonido apertura

    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");

    /* =========================
       CONFIGURACIÓN INICIAL
    ========================== */

    songAudio.loop = true;
    externalButtons.classList.remove("show");

    /* =========================
       ABRIR SOBRE
    ========================== */

    envelope.addEventListener("click", () => {

        if (!envelope.classList.contains("open")) {

            envelope.classList.add("open");

            // Mostrar botones
            externalButtons.classList.add("show");

            // Reproducir efecto
            effectAudio.currentTime = 0;
            effectAudio.play().catch(() => {});
        }
    });

    /* =========================
       BOTÓN NO (HUYE + MENSAJES)
    ========================== */

    const noMessages = [
        "¿Seguro? 😏",
        "Mmm… no es ese 😌",
        "Te estás equivocando 😂",
        "Fresas… 🍓",
        "Con crema…",
        "No seas así conmigo 🥺",
        "Ya acepta 😭"
    ];

    let noIndex = 0;

    function moveNoButton() {

        const rect = noBtn.getBoundingClientRect();

        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";

        // Cambiar mensaje en bucle
        noBtn.textContent = noMessages[noIndex];
        noIndex = (noIndex + 1) % noMessages.length;
    }

    // Se mueve cada vez que el mouse intenta tocarlo
    noBtn.addEventListener("mouseenter", moveNoButton);

    /* =========================
       BOTÓN SÍ
    ========================== */

    yesBtn.addEventListener("click", () => {

        // Cerrar carta
        envelope.classList.remove("open");

        // Ocultar botones
        externalButtons.classList.remove("show");

        setTimeout(() => {

            envelope.style.display = "none";
            acceptScreen.classList.add("active");

            // Iniciar canción principal
            songAudio.currentTime = 0;
            songAudio.play().catch(() => {});

        }, 700);
    });

    /* =========================
       PARTÍCULAS
    ========================== */

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles = [];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3
        });
    }

    function animate() {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
            if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.4)";
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();

});
