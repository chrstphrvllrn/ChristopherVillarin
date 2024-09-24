let tween;

function initAnimation() {
	startAnimation();
}

function replayAnimationCall(){
	tween.restart();
}

function startAnimation() {
	document.querySelector("#container").style.opacity = 1;

	// CustomEase.create("bounce", "0.175, 0.885, 0.32, 1.275");
	tween = gsap.timeline();

	// tween.set("#frame1Headline-wrapper",{opacity:0, y:50})
	// tween.set("#frame1Subheadline-wrapper",{opacity:0, y:40})
	// tween.set("#label1-wrapper",{opacity:0, y:30})
	// tween.set("#label2-wrapper",{opacity:0, y:30})
	// tween.set("#loanterm",{opacity:0, y:30})
	// tween.set("#loanterm",{opacity:0, y:30})
	// tween.set("#loanamount",{opacity:0, y:30})
	// tween.set("#ctaText",{opacity:0, scale:0})

	// tween.to("#frame1Headline-wrapper", {opacity:0.99,duration: .5, ease: "power4.easeOut", y:0},"+=0");
	// tween.to("#frame1Subheadline-wrapper", {opacity:0.99,duration: .5,ease: "power4.easeOut", y:0},"-=.2");


	// tween.to("#label2-wrapper", {opacity:0.99,duration: .5,ease: "power4.easeOut", y:0},"-=.2");
	// tween.to("#loanamount", {opacity:0.99,duration: .5,ease: "power4.easeOut", y:0},"-=.5");

	// tween.to("#label2-wrapper", {opacity:0.99,duration: .5,ease: "power4.easeOut", y:0},"-=.2");
	// tween.to("#loanamount", {opacity:0.99,duration: .5,ease: "power4.easeOut", y:0},"-=.5");

	// tween.to("#label1-wrapper", {opacity:0.99,duration: .5,ease: "power4.easeOut", y:0},"-=.2");
	// tween.to("#loanterm", {opacity:0.99,duration: .5,ease: "power4.easeOut", y:0},"-=.5");



	// tween.to("#ctaText", {opacity:0.99,duration: .5, ease: "bounce", scale:1},"+=0");



}
