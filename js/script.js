let infopage = document.getElementById("infopage");
let pageprogress = document.getElementById("pageprogress");
let input = document.getElementById("myInput");
let waterComsuption = 0;
let threshold = 100;
let havePlanted = false;
let date = saveDate();
let lastPicture;
let numberOfFlowers = 0;

function plantFlower(){
    numberOfFlowers = localStorage.getItem("numberOfFlowers");
    numberOfFlowers++;
    localStorage.setItem("numberOfFlowers",numberOfFlowers);
    console.log("flower planted");
    console.log(numberOfFlowers);
}
function updateThreshold(){
    newThres=localStorage.getItem("waterThreshold");
    if(newThres!=null){
        threshold=newThres;
    }
}

window.onload = updateThreshold();

function saveDate(){
    if(localStorage.getItem("date")==null){
        localStorage.setItem("date",new Date());
    }
}



/**Needs to be called at start of day */
function newDay(){
    let noFlowers = localStorage.getItem("numberOfFlowers");
    localStorage.clear();
    localStorage.setItem("numberOfFlowers", noFlowers);
    localStorage.setItem("waterComsuption", 0);
}

/**Does not work yet */
function checkNewDay(){
    if(window.localStorage.getItem("date").getDate() < new Date().getDate()){
        newDay();
        date = new Date();
    }
}

/**Water consumtion does not get stored in local storage */
function setImage(waterUsedSinceLast){
    waterComsuption = parseInt(localStorage.getItem("waterComsuption",waterComsuption));
    if(isNaN(waterComsuption)){
        waterComsuption = 0;
    }
    console.log(waterComsuption);
    waterComsuption += waterUsedSinceLast;
    localStorage.setItem("waterComsuption",waterComsuption);
    console.log(waterComsuption);
    var nowdate = new Date();

    var waketime = new Date();     
    waketime.setHours(7);
    waketime.setMinutes(30);

    var midday = new Date();
    midday.setHours(12)
    
    var bedtime = new Date();     
    bedtime.setHours(22);
    
    if(waketime < nowdate  && nowdate < midday && nowdate < bedtime && waterComsuption < threshold){
        console.log("morning");
        lastPicture ="morning";
    }else if(waketime < nowdate  && nowdate > midday && nowdate < bedtime && waterComsuption < threshold){
        lastPicture ="midday";
        console.log("midday");
    }
    else if(waterComsuption < threshold){
        console.log("night");
        lastPicture ="night";
        if(havePlanted==false){
            plantFlower();
            havePlanted=true;
        }
    }
    else{
        lastPicture = localStorage.getItem("lastPicture");
    }
    
    localStorage.setItem("lastPicture",lastPicture);
    if(lastPicture=="morning"){
        document.getElementById("flowerImage").src = "Images/stage-1.png";
    }else if(lastPicture=="midday"){
        document.getElementById("flowerImage").src = "Images/stage-2.png";
    }else if(lastPicture=="night"){
        document.getElementById("flowerImage").src = "Images/stage-3.png";
    }

    
}

/*Check for time of day every 30min.*/
window.setInterval(setImage(10), 1800000);
