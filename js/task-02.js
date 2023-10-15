document.addEventListener("DOMContentLoaded", function () {
    let text = document.querySelector("#text");
    let zoomInput = document.querySelector("#font-size-control");

    zoomInput.addEventListener("input", zoomer);

    function zoomer() {
        text.style.fontSize = zoomInput.value + "px";
    }
});
