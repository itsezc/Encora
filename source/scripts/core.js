class DOMElement {
	constructor(selector) {
		this.selector = selector || null
		this.element = null

		switch(this.selector[0]) {
			case '<':
				var matches = this.selector.match(/<([\w-]*)>/)
				if(matches === null || matches === undefined){
					throw 'Invalid Selector / Node'
					return false
				}
				var nodeName = matches[0].replace('<','').replace('>','')
				this.element = document.createElement(nodeName)
			break;
			default:
				this.element = document.querySelector(this.selector)
			}
	}

	innerHTML(html) {
		return this.element.innerHTML = this.element.innerHTML + html
	}
}

class EventsHandler {
	constructor() {
		this.events = []
	}

	bindEvent(event, callback, targetElement) {
		this.unbindEvent(event, targetElement)

		targetElement.addEventListener(event, callback, false)
		this.events.push({
			type: event,
			event: callback,
			target: targetElement
		})
	}

	unbindEvent(event, targetElement) {
		var getEvent = this.findEvent(event)
		
		if (getEvent !== undefined) {
			targetElement.removeEventListener(event, getEvent.event, false);
		}
    
		this.events = this.events.filter(function(instance) {
      		return (instance.type !== event)
		}, event);
	}

	findEvent(event) {
		return this.events.filter((instance) => {
			return (instance.type === event)
		}, event)[0]
	}
}

let domElement = function(selector) {
 this.selector = selector || null
 this.element = null
}

domElement.prototype.eventHandler = {
 events: [], //Array of events the element is subscribed to.
bindEvent: function(event, callback, targetElement) {
    //remove any duplicate event 
    this.unbindEvent(event,targetElement);
    
    //bind event listener to DOM element
    targetElement.addEventListener(event, callback, false);
this.events.push({
      type: event,
      event: callback,
      target: targetElement
    }); //push the new event into our events array.
  },
findEvent: function(event) {
    return this.events.filter(function(evt) {
      return (evt.type === event); //if event type is a match return
    }, event)[0];
  },
unbindEvent: function(event, targetElement) {
    //search events
    var foundEvent = this.findEvent(event);
    //remove event listener if found
    if (foundEvent !== undefined) {
      targetElement.removeEventListener(event, foundEvent.event, false);
    }
    //update the events array
    this.events = this.events.filter(function(evt) {
      return (evt.type !== event);
    }, event);
  }
};

domElement.prototype.val = function(newVal) {
 return (newVal !== undefined ? this.element.value = newVal : this.element.value);
};
domElement.prototype.append = function(html) {
 this.element.innerHTML = this.element.innerHTML + html;
};
domElement.prototype.prepend = function(html) {
 this.element.innerHTML = html + this.element.innerHTML;
};
domElement.prototype.html = function(html) {
 if(html === undefined){
 return this.element.innerHTML;
 }
 this.element.innerHTML = html;
};

domElement.prototype.init = function() {
 switch(this.selector[0]){
 case '<' :
 //create element
 var matches = this.selector.match(/<([\w-]*)>/);
 if(matches === null || matches === undefined){
 throw 'Invalid Selector / Node';
 return false;
 }
 var nodeName = matches[0].replace('<','').replace('>','');
 this.element = document.createElement(nodeName);
 break;
 default :
 this.element = document.querySelector(this.selector);
 }
};

var $ = function(selector){
 var el = new domElement(selector); // new domElement
 el.init(); // initialize the domElement
 return el; //return the domELement
}

$('.corejs').append('LOL')