$(document).ready(() => {

    const $kids = $('#holder').children();
    $kids.on('mouseenter', event => {
        $(event.currentTarget).fadeOut(500)
    })
    $kids.on('mouseleave', event => {
        $(event.currentTarget).fadeIn(500)
    })


})

