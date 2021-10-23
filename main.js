var b = document.querySelector("#movingbutton");
b.addEventListener("mousemove", change);

function change() {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    console.log('here', i, j, b.style.left, b.style.top);
    b.style.left = i + 'px';
    b.style.top = j + "px";
}
document.querySelector(".close").addEventListener("click", function() {
    document.querySelector(".conten").style.display = "none";
});
document.querySelector(".butyes").addEventListener("click", function() {
    document.querySelector(".window").style.display = "block";

});