const player = document.querySelector('.player')
console.log('player', player)

function changeTKU60(video) {
    switch(video) {
        case 1:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc?si=1WwycEZ9TvGI-sGx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            break
        case 2:
            player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew?si=d-YjuM7Nlj_3UrOf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            break
        case 3:
            plater.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw?si=JETB-Tgrxh8BgmMR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            break
        case 4:
            plater.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo?si=HbP1uqtEKKw2t9pt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            break
        case 5:
            plater.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA?si=Oj3EGFZtVmiHPWFS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
            break
    }
}
