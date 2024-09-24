
let tween;
var arr1 = [];
var close, appstore, googleplay, watchgameplay,collapsegameplay, nintendologo;       //with event listener
var mariologo, soundbg, soundcoin, soundtoggle, video, videocontainer, play, replay; //with event listener
var coin1, coin2, coin3, coin4, coin5, coin6, general;                               //with event listener
var ground, questionblock, questionblock1, mushroom,  mario;                         //without event listener - just animation
var prev, next, galleryholder, gallery, gallerycontainer, exitgallery;               //gallery


function initAnimation() {
	startAnimation();
}

function replayAnimationCall(){
	tween.restart();
}

function startAnimation() {
	 user.init();
	 user.gallery();
     document.querySelector("#maincontainer").style.opacity = 1;
     tween = gsap.timeline();
	 CustomEase.create("bounce", "0.175, 0.885, 0.32, 1.275");
	 tween.set("#mariologo",{scale: 0.3})
	 tween.to("#mariologo", {opacity:0.99,duration: .5, scale:1, ease: "bounce"},"+=0")

}




var isMuted                 = true;
var onMain                  = true;
var doneplayaudiobg         = false;
var isPlaying               = false;
var doneplayingmushroom     = false;
var vprogint                = undefined;
var crslIndex               = 0;
var lastIndex;


var arr2            = [
                        "img0.png",
                        "img1.png",
                        "img2.png",
                        "img3.png",
                        "img4.png"
                    ];


var user = {

    audio : {
                on  : "images/soundon.png",
                off : "images/soundoff.png",
           },

    init : function (){
            user.vars();

			user.eventlisteners();
			console.log("init")
    },

    vars : function(){

		console.log("vars")
		//close            = document.getElementById("#close");
		appstore         = document.getElementById("appstore");
		googleplay       = document.getElementById("googleplay");
		watchgameplay    = document.getElementById("watchgameplay");
		collapsegameplay = document.getElementById("collapsegameplay");
		nintendologo     = document.getElementById("nintendologo");
		mariologo        = document.getElementById("mariologo");
		mario            = document.getElementById("mario");
		soundtoggle      = document.getElementById("soundtoggle");
		soundbg          = document.getElementById("audiobg");
		soundcoin        = document.getElementById("audiocoin");
		video            = document.getElementById("video");
		videocontainer   = document.getElementById("videocontainer");
		play             = document.getElementById("play");
		replay           = document.getElementById("replay");
		ground           = document.getElementById("ground");
		questionblock    = document.getElementById("questionblock");
		questionblock1   = document.getElementById("questionblock1");
		mushroom         = document.getElementById("mushroom");
		gallery          = document.getElementById("gallery");
		gallerycontainer = document.getElementById("gallerycontainer");
		exitgallery      = document.getElementById("exitgallery");
		prev             = document.getElementById("prev");
		next             = document.getElementById("next");
		galleryholder    = document.getElementById("galleryholder");
		coin1            = document.getElementById("coin1");
		coin2            = document.getElementById("coin2");
		coin3            = document.getElementById("coin3");
		coin4            = document.getElementById("coin4");
		coin5            = document.getElementById("coin5");
		coin6            = document.getElementById("coin6");
		general          = document.getElementById("general");



    },

    eventlisteners: function(){

			console.log("eventlisteners");

			arr1 = [appstore, googleplay, watchgameplay,collapsegameplay, nintendologo, mariologo,
				soundtoggle, videocontainer,gallery,exitgallery, coin1, coin2, coin3, coin4, coin5, coin6,
				general];

			arr1.forEach(function(element) {
				element.addEventListener('click', user.eventhandler);
				element.addEventListener('mouseover', user.eventhandler);
				element.addEventListener('mouseout', user.eventhandler);
			})

            //Video Events
			var video = document.getElementById("video");
			video.onended = function() {
				replay.style.visibility = "visible";
                 console.log("ended")
			};
            //var progressBarW        = 300;
            vprogint = setInterval(function(){
                var vDuration           = video.duration;
                var vCurrentTime        = video.currentTime;
                if(vCurrentTime==0) {
                    vDuration  = 0;
                }else{
                    var xBar = vDuration / 300; // 30s * 300px
                    var widthbar = vCurrentTime / xBar;
                    tween.to('#vloads',0.3,{ width: widthbar+'px'});
                    //console.log(widthbar)
                }
            },10);
     },

     eventhandler: function(e){
		// console.log(e.currentTarget.id)
        switch(e.type){
              case "mouseover":
                         switch(e.currentTarget.id) {
                            //case  "close":            user.animation.over.close();             break;
                            case  "watchgameplay":    user.animation.over.watchgameplay();;    break;
                            case  "collapsegameplay": user.animation.over.collapsegameplay();  break;
                            case  "appstore":         if(!isMuted){ soundcoin.play();}  break;
                            case  "googleplay":       if(!isMuted) {soundcoin.play();}  break;
                            case  "soundtoggle":      user.animation.over.soundtoggle();       break;
                           }
                      break;
              case "click":
                            switch(e.currentTarget.id) {
                            /*case  "close":
									container.style.visibility = "hidden";
                                    soundbg.muted = true;
                                    video.muted = true;
                                    isMuted = true;
                            break;*/
                            case  "appstore":     Enabler.exitOverride("appstore", landingPage);  break;
                            case  "googleplay":   Enabler.exitOverride("googleplay", landingPage2);  break;
                            case  "nintendologo": Enabler.exitOverride("nintendologo", landingPage3);  break;
                            case  "gallery":      gallerycontainer.style.visibility = "visible"; break;
                            case  "exitgallery":  gallerycontainer.style.visibility = "hidden"; break;
                            case  "watchgameplay":
									console.log("watchgameplay")
                                    onMain = false;
                                    watchgameplay.removeEventListener("mouseover",   user.eventhandler);
                                    watchgameplay.removeEventListener("mouseout",    user.eventhandler);
                                    collapsegameplay.addEventListener("mouseover", user.eventhandler);
                                    collapsegameplay.addEventListener("mouseout",  user.eventhandler);

                                    user.animation.click.watchgameplay();
                                    soundbg.muted = true;
                                    if(!isMuted) {
                                        isMuted = false;
                                        video.muted = false;
                                    }else{
                                        isMuted = true;
                                        video.muted = true;
                                    }
                                    user.videotogglecheck();
                                    video.play();
                                    video.currentTime = 0;
                                    break;
                            case  "collapsegameplay":
                                    onMain = true;
                                    watchgameplay.addEventListener("mouseover",     user.eventhandler);
                                    watchgameplay.addEventListener("mouseout",      user.eventhandler);
                                    collapsegameplay.removeEventListener("mouseover", user.eventhandler);
                                    collapsegameplay.removeEventListener("mouseout",  user.eventhandler);

                                    user.animation.click.collapsegameplay();
                                    video.pause();

                                    if(!isMuted){
                                        soundbg.muted = false;
                                        soundbg.currentTime = 0;
                                            //play mushroom once only
                                            if(!doneplayingmushroom){
                                                user.animation.ground();
                                                doneplayingmushroom = true;
                                            }
                                    }
                                    break;
                            case  "videocontainer":
                                    user.videotogglecheck();
                                    break;
                            case  "soundtoggle":
                                    if(!isMuted) {
                                        isMuted = true;

										soundtoggle.style.background = 'url(' + user.audio.off + ') no-repeat center'
                                        if(onMain) soundbg.muted = true;
                                        else video.muted = true;
                                    }
                                    else{
                                            isMuted = false;


											soundtoggle.style.background = 'url(' + user.audio.on + ') no-repeat center'
                                            if(onMain) {
                                                soundbg.muted = false;
                                                //play mushroom once only
                                                if(!doneplayingmushroom){
                                                    user.animation.ground();
                                                    doneplayingmushroom = true;
                                                }
                                            }else{
                                                video.muted = false;
                                            }

                                            if(!doneplayaudiobg){
                                                doneplayaudiobg = true;
                                                soundbg.play();
                                            }
                                    }
                                    break;

                                    case "coin1":  case "coin2":  case "coin3" : case "coin4"  : case "coin5" : case "coin6" :
                                           // console.log(this);
											this.style.visibility = "hidden";
                                            soundcoin.currentTime = 0;
                                            soundcoin.play();

                                    break;
                            }
                            console.log(e.type +"_"+e.currentTarget.id); //clickTracking
              break;
              case "mouseout":
                            switch(e.currentTarget.id){
                                /*case  "close":
                                    user.animation.out.close();
                                break;*/
                                case  "soundtoggle":
                                    user.animation.out.soundtoggle();
                                break;
                                case "collapsegameplay":
                                    gsap.to(this, .3,{x:24});
                                break;
                                case "watchgameplay":
                                    gsap.to(this, .3,{x:0});
                                break;
                            }
              break;

        }
    },

    videotogglecheck: function(){
        if(video.paused){
           video.play();
			play.style.visibility = "hidden";
			playbg.style.visibility = "hidden";
			replay.style.visibility = "hidden";

        }else{
            video.pause();
			play.style.visibility = "visible";
			playbg.style.visibility = "visible";
			replay.style.visibility = "visible";
        }
    },

    gallery :function(){
            var i = 0;
            var dir;
            var leftNav = 74;
            var nSpacer  = 24;
			var dynamicName = ["frame1Subheadline", "frame2Subheadline","frame3Subheadline","frame4Subheadline","frame5Subheadline" ];

            for(var i=0;i<arr2.length;i++){

                leftNav =  leftNav + nSpacer;

                var imgDiv = document.createElement("div");
                imgDiv.id               = "img"+i;
                imgDiv.style.position   = "absolute";
                imgDiv.style.width      = "100%";
                imgDiv.style.height     = "100%";
                imgDiv.style.background = "url(images/"+arr2[i]+") no-repeat center";
                imgDiv.style.visibility = "hidden";

                var txtDiv = document.createElement("div");
                txtDiv.id               = "txt"+i;
                txtDiv.style.position   = "absolute";
                txtDiv.style.width      = "100%";
                txtDiv.style.height     = "6%";
                txtDiv.style.textAlign = "center";
				txtDiv.style.color = "white";
				txtDiv.style.marginTop = "10px";
				txtDiv.style.visibility = "hidden";
				txtDiv.style.fontFamily = "Tahoma, sans-serif";
				txtDiv.style.fontWeight = "bold";
				txtDiv.setAttribute("class", dynamicName[i]);

				console.log

                var navDiv = document.createElement("div");
                navDiv.id                 = "nav"+i;
                navDiv.style.position     = "absolute";
                navDiv.style.bottom       = "12px";
                navDiv.style.left         = leftNav+"px";
                navDiv.style.width        = "10px";
                navDiv.style.height       = "10px";
                navDiv.style.background   = "#e70012";
                navDiv.style.borderRadius = '5px';
                navDiv.style.zIndex       = '3';

                document.getElementById("galleryholder").appendChild(navDiv);
                document.getElementById("galleryholder").appendChild(txtDiv);
                document.getElementById("galleryholder").appendChild(imgDiv);



				setTimeout(populate2, 2000);



            }

			document.getElementById("prev").addEventListener("click", function(){
                lastIndex = crslIndex;
                crslIndex--;
                (crslIndex<0) ? crslIndex=arr2.length-1 : crslIndex;
                dir = "l";
                user.updateCarousel(dir);
            });


            document.getElementById("next").addEventListener("click", function(){
                lastIndex = crslIndex;
                crslIndex++;
                (crslIndex>arr2.length-1) ? crslIndex=0 : crslIndex;
                dir = "r";
                user.updateCarousel(dir);
            });


            gsap.set('#img'+crslIndex,           {autoAlpha:1});
            gsap.set('#txt'+crslIndex,           {autoAlpha:1});
            gsap.set('#nav'+crslIndex,           {backgroundColor:'white'});

    },

    updateCarousel : function(dir){
        switch(dir){
            case 'l':
				gsap.set('#img'+crslIndex,              {left:'-100%',autoAlpha:1});
				gsap.to('#img'+crslIndex,       0.3,    {left:'0%'});
				gsap.to('#img'+lastIndex,0.3,           {left:'100%'});
            break;
            case 'r':
				gsap.set('#img'+crslIndex,              {left:'100%',autoAlpha:1});
				gsap.to('#img'+crslIndex,       0.3,    {left:'0%'});
				gsap.to('#img'+lastIndex,0.3,           {left:'-100%'});
            break;
        }

        for(var i=0;i<arr2.length; i++){
            if(crslIndex==i){
                gsap.set('#nav'+i,{backgroundColor:'white',autoAlpha:1});
                gsap.set('#txt'+i,{autoAlpha:1});
            }else{
                gsap.set('#nav'+i,{backgroundColor:'#e70012', autoAlpha:1});
                gsap.set('#txt'+i,{autoAlpha:0});
            }
        }
    },

    animation : {
            //coin flip,supermariologo - animation in CSS
        over : {

            watchgameplay   : function(){
                                gsap.to( "#watchgameplay", .3,{x:-15, delay:0});
                            },
            collapsegameplay: function(){
                                gsap.to("#collapsegameplay", .3,{x:40, delay:0});
                            },
            /*close           : function(){
                                gsap.to("#close",       .1,{scaleX:1.1, scaleY:1.1});
                            },*/
            soundtoggle     : function(){
                                gsap.to("#soundtoggle", .1,{scaleX:1.1, scaleY:1.1});
                            }
           },

        out  : {

            /*close           : function(){
                                gsap.to("#close", .1,{x:0, delay:0, scaleX:1, scaleY:1});
                            },*/
            soundtoggle     : function(){
                                gsap.to("#soundtoggle", .1,{scaleX:1, scaleY:1});
                            }
             },

        click : {

            watchgameplay   : function(){
				gsap.to("#watchgameplay",    0.1,{x:25});
                                gsap.to("#videocontainer",   0.5,{x:-310});
                                gsap.to("#collapsegameplay", 0.5,{x:25});
                            },
            collapsegameplay: function(){
                                gsap.to("#collapsegameplay", 0.1,{x:-25});
                                gsap.to("#videocontainer", 0.5,{x:300});
                                gsap.to("#watchgameplay",    0.5,{x:0});
                            }
        },

        ground : function(){
                    gsap.to(animationcontainer, 75,  {x:-973,delay:2, ease:Linear.easeNone});
                    gsap.to(mushroom, .5,{y:-45,delay:.5, alpha:1});
                    gsap.to(questionblock, .2,{ delay:.5, alpha:0});
                    gsap.to(questionblock1,.2,{ delay:.5, alpha:1});
                    gsap.to(mushroom, .5,{x:45,   delay:1});
                    gsap.to(mushroom, .3,{y:72,   delay:1.3});
                    gsap.to(mushroom,  2,{x:130,  delay:1.6});
                    gsap.to(mushroom,  4,{x:-130, delay:3.6});
                    gsap.to(plant,     1,  {y:-59, delay:29});
                    gsap.to(plant,     1.5,{y: 59, delay:31});
                    gsap.to(plant,     1,  {y:-59, delay:34});
                    gsap.to(plant,     1.5,{y: 59, delay:37});
                    gsap.to(plant,     1,  {y:-59, delay:40});
                    gsap.to(mario,     1,  {y:-178, delay:77});

        }
    },
}



