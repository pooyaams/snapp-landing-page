let topGift = document.querySelector('.top-gift');
let navBtn = document.getElementById('burger-checkbox');
let offcanvasNavbar = document.querySelector('.offcanvas');

navBtn.addEventListener("change", function () {

    if (this.checked){
        offcanvasNavbar.classList.add("show");
        topGift.classList.add("d-none");
    }else{
        offcanvasNavbar.classList.remove("show");
        topGift.classList.remove("d-none");
    }

    console.log(topGift.classList.contains('d-none'));
});

// let close = document.querySelector(".close");
//
// close.addEventListener("click", function (){
//     if (topGift.classList.contains('d-none')){
//         offcanvasNavbar.classList.remove("show");
//         topGift.classList.remove("d-none");
//     }
// });

let downloadAppInput = document.getElementById('downloadAppInput');
let dot = document.getElementById('dot');
let del = document.getElementById('del');

downloadAppInput.addEventListener("keyup", function () {
    if (downloadAppInput.value == "") {
        dot.style.display = 'inline';
        del.style.display = 'none';
    } else {
        dot.style.display = 'none';
        del.style.display = 'inline';
    }
})