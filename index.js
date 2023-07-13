function resultado(){

    let num1 = Number(document.getElementById('inpUm').value)
    let num2 = Number(document.getElementById('inpDois').value)
    let total = 0

    if (document.getElementById('radio1').checked)
        total = num1 + num2
    else if (document.getElementById('radio2').checked)
        total = num1 - num2
        else if (document.getElementById('radio3').checked)
        total = num1 * num2
    else
        total = num1 / num2

    document.getElementById('areaResult').innerHTML = 'Resultado: ' + total



}