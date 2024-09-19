const alerta = () => {
    const oi = document.querySelector(".aviso")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    else{
        oi.style.display = "none"
    }
}

const ativarlinks = () => {
    const ooi = document.querySelector(".aviso")
    const oi = document.querySelector(".linksocultoss")
    if (oi.style.display == "none" || oi.style.display == "") {
        oi.style.display = "block"
    }
    else{
        oi.style.display = "none"
        ooi.style.display = "none"
    }
}
