'use strict';

const blocks = () => {

    document.addEventListener( 'contextmenu', event => event.preventDefault() );
  
    document.onkeypress = ( event ) => {
        event = ( event || window.event );
        if ( event.keyCode === 123 ) { return false; }
    };
    document.onmousedown = ( event ) => {
        event = ( event || window.event );
        if ( event.keyCode === 123 ) { return false; }
    };
    document.onkeydown = ( event ) => {
        event = ( event || window.event );
        if ( event.keyCode === 123 ) { return false; }
    };
  
    document.addEventListener('keydown', ( event ) => {
        if ( event.ctrlKey && event.keyCode === 85 || event.ctrlKey && event.shiftKey && event.keyCode === 73 || event.keyCode === 123 ) {
            event.preventDefault();
        }
    });
  
    function preventSelection( element ) {
      let preventSelection = false;
  
      function addHandler( element, event, handler ) {
        if ( element.attachEvent ) {
          element.attachEvent( 'on' + event, handler );
        } else {
            if ( element.addEventListener ) {
                element.addEventListener( event, handler, false );
            }
        } 
      }
  
      function removeSelection() {
        if ( window.getSelection ) { 
            window.getSelection().removeAllRanges(); 
        }
        else if ( document.selection && document.selection.clear ) {
            document.selection.clear();
        }
      }
  
      function killCtrlA( event ) {
        var event = event || window.event;
        var sender = event.target || event.srcElement;
  
        if ( sender.tagName.match( /INPUT|TEXTAREA/i) ) { return; }
  
        var key = event.keyCode || event.which;
        if ( event.ctrlKey && key === 'A'.charCodeAt(0) ) {
          removeSelection();
  
          if ( event.preventDefault ) {
            event.preventDefault();
          }
          else {
            event.returnValue = false;
          }
        }
      }
  
      addHandler( element, 'mousemove', function() {
        if( preventSelection ) {
            removeSelection();
        }
      });
  
      addHandler( element, 'mousedown', function( event ) {
        var event = event || window.event;
        var sender = event.target || event.srcElement;
        preventSelection = !sender.tagName.match( /INPUT|TEXTAREA/i );
      });
  
      addHandler( element, 'mouseup', function() {
        if ( preventSelection ) {
            removeSelection();
        }
        preventSelection = false;
      });
  
      addHandler( element, 'keydown', killCtrlA );
      addHandler( element, 'keyup', killCtrlA );
    }
    preventSelection( document );
    
};

export default blocks;