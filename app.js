function tellMeTheX() {
  var x = $(window).scrollLeft()
  console.log('Window"s x position:', x)
  return x
}

$(window).scroll(function(e) {
  tellMeTheX()
})

// Move the block when any key is pressed
addEventListener('keydown', function(e) {
  var block = document.getElementsByClassName('move-me')
  $(block[0]).css('left', '30px')
  console.log('keydown', e.keyCode)
})
