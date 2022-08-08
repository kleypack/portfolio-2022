// CONSTANTS - NAVIGATION ELEMENTS
const header = document.querySelector("header");
const mainNav = document.getElementById("mainNav");
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");


// THROTTLE
function throttle(func, wait) {
	let waiting = false;
	return function () {
		if (waiting) {
			return;
		}

		waiting = true;
		setTimeout(() => {
			func.apply(this, arguments);
			waiting = false;
		}, wait);
	};
}


// DESKTOP
if (matchMedia('only screen and (min-width: 760px)').matches) {

	// Hide main nav .hide-nav section
	let displayNavOnScrollTo = function () {

		// Define scroll position
		let scrollPosition = window.scrollY;

		// Define hide-nav section
		let sectionHideNav = document.querySelector(".hide-nav");
		// Define height of hide-nav section, set to -500 (to account for elastic scroll) if no section exists
		let sectionHeight = (sectionHideNav !==null) ? sectionHideNav.offsetHeight : "-500";

		// Add and remove class to nav
		// CHANGED mainNav to navOpen
		const addClassOnScrollTo = () => mainNav.classList.add("visible");
		const removeClassOnScrollTo = () => mainNav.classList.remove("visible");

		// Toggle visibility based on section
			if (scrollPosition >= sectionHeight) {
				addClassOnScrollTo();
			} else {
				removeClassOnScrollTo() ;
			}

	}


	// Hide header on scroll down
	const scrollDown = "scroll-down";
	let lastScroll = 0;

	let hideHeaderOnScroll = function () {

		window.addEventListener("scroll", () => {
		  const currentScroll = window.pageYOffset;
		  if (currentScroll <= 0) {
			header.classList.remove(scrollDown);
			return;
		  }

		  if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
			// down
			header.classList.add(scrollDown);
		  } else if (currentScroll < lastScroll && header.classList.contains(scrollDown)) {
			// up
			header.classList.remove(scrollDown);
		  }
		  lastScroll = currentScroll;
		});

	}


	// Trigger scroll events with throttle
	const onScroll = throttle(() => {
		// Call function
		displayNavOnScrollTo();
		hideHeaderOnScroll();
	}, 500);

	// On page load
	window.addEventListener("load", displayNavOnScrollTo);
	// On scroll with throttle
	document.addEventListener("scroll", onScroll);

}


// MOBILE & TOUCH SCREENS

if ( (matchMedia('only screen and (max-width: 760px)').matches) || (matchMedia('(pointer: coarse)').matches) ) {

// Toggle between showing and hiding the navigation menu links when the user clicks on the menu toggle
function toggleNav() {

	if (mainNav.classList.contains("mobile-visible")) {
		// hide
		mainNav.classList.remove("mobile-visible");
		mainNav.classList.add("mobile-hidden");
		header.classList.add("mobile-collapsed");
		header.classList.remove("mobile-expanded");
		navClose.classList.add("hidden");
		navOpen.classList.remove("hidden");
	} else {
		// show
		mainNav.classList.add("mobile-visible");
		mainNav.classList.remove("mobile-hidden");
		header.classList.remove("mobile-collapsed");
		header.classList.add("mobile-expanded");
		navOpen.classList.add("hidden");
		navClose.classList.remove("hidden");
	}

}

}



