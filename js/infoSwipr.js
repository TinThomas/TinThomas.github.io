let viewer = document.body;

function right(){
    document.location.href = "flower.html";
}

function left(){
    // document.location.href = "Info.html";
}

    
// To detect swipes on the viewer we create an instance of Swipr with the viewer as argument
var swipr = new Swipr(viewer);

// We install an observer on the swipr object listening for swipe events. The arguments is the event type and a callback function
swipr.on("swipe", (event) => {
    console.log("That's a swipe dawg")
    if (event === "left") left();
    if (event === "right") right();
})