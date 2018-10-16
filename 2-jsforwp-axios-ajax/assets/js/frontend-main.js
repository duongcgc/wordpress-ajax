( function( $ ){

  $( '#secondary' ).prepend( '<p><a href="#like" class="btn jsforwp-like">Like This Site</a> <span class="jsforwp-count"></span> Likes</p>' );

  // Change the html() value to response.total_likes
  $( '.jsforwp-count' ).html( jsforwp_globals.total_likes );

  $('.jsforwp-like').click( function(){

    event.preventDefault();

    // Change the url to jsforwp_globals.ajax_url
    // Change params.action to 'jsforwp_add_like'
    // Change params._ajax_nonce to jsforwp_globals.nonce
    axios({
      method: 'post',
      url: 'url',
      params: {
        action: 'params.action',
        _ajax_nonce: 'params._ajax_nonce'
      }
    })
    .then( function( response ) {      
      if( 'success' == response.data.type ) {

          // Change html() value to response.data.total_likes
          $(".jsforwp-count").html( 'NEW DATA' );

      } else {
          alert( 'Something went wrong, try logging in!' );
      }
    })
    .catch( function( error ) {
      alert( 'Something went wrong :(' );
      console.log( error );
    });

  } );

} )( jQuery );
