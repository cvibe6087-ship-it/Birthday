// ===========================
// Elements
// ===========================

// ===========================
// ELEMENTS
// ===========================

const blowBtn = document.getElementById("blowBtn");
const giftBtn = document.getElementById("giftBtn");
const flame = document.getElementById("flame");
const smoke = document.getElementById("smoke");

const giftBox = document.getElementById("giftBox");

const letter = document.getElementById("letter");
const typewriter = document.getElementById("typewriter");

const loveBtn = document.getElementById("loveBtn");

const ending = document.getElementById("ending");

const music = document.getElementById("music");

// ===========================
// MESSAGE
// ===========================

const message = `

Happy birthday, baby! ❤️ 17 ka na, tanda mo na HAHAHA. Thank you for always being such a kind, patient, and loving girlfriend throughout this past year. Malapit na rin tayong mag-one year, sana kayanin mo pa ang ugali ko. Mwehehe.

I know you don't really want to celebrate your birthday, but I just want to make you happy and make you feel that today is your special day.

I'm just so grateful to have you in my life. I know we've had a lot of arguments, misunderstandings, fights, and miscommunications, but you still stayed with me. You set aside your pride just to fix the problems we've faced before. You continue to give me your love, and I'm so thankful for that.

I just want you to know that everything you do is appreciated and noticed by me, baby. I appreciate all the effort you put into our relationship and everything you do for me. Always remember that I love you, I care about you, I'm always here for you, and I need you. (Wow, needy yarn? HAHAHA.)

I pray that whatever happens to us in the days and years to come, we will stay strong and always remember the love we have for each other.

Happy birthday, baby. I love you so much! ❤️

`;

// ===========================
// TYPEWRITER
// ===========================

let index = 0;

function typeLetter() {

    if (index < message.length) {

        typewriter.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter, 40);

    } else {

        loveBtn.classList.remove("hidden");

    }

}

document.addEventListener("click", () => {
    music.play();
}, { once: true });

// ===========================
// BLOW CANDLE
// ===========================

blowBtn.addEventListener("click", () => {

    music.currentTime = 0;

    music.play()
        .then(() => console.log("Music playing"))
        .catch(err => console.error(err));

});

blowBtn.addEventListener("click", () => {

    flame.style.display = "none";

    smoke.classList.remove("hidden");

    blowBtn.classList.add("hidden");

    music.volume = 0.4;

    music.play().catch(error => {
        console.log(error);
    });

    if (typeof confetti !== "undefined") {

        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });

    }

    setTimeout(() => {

        smoke.classList.add("hidden");

        giftBtn.classList.remove("hidden");

    }, 2000);

});

// ===========================
// SHOW GIFT
// ===========================

giftBtn.addEventListener("click", () => {

    giftBtn.classList.add("hidden");

    giftBox.classList.remove("hidden");

});

// ===========================
// OPEN GIFT
// ===========================

giftBox.addEventListener("click", () => {

    const lid = document.querySelector(".lid");

    lid.style.transform = "rotate(-35deg) translateY(-35px)";

    giftBox.style.animation = "none";

    setTimeout(() => {

        giftBox.classList.add("hidden");

        letter.classList.remove("hidden");

        typeLetter();

    }, 900);

});

// ===========================
// LOVE BUTTON
// ===========================

loveBtn.addEventListener("click", () => {

    if (typeof confetti !== "undefined") {

        confetti({
            particleCount: 350,
            spread: 180,
            origin: { y: 0.6 }
        });

    }

    createHeartRain();

    setTimeout(() => {

        ending.style.display = "flex";

    }, 2500);

});

// ===========================
// HEART RAIN
// ===========================

function createHeartRain() {

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-50px";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        let top = -50;
        let left = Math.random() * window.innerWidth;

        const fall = setInterval(() => {

            top += 5;

            left += Math.random() * 2 - 1;

            heart.style.top = top + "px";
            heart.style.left = left + "px";

            if (top > window.innerHeight) {

                clearInterval(fall);

                heart.remove();

            }

        }, 20);

    }

}

// ===========================
// TITLE FADE-IN
// ===========================

window.addEventListener("load", () => {

    const title = document.querySelector(".title");

    title.style.opacity = "0";

    setTimeout(() => {

        title.style.transition = "2s";

        title.style.opacity = "1";

    }, 300);

});

// ===========================
// MUSIC ERROR
// ===========================

music.addEventListener("error", () => {

    console.log("Music file not found.");

});
