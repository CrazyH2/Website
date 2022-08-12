var topdiv = document.createElement("div");
topdiv.setAttribute("class","rect");
document.body.insertBefore(topdiv, document.body.firstChild);


var logodiv = document.createElement("div");
logodiv.setAttribute("class","logo");
document.body.insertBefore(logodiv, document.body.firstChild);


var div = document.createElement("div");
div.setAttribute("class","overlay");
document.body.insertBefore(div, document.body.firstChild);








// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
  player.playVideo();
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
