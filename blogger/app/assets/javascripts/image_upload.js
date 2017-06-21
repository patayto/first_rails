var ready;
ready = function() {
  var inputs = document.querySelectorAll( '.inputfile' );
  Array.prototype.forEach.call( inputs, function( input )
  {
  	var label	 = input.nextElementSibling,
  		labelVal = label.innerHTML;

  	input.addEventListener( 'change', function( e )
  	{
  		var fileName = '';
  		if( this.files && this.files.length > 1 )
  			fileName = ( this.getAttribute( 'data-caption' ) || '' ).replace( '{count}', this.files.length );
  		else
  			fileName = e.target.value.split( '\\' ).pop();

  		if( fileName ) {
  			document.querySelectorAll('.attachment_button')[0].innerHTML = fileName;
      } else {
  			label.innerHTML = labelVal;
      }
  	});
  });
}
$(document).ready(ready);
$(document).on('turbolinks:load', ready);
