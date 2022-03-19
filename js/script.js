let infopage = document.getElementById("infopage");
let pageprogress = document.getElementById("pageprogress");
let input = document.getElementById("myInput");
let waterComsuption;
let threshold = 100;
let havePlanted = false;
let date = saveDate();
let lastPicture;
let numberOfFlowers = 0;

function plantFlower(){
    numberOfFlowers++;
    localStorage.setItem("numberOfFlowers",numberOfFlowers);
    console.log("flower planted");
}

window.onload = setImage();

function saveDate(){
    if(localStorage.getItem("date")==null){
        localStorage.setItem("date",new Date());
    }
}



/**Needs to be called at start of day */
function newDay(){
    waterComsuption = 0;
    havePlanted = false;
    lastPicture = "morning";
    console.log("Water comsumtion restet");
    console.log(waterCom);
    console.log("have planted status");
    console.log(havePlanted);
}

/**Does not work yet */
function checkNewDay(){
    if(window.localStorage.getItem("date").getDate() < new Date().getDate()){
        newDay();
        date = new Date();
    }
}


function setImage(waterComsuption){
    waterComsuption += waterComsuption;
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
