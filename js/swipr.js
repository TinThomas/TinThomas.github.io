// Swipr is a tiny JavaScript framework for handling swipe events
// Swipr implements an observer pattern. Users of Swipr can call the on method to add a callback method as an observer.

class Swipr {
    constructor(el) {
        this.el = el;
        this.distance = 15;
        this.callbacks = {}; // Used to store callback functions

        // Here we install listeners for touch start and touch end and store the x positions
        this.el.addEventListener("touchstart", (e) => {
            this.startX = e.changedTouches[0].screenX;
        });

        this.el.addEventListener("touchend", (e) => {
            this.endX = e.changedTouches[0].screenX;
            // When a touch end happens we need to handle the event
            this.handleEvent();
        });
    }

    handleEvent() {
        // We now check if its a left or a right swipe
        // then we call the notify method to call all registered callback functions
        if (this.endX + this.distance <= this.startX) {
            this.notify("left");
        } else if (this.endX >= this.startX + this.distance) {
            this.notify("right");
        }
    }

    // When on is called we store the callback in the dictionary of observers based on the event type
    // In principle we should check if it's one of our supported event types: left, right or swipe
    on(event, callback) {
        if (!this.callbacks[event]) { 
            this.callbacks[event] = [callback];
        } else {
            this.callbacks[event].push(callback);
        }
    }

    // Method to notify observers that a swipe has happened
    notify(event) {
        // We check if someone has subscribed the a specific event (left/right)
        if (this.callbacks[event]) {
            for (let callback of this.callbacks[event]) {
                callback(event);
            }
        }
        // We also check if someone has subscribed to the more generic swipe
        if (this.callbacks["swipe"]) {
            for (let callback of this.callbacks["swipe"]) {
                callback(event);
            }
        }
    }
}