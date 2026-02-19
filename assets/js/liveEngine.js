// Live Core Engine Simulation

let viewerCount = 124;
let liveSeconds = 0;
let earnings = 0;

const viewerEl = document.getElementById("viewerCount");
const timerEl = document.getElementById("liveTimer");
const earningsEl = document.getElementById("earnings");

function updateUI() {
    if (viewerEl) viewerEl.innerText = viewerCount;
    if (earningsEl) earningsEl.innerText = earnings + " 💎";

    const mins = Math.floor(liveSeconds / 60);
    const secs = liveSeconds % 60;
    if (timerEl) timerEl.innerText =
        `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

// ⏱ Live Timer
setInterval(() => {
    liveSeconds++;
    updateUI();
}, 1000);

// 👥 Random Viewer Simulation
setInterval(() => {
    const change = Math.floor(Math.random() * 5);
    if (Math.random() > 0.5) viewerCount += change;
    else viewerCount = Math.max(50, viewerCount - change);

    LiveEvent.emit("viewer_update", viewerCount);
    updateUI();
}, 3000);

// 🎁 Random Gift Simulation
setInterval(() => {
    if (Math.random() > 0.7) {
        const giftValue = Math.floor(Math.random() * 20) + 5;
        earnings += giftValue;
        LiveEvent.emit("gift_received", giftValue);
        updateUI();
    }
}, 4000);
