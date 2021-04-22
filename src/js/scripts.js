$(document).ready( () => {

  // Grab the game embed container.
  const embed = $( '.embed' );

  // Find the button to start the game.
  const play = $( 'button.play' );

  // Assign the game source file.
  const gameSrc = 'en_bot_adventure.html';

  // Set up the Bitsy iframe.
  const game = $( document.createElement( 'iframe' ) );
  game.attr( 'src', gameSrc ).addClass( 'game' );

  // Add the click event for the play button.
  play.on( 'click', ( e ) => {
    play.remove();
    embed.append( game );
    game.focus();

  });

});
