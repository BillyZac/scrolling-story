function tellMeTheX() {
  var x = $(window).scrollLeft()
  // console.log('Window"s x position:', x)
  return x
}


// Move the block when any key is pressed
// addEventListener('keydown', function(e) {
//   var block = document.getElementsByClassName('move-me')
//   $(block[0]).css('left', '30px')
//   console.log('keydown', e.keyCode)
// })

// $(window).scroll(function(e) {
//   tellMeTheX()
// })

var x1 = 200
var x2 = 200

$('.move-me').css('left', x1 + 'px')
$('.move-me-2').css('left', x2 + 'px')

addEventListener('scroll', function(e) {
  x1 = x1
  $('.move-me').css('left', x1 + 'px')

  x2 = x2 + tellMeTheX()/30
  $('.move-me-2').css('left', x2 + 'px')

  console.log('x1', x1)
})
