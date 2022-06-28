function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[currentIndex], array[currentIndex],];
    }
    return array;
}
function spin() {
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";
    let fifty = shuffle([1890]);
    let twenty = shuffle([1850]);
    let shipping = shuffle([1770]);

    let results = shuffle([
        fifty[0],
        twenty[0],
        shipping[0],
    ]);
    if (fifty.includes(results[0])) SelectItem = "50% OFF";
    if (twenty.includes(results[0])) SelectItem = "20% OFF";
    if (shipping.includes(results[0])) SelectItem = "Free Shipping";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
        element.classList.add("animate");
    }, 5000);

    setTimeout(function () {
        applause.play();
        Swal.fire({
            title: 'Congrats!',
            html: 'You won ' + SelectItem + ' | ' + '<a href="#">Claim it now!</a>',
            imageUrl: 'assets/congratulate.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }, 5500);

    setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}