let tween;

function initAnimation() {
	startAnimation();
}

function replayAnimationCall(){
	tween.restart();
}

function startAnimation() {
	document.querySelector("#container").style.opacity = 1;
	gsap.registerPlugin(SplitText);
     tween = gsap.timeline();

	mySplitText = new SplitText("#frame1Headline", { type: "words,chars,lines" }),
	lines = mySplitText.lines; //an array of all the divs that wrap each character
	gsap.set("#frame1Headline", { perspective: 400 });
	console.log(lines);

	mySplitText2 = new SplitText("#frame1Subheadline", { type: "words,chars,lines" }),
	sublines = mySplitText2.lines; //an array of all the divs that wrap each character
	gsap.set("#frame1Subheadline", { perspective: 400 });
	console.log(sublines);

	mySplitText3 = new SplitText("#frame2Headline", { type: "words,chars,lines" }),
	lines2 = mySplitText3.lines; //an array of all the divs that wrap each character
	gsap.set("#frame1Headline", { perspective: 400 });
	console.log(lines2);

	mySplitText4 = new SplitText("#frame2Subheadline", { type: "words,chars,lines" }),
	sublines2 = mySplitText4.lines; //an array of all the divs that wrap each character
	gsap.set("#frame1Subheadline", { perspective: 400 });
	console.log(sublines2);

	mySplitText5 = new SplitText("#frame3Headline", { type: "words,chars,lines" }),
	lines3 = mySplitText5.lines; //an array of all the divs that wrap each character
	gsap.set("#frame3Headline", { perspective: 400 });
	console.log(lines3);

	mySplitText6 = new SplitText("#frame3Subheadline", { type: "words,chars,lines" }),
	sublines3 = mySplitText6.lines; //an array of all the divs that wrap each character
	gsap.set("#frame3Subheadline", { perspective: 400 });
	console.log(sublines3);

	tween.set("#cta-wrapper",{scale:0.6},"+=0")

	

	//FRAME1
	tween.to("#frame1Image-wrapper", {opacity:0.99,duration: 0.5, ease: "power2.out"},"+=0.3");
	tween.to("#frame1Headline-wrapper",{opacity:1},"+=0")
	tween.from(lines, { duration: 0.4, opacity: 0, y: 30, stagger: 0.09, ease:'circ.out' },"-=0.6");
	tween.to("#frame1Subheadline-wrapper",{opacity:1},"-=0.4")
	tween.from(sublines, { duration: 0.4, opacity: 0, y: 30, stagger: 0.09, ease:'circ.out' },"-=0.4");

	tween.to("#frame1Headline-wrapper",{opacity: 0, duration: .5},"+=2")
	tween.to("#frame1Subheadline-wrapper",{opacity: 0, duration: .5},"-=.5")
	tween.to("#frame1Image-wrapper",{opacity: 0, duration: .5},"-=.5")
	//FRAME2
	tween.to("#frame2Image-wrapper", {opacity:0.99,duration: 0.5,ease: "power2.out"},"+=0");
	tween.to("#frame2Headline-wrapper",{opacity:1},"+=0")
	tween.from(lines2, { duration: 0.4, opacity: 0, y: 30, stagger: 0.09, ease:'circ.out' },"-=0.6");
	tween.to("#frame2Subheadline-wrapper",{opacity:1},"-=0.4")
	tween.from(sublines2, { duration: 0.4, opacity: 0, y: 30, stagger: 0.09, ease:'circ.out' },"-=0.4");

	tween.to("#frame2Headline-wrapper",{opacity: 0, duration: .5},"+=2")
	tween.to("#frame2Subheadline-wrapper",{opacity: 0, duration: .5},"-=.5")
	tween.to("#frame2Image-wrapper",{opacity: 0, duration: .5},"-=.5")

	//FRAME3
	tween.to("#frame3Image-wrapper", {opacity:0.99,duration: 0.5, ease: "power2.out"},"+=0");
	tween.to("#frame3Headline-wrapper",{opacity:1},"+=0")
	tween.from(lines3, { duration: 0.4, opacity: 0, y: 30, stagger: 0.09, ease:'circ.out' },"-=0.6");
	tween.to("#frame3Subheadline-wrapper",{opacity:1},"-=0.4")
	tween.from(sublines3, { duration: 0.4, opacity: 0, y: 30, stagger: 0.09, ease:'circ.out' },"-=0.4");
	//CTA
	tween.to("#replay_btn-wrapper",{duration: 0.4, opacity: 1, visibility:"visible"},"+=0")
	tween.to("#cta-wrapper",{duration: 0.2, opacity: 1, scale:1.05},"+=0.2")
	tween.to("#cta-wrapper",{duration: 0.4, opacity: 1, scale:1},"+=0")
	tween.to("#cta-wrapper",{duration: 0.2, opacity: 1, scale:1.05},"+=0")
	tween.to("#cta-wrapper",{duration: 0.4, opacity: 1, scale:1},"+=0")
	tween.to("#cta-wrapper",{duration: 0.2, opacity: 1, scale:1.05},"+=0")
	tween.to("#cta-wrapper",{duration: 0.4, opacity: 1, scale:1},"+=0")



}
