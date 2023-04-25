var option = ['ROCK', 'PAPER', 'SCISSOR']

var gameStarted = false

// console.log('COMPUTER : ' + gameSelection)

if (gameStarted === false) {
    $('body').addClass('body')
    $('.image-section').prop('hidden', true)
    $('.user-img-div').prop('hidden', true);
    $('.heading').addClass('name-entry').text('ENTER YOUR NAME')
    $('#name-box').prop('hidden', false)
    $('.start-btn').prop('hidden', false)
    $('.footer-text').prop('hidden',false)
}

$('.start-btn').click(function () {
    nextSequence()
})

function nextSequence(){

    gameStarted = true

    var randomNumber = Math.floor(Math.random() * 3) + 0;

    var gameSelection = option[randomNumber]

    $('.image-section').text('')
    $('body').removeClass('body')
    $('.image-section').prop('hidden', false)
    $('.user-img-div').prop('hidden', false);
    $('.heading').removeClass('name-entry').text('ROCK PAPER SCISSOR')
    $('#name-box').prop('hidden', true)
    $('.start-btn').prop('hidden', true)
    $('.footer-text').prop('hidden',false)
    var userName = $('#name-box').val()
    // console.log(userName)
    $('.user-name').text('PLAYER : ' + userName)

    $('img').click(function () {
        var userSelection = $(this).attr('id')
        let userSelectionIndex = option.indexOf(userSelection)
        //console.log("USER : " + userSelection + " " + userSelectionIndex)
        $('.img1').text(userSelection)
        setTimeout(() => {
            $('.img2').text(gameSelection)
        }, 100)
        game(randomNumber,userSelectionIndex)
    })
}

function game(comp,user) {
    var resultsArray = [
        ['TIE', 'YOU WON', 'YOU LOSE'],
        ['YOU LOSE', 'TIE', 'YOU WON'],
        ['YOU WON', 'YOU LOSE', 'TIE']
    ]

    var gameResult = resultsArray[comp][user]
    // console.log("RESULT : " + gameResult)

    if (gameResult === 'YOU WON') {
        gameOn(gameResult+"!")
    } else if (gameResult === 'YOU LOSE') {
        gameOn(gameResult+"!")
    } else {
        gameOn(gameResult)
    }
}

function gameOn(result) {
    setTimeout(() => {
        $('body').addClass('body')
        $('.image-section').prop('hidden', true)
        $('.user-img-div').prop('hidden', true);
        $('.heading').addClass('name-entry').text(result)
        $('#name-box').prop('hidden', true)
        $('.start-btn').prop('hidden', true)
        $('.user-name').prop('hidden',true)
        $('#start-over-btn').prop('hidden',false)
        $('#continue-btn').prop('hidden',false)
        $('.footer-text').prop('hidden',false)
    },1000)

    $('#start-over-btn').click(()=>{
        $("#start-over-btn").attr('onclick','history.go(0)')
        gameStarted = false
    })

    $('#continue-btn').click(()=>{
        nextSequence()
        $('#start-over-btn').prop('hidden',true)
        $('#continue-btn').prop('hidden',true)
        $('.footer-text').prop('hidden',false)
    })
}


