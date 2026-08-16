function showCatMessage() {

    const messages = [
        "今日はネコが日なたでのんびりしていました。",
        "木の近くでネコを見つけました。",
        "東公園を歩いているとネコに出会えるかもしれません。",
        "ネコを見つけても、驚かせないように静かに見守りましょう。"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);

    document.getElementById("cat-message").textContent =
        messages[randomIndex];
}