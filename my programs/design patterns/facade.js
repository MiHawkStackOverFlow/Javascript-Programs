/* here we’re using a Facade to simplify an interface for listening to events across browsers. 
We do this by creating a common method that can be used in one’s code which does the task of 
checking for the existence of features so that it can provide a safe and cross-browser compatible solution. */

var addMyEvent = function(element, event, myFunction) {
    if(element.addEventListener) {
      element.addEventListener(event, myFunction, false);
    } else if(element.attachEvent) {
        element.attachEvent("on" + event, myFunction);
    } else {
        element["on" + event] = myFunction;
    }
}