// Declare function
function getTarget(event) {
    // Check if addEventListener works
    if(!event) {
        // Use IE event object is no
        event = window.event;
    }
    // Return target of event
    return event.target || event.srcElement
}

// Remove item from list
function itemDone(event) {
    // Declare variables
    var target, elParent, elGrandpatent;
    // Get event target from getTarget()
    target = getTarget(event);
    // Access the parent node of the item clicked
    elParent = target.parentNode;
    // Access the grandparent node of the item clicked
    elGrandpatent = elParent.parentNode;
    // Remove item
    elGrandpatent.removeChild(elParent);
    
    // Prevent the link from taking you elsewhere
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}

// Set up event listener
var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click', function(event) {
        itemDone(event);
    }, false);
} else {
    el.attachEvent('onclick', function(event) {
        itemDone(event);
    });
}