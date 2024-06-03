
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

        } else {
            para.style.display = 'block';

        }
    }
};




let signIn = document.querySelector('#signIn')
signIn.addEventListener('click', function () {
    window.location.href = 'login.html'

})