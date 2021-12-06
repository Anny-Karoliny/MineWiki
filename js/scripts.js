function fase1(){
    var fase1 = document.getElementById("fase-m1")
    var fase2 = document.getElementById("fase-m2")
    var fase3 = document.getElementById("fase-m3")
    var fase4 = document.getElementById("fase-m4")

    fase1.style.visibility = 'visible'
    fase1.style.display = 'block'
    fase2.style.visibility = 'hidden'
    fase2.style.display = 'none'
    fase3.style.visibility = 'hidden'
    fase3.style.display = 'none'
    fase4.style.visibility = 'hidden'
    fase4.style.display = 'none'
}

function fase2(){
    var fase1 = document.getElementById("fase-m1")
    var fase2 = document.getElementById("fase-m2")
    var fase3 = document.getElementById("fase-m3")
    var fase4 = document.getElementById("fase-m4")

    fase1.style.visibility = 'hidden'
    fase1.style.display = 'none'
    fase2.style.visibility = 'visible'
    fase2.style.display = 'block'
    fase3.style.visibility = 'hidden'
    fase3.style.display = 'none'
    fase4.style.visibility = 'hidden'
    fase4.style.display = 'none'
}

function fase3(){
    var fase1 = document.getElementById("fase-m1")
    var fase2 = document.getElementById("fase-m2")
    var fase3 = document.getElementById("fase-m3")
    var fase4 = document.getElementById("fase-m4")

    fase1.style.visibility = 'hidden'
    fase1.style.display = 'none'
    fase2.style.visibility = 'hidden'
    fase2.style.display = 'none'
    fase3.style.visibility = 'visible'
    fase3.style.display = 'block'
    fase4.style.visibility = 'hidden'
    fase4.style.display = 'none'
}

function fase4(){
    var fase1 = document.getElementById("fase-m1")
    var fase2 = document.getElementById("fase-m2")
    var fase3 = document.getElementById("fase-m3")
    var fase4 = document.getElementById("fase-m4")

    fase1.style.visibility = 'hidden'
    fase1.style.display = 'none'
    fase2.style.visibility = 'hidden'
    fase2.style.display = 'none'
    fase3.style.visibility = 'hidden'
    fase3.style.display = 'none'
    fase4.style.visibility = 'visible'
    fase4.style.display = 'block'

    window.scrollTo(0, 0)
}
