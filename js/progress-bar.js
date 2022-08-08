// Calculate scroll progress
let scrollCalc = () => {
	let docElem = document.documentElement,
		docBody = document.body,
		scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
		scrollBottom= ( docElem['scrollHeight'] || docBody['scrollHeight'] ) - window.innerHeight,
		scrollPercent = scrollTop / scrollBottom * 100 + '%';

	document.getElementById('progressBar').style.setProperty('--scrollPercent', scrollPercent);
}

// Reposition for mobile
if (matchMedia('only screen and (max-width: 760px)').matches) {
	let header = document.querySelector('header'),
		headerHeight = header.offsetHeight + 'px';

	document.getElementById('progressBar').style.setProperty('--belowHeader', headerHeight);
}

document.addEventListener('scroll', scrollCalc);

// // DEBOUNCE

// function debounce(func, wait) {
//     let timeout;
//     return () => {
//         if (timeout) {
//             clearTimeout(timeout);
//         }
//         timeout = setTimeout(func, wait)
//     }
// }

// const onScrollSetProgress = debounce(() => {
//     // send request
// 	scrollCalc();
// }, 100);

// document.addEventListener('scroll', onScrollSetProgress);


// THROTTLE

//initialize throttleTimer as false
// let throttleTimer = false;

// const throttle = (callback, time) => {
//     //don't run the function while throttle timer is true
//     if (throttleTimer) return;

//     //first set throttle timer to true so the function doesn't run
//     throttleTimer = true;

//     setTimeout(() => {
//         //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed
//         callback();
//         throttleTimer = false;
//     }, time);
// }

// window.addEventListener('scroll', () => {
// 	throttle(scrollCalc, 42);
//   })
