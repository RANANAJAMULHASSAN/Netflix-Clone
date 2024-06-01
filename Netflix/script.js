
let secondElements = document.querySelectorAll(".second");
secondElements.forEach(function (element) {
    element.addEventListener("click", togglePara);
});
function togglePara(e) {

    let plus = document.querySelector('.plus')
    let para = this.nextElementSibling; 

    if (para) {
        let isVisible = para.style.display !== 'none';

        if (isVisible) {
            para.style.display = 'none';
            plus.innerHTML = '+'

        } else {
            para.style.display = 'block';
            plus.innerHTML = 'x'

        }
    }
};

// document.querySelectorAll(".second").forEach(function (element) {
//     element.addEventListener("click", togglePara);
// });

// function togglePara(e) {
//     // Find the .plus element within the clicked .second element
//     let plus = this.querySelectorAll('.plus');
//     // Find the next sibling element, which should be the paragraph
//     let para = this.nextElementSibling;

//     if (para) {
//         let isVisible = para.style.display !== 'none';


//         if (isVisible) {
//             para.style.display = 'none';
//             plus.innerHTML = '+';
//         } else {
//             para.style.display = 'block';
//             plus.innerHTML = 'x';
//         }
//     }
// }




let signIn = document.querySelector('#signIn')
signIn.addEventListener('click', function () {
    window.location.href = 'login.html'

})