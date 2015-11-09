function tellMeTheX() {
  var x = $(window).scrollLeft()
  console.log('Window"s x position:', x)
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

// What is the difference between these two?
// $(window).scroll(function(e) {}
// addEventListener('scroll', function(e) {}

var x0 = 400
var x1 = 400
var x2 = 400

$('.move-me-not').css('left', x0 + 'px')
$('.move-me').css('left', x1 + 'px')
$('.move-me-2').css('left', x2 + 'px')

addEventListener('scroll', function(e) {
  // This one moves a little slower than if it was standard static position
  x1 = 400 + tellMeTheX()/2
  $('.move-me').css('left', x1 + 'px')

  // This one will remain in the same spot in the viewport
  x2 = 400 + tellMeTheX()
  $('.move-me-2').css('left', x2 + 'px')

  console.log('x1', x1)
})
