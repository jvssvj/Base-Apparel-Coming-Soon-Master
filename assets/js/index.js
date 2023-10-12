const btnEmail = document.getElementById('btn')

btnEmail.addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function error(classIndex, displayStyle, colorBorder, edgeThickness) {
        document.getElementsByClassName('error-email')[classIndex].style.display = displayStyle
        document.getElementById('email').style.borderColor = colorBorder
        document.getElementById('email').style.borderWidth = edgeThickness
    }

    function sucess(classIndex, displayStyle, colorBorder, edgeThickness) {
        document.getElementsByClassName('sucess-email')[classIndex].style.display = displayStyle
        document.getElementById('email').style.borderColor = colorBorder
        document.getElementById('email').style.borderWidth = edgeThickness
    }

    if (emailPattern.test(email)) {
        error(0, 'none', '', '' ) //Hide error
        sucess(0, 'block', 'hsl(120, 100%, 31%)', '2px') //Show sucess
        document.getElementById('email').value = ''
    } else {
        sucess(0, 'none', '', '') //Hide sucess
        error(0, 'block', 'hsl(0, 93%, 68%)', '2px') //Show error

    }
})