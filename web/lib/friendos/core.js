/**
 * This is the main Friend OS code for adding API integrations via a postMessage
 * message interface. The system assumes a system like Friend OS, or another 
 * web application, is interfacing via an iframe or a window opener.
 */

// Add a message listener
window.addEventListener( 'message', function( msg )
{
	console.log( 'Hello world: ', msg );
} );

