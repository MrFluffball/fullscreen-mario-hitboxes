// non-obfuscated version that it was tested with, in case you wanted to know how it works.
// in a local build, this function would be called in upkeep(), which is essentially the game's tick function.

function hitboxes() {
  let ctx = window.context
  ctx.globalAlpha = 0.5
  
  // loop through all entities 
  for (var i=0; i<characters.length; i++) {
      let char = characters[i]
      
      if (char.collide != collideEnemy) ctx.fillStyle = 'lime'
      else ctx.fillStyle = 'red'

      // an object's "toly" is the height of the box where the player can stomp it.
      // we draw just below that line so the real hitbox is shown.
      let x = char.left
      let y = char.top + char.toly
      let w = char.right - char.left
      let h = char.bottom - char.top - char.toly

      ctx.fillRect(x,y,w,h)
  }

  ctx.globalAlpha = 1
}
