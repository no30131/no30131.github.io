// Request 1: Click to Change Text.

$('.maintitle').click(() => 
    $('.maintitle h1').text("Have a Good Time!"));


// Request 2: Click to Show More Content Boxes.

$('.calltoaction').click(() =>
    $('.container2').css("display", "flex"));