window.addEventListener ('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return; // stops the function from running incase wrong key was pressed.
  audio.play();
})