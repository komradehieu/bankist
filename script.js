'use strict';

//  ______            _       _          _           _
// |  ___ \          | |     | |        (_)         | |
// | | _ | | ___   _ | | ____| |   _ _ _ _ ____   _ | | ___  _ _ _
// | || || |/ _ \ / || |/ _  | |  | | | | |  _ \ / || |/ _ \| | | |
// | || || | |_| ( (_| ( ( | | |  | | | | | | | ( (_| | |_| | | | |
// |_||_||_|\___/ \____|\_||_|_|   \____|_|_| |_|\____|\___/ \____|

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// console.log(document.head);
const header = document.querySelector('.header');
// console.log(header);
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

//   ______            _     _                _           _
//  / _____)          | |   (_)              (_)         | |
// | /      ___   ___ | |  _ _  ____    _ _ _ _ ____   _ | | ___  _ _ _
// | |     / _ \ / _ \| | / ) |/ _  )  | | | | |  _ \ / || |/ _ \| | | |
// | \____| |_| | |_| | |< (| ( (/ /   | | | | | | | ( (_| | |_| | | | |
//  \______)___/ \___/|_| \_)_|\____)   \____|_|_| |_|\____|\___/ \____|

const message = document.createElement('div');
message.classList.add('cookie-message1');
message.innerHTML = `We are collecting cookies in order to improve your browsing experience.<button class="btn btn--show-modal btn--close-cookie"> Okay, i got it!! </button> `;

header.before(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 50 + 'px';

const scrollToBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
scrollToBtn.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());
  // // window.scrollTo(s1coords.left,s1coords.top + window.scrollY);
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });
});

// pageNavigation - bad way, not efficient
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = e.currentTarget.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const scrollId = e.currentTarget.getAttribute('href');
//     console.log(scrollId);
//     document.querySelector(scrollId).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//events delegation : efficient
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const scrollId = e.target.getAttribute('href');

    if (e.target.classList.contains('nav__link--btn')) return;

    document.querySelector(scrollId).scrollIntoView({ behavior: 'smooth' });
  }
});

//PROPAGATION SECTION BY HIEU?????????????????????
// setTimeout(function (){
//   console.log('hello')
// },3000);

// setTimeout(function (){
//   setInterval(function () {
//     console.log('hello');
//   }, 1000);
// }, 3000);

// (function (e) {
//   console.log(e * e);
//   return e * e;
// })(20);

//crazy flashing website
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(1, 255)},${randomInt(1, 255)},${randomInt(1, 255)})`;

// console.log(randomColor());
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     e.currentTarget.style.backgroundColor = randomColor();
//     console.log(`NAV LINK`,`e.target:`,e.target,`e.currenTarget:`,e.currentTarget)
//   });
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   e.currentTarget.style.backgroundColor = randomColor();
//   console.log(`NAV LINKs`,`e.target:`,e.target,`e.currenTarget:`,e.currentTarget)
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   e.preventDefault();
//   e.currentTarget.style.backgroundColor = randomColor();
//   console.log(`NAV `,`e.target:`,e.target,`e.currenTarget:`,e.currentTarget)
// });
// setInterval(function(){
//   document.querySelector('body').style.backgroundColor = randomColor();
// },1000);

/////////////////////////////// DOM TRAVERSY//////////////////////

const h1 = document.querySelector('h1');
const lazyImage = document.querySelector('.features__icon');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// console.log(h1.childNodes);

// lazyImage.closest('section').style.backgroundColor =
// console.log(h1);

// const totalArray = function (...number) {
//   return number.reduce((acc, curr) => acc + curr, 0);
// };

// console.log(totalArray(...[1, 2, 3, 4, 5]));
// console.log(totalArray(1, 2, 3, 4, 5));

// // console.log(...(1,2,3,4,5));

// const totalUp = function (endNumber) {
//   let thisArray = [1];
//   let countUp = () => thisArray[thisArray.length - 1] + 1;

//   let validNumber = countUp();

//   while (validNumber <= endNumber) {
//     thisArray.push(validNumber);
//     validNumber = countUp();
//   }

//   return thisArray.reduce((acc, curr) => acc + curr, 0);
// };
// // console.log(totalUp(9000000));

//  _______      _     _              _
// (_______)    | |   | |            | |                                                  _
//  _       ____| | _ | | _   ____ _ | |    ____ ___  ____  ____   ___  ____   ____ ____ | |_
// | |     / _  | || \| || \ / _  ) || |   / ___) _ \|    \|  _ \ / _ \|  _ \ / _  )  _ \|  _)
// | |____( ( | | |_) ) |_) | (/ ( (_| |  ( (__| |_| | | | | | | | |_| | | | ( (/ /| | | | |__
//  \______)_||_|____/|____/ \____)____|   \____)___/|_|_|_| ||_/ \___/|_| |_|\____)_| |_|\___)
//                                                         |_|
const tab = document.querySelectorAll('.operations__tab');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  // Make sure to get button element no matter click on span or button
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  //Always remove active class when not in use
  tab.forEach(t => t.classList.remove('operations__tab--active'));

  //Active tab when clicked //
  clicked.classList.add('operations__tab--active');

  //Always remove active class when not in use
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//  _______        _ _                            _                  _
// (_______)      | (_)                          (_)            _   (_)
//  _____ ____  _ | |_ ____   ____     ____ ____  _ ____   ____| |_  _  ___  ____
// |  ___) _  |/ || | |  _ \ / _  |   / _  |  _ \| |    \ / _  |  _)| |/ _ \|  _ \
// | |  ( ( | ( (_| | | | | ( ( | |  ( ( | | | | | | | | ( ( | | |__| | |_| | | | |
// |_|   \_||_|\____|_|_| |_|\_|| |   \_||_|_| |_|_|_|_|_|\_||_|\___)_|\___/|_| |_|
//                          (_____|              for navbar

const nav = document.querySelector('.nav');
// console.log(nav);

/////////////////////////////////////////HANDLE FADING ANIMATION
const fadingAnimation = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    // console.log(this);
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const image = link.closest('nav').querySelector('.nav__logo');
    siblings.forEach(el => {
      if (el !== e.target) {
        el.style.opacity = this;
      }
    });
    image.style.opacity = this;
  }
};

nav.addEventListener('mouseover', fadingAnimation.bind(+'0.5'));
nav.addEventListener('mouseout', fadingAnimation.bind(+'1'));
// //old school way
// nav.addEventListener('mouseover', function (e) {
//   fadingAnimation(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   fadingAnimation(e, 1);
// });

//Bind method : bind set this keyword

//////////////STICKY NAVIGATION
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//////////////////////////////////////Intersection Observer
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// // console.log(document.querySelector('#section--2'));

// observer.observe(section1);

// const nguyenKhoa = {
//   name: 'Khoa',
//   age: 40,
//   gender: 'male',
//   children: 2,
//   pet: 'Joey',
//   introduce: function ({ name, age, gender, children, pet }) {
//     console.log(
//       `Im ${name}, im ${age}, my pet is ${pet}, my gender is ${gender}, i have ${children} children`
//     );
//   },

//   arrayFn: function ([a, b, c, ...d]) {
//     console.log(a == b);
//     console.log(a + b + c + d);
//   },
// };

// for (const item of Object.entries(nguyenKhoa)) {
//   console.log(item);
// }

// const {
//   name: myName,
//   age: myAge,
//   gender: sex,
//   children: child,
//   pet: myPet,
// } = nguyenKhoa;

// nguyenKhoa.introduce({
//   name: 'Khoa',
//   age: 50,
//   pet: 'Van',
//   gender: 'Male',
//   children: 2,
// });

// nguyenKhoa.arrayFn([1, 1, 5, 6, 4, 5, 5, 4, 5, 6, 7, 8, 5, 3, 2, 1]);

// console.log(myAge);

// const [...number] = [1, 2, 3, 4, 5, 5, 7, 8, 9, 1000];
// const disArray = [...number];

// let result = [];
// for (const item of disArray.entries()) {
//   result.push(item);
// }
// // const util = require('util');
// console.dir(result);
// const steamRoll1 = function (arr) {
//   let result = arr.reduce(
//     (acc, curr) => acc.concat(Array.isArray(curr) ? steamRoll1(curr) : curr),
//     []
//   );
//   return result;
// };

// console.log(
//   JSON.stringify(steamRoll1([[[[[[[[[[[[[[[[[[result]]]]]]]]]]]]]]]]]]))
// );

// console.log(
//   steamRoll1([[[[[[[[result]]]]]]]]).reduce((acc, curr) => acc + curr, 0)
// );

// // console.log(JSON.stringify({name : 'dog'},function () {}, Symbol('')))

// const flattenArray = function (arr) {
//   let result = arr.reduce(
//     (acc, curr) => acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr),
//     []
//   );
//   return result;
// };

// console.log(
//   JSON.stringify(
//     flattenArray([[[[[[[[[[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]]]]]]]]])
//   )
// );

// const stickyNav = function (entries){
//   const [entry] = entries; // use destructuring to get first element of entries;
//   console.log(entry);
//   if (entry.isIntersecting === true){
//     nav.classList.remove('sticky');
//   } else {
//     nav.classList.add('sticky');
//   }
// }

// const navHeight = nav.getBoundingClientRect();
// console.log(navHeight);

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold : 0,
//   rootMargin : `-${navHeight.height}px`,
// });

// headerObserver.observe(header);

// /*=====================================================================+
//  |~_             _                                      _~-~-~-~-~-~-~-|
//  |(_)           | |                        _       _   | |~-~-~-~-~-~-~|
//  |~_ ____  ____ | | ____ ____   ____ ____ | |_    | |_ | | _   ____~-~-|
//  || |    \|  _ \| |/ _  )    \ / _  )  _ \|  _)   |  _)| || \ / _  )~-~|
//  || | | | | | | | ( (/ /| | | ( (/ /| | | | |__   | |__| | | ( (/ /~-~-|
//  ||_|_|_|_| ||_/|_|\____)_|_|_|\____)_| |_|\___)   \___)_| |_|\____)~-~|
//  |-~-~-~-~|_|~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-|
//  |-~-~-~-~-~-~-~-~_ _                                _~-~-~-~-~-~-~-~-~|
//  |-~-~-~_        (_) |                              | |~-~-~-~-~-~-~-~-|
//  |-~___| |_  ____ _| |  _ _   _    ____   ____ _   _| | _   ____  ____~|
//  |~/___)  _)/ ___) | | / ) | | |  |  _ \ / _  | | | | || \ / _  |/ ___)|
//  ||___ | |_( (___| | |< (| |_| |  | | | ( ( | |\ V /| |_) | ( | | |~-~-|
//  |(___/ \___)____)_|_| \_)\__  |  |_| |_|\_||_| \_/ |____/ \_||_|_|~-~-|
//  |~-~-~-~-~-~-~-~-~-~-~-~(____/~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-|
//  |~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~|
//  +=====================================================================*/
// const stickyNavBar = function (entries, observer) {
//   const [entry] = entries;

//   if (entry.isIntersecting === true) {
//     nav.classList.remove('sticky');
//   } else {
//     nav.classList.add('sticky');
//   }
// };

// const getNavHeight = nav.getBoundingClientRect().height;

// const stickyOptions = {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${getNavHeight}px`,
// };

// new IntersectionObserver(stickyNavBar, stickyOptions).observe(header);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (entry.isIntersecting === false) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const navHeight = document.querySelector('nav').getBoundingClientRect().height;

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
const headerObserver = new IntersectionObserver(stickyNav, obsOptions);
headerObserver.observe(header);

//  ______                        _ _                      _
// (_____ \                      | (_)                    | |                        _
//  _____) ) ____ _   _ ____ ____| |_ ____   ____     ____| | ____ ____   ____ ____ | |_   ___
// (_____ ( / _  ) | | / _  ) _  | | |  _ \ / _  |   / _  ) |/ _  )    \ / _  )  _ \|  _) /___)
// ( /   | ( (/ / \ V ( (/ ( ( | | | | | | ( ( | |  ( (/ /| ( (/ /| | | ( (/ /| | | | |__|___ |
// ( /   |_|\____) \_/ \____)_||_|_|_|_| |_|\_|| |   \____)_|\____)_|_|_|\____)_| |_|\___|___/
//                                         (_____|
//                                       _ _ _
//                                      | | (_)
//   ___  ____      ___  ____  ____ ___ | | |_ ____   ____
//  / _ \|  _ \    /___)/ ___)/ ___) _ \| | | |  _ \ / _  |
// | |_| | | | |  |___ ( (___| |  | |_| | | | | | | ( ( | |
//  \___/|_| |_|  (___/ \____)_|   \___/|_|_|_|_| |_|\_|| |
//                                                  (_____|

// const revealSection = function (entries, observer) {
//   const [entry] = entries;
//   // console.log(entry);
//   if (entry.isIntersecting === true) {
//     entry.target.classList.remove('section--hidden');
//   }
// };
// const sectionObserver = new IntersectionObserver(revealSection, {
//   root: null,
//   threshold: 0.1,
// });

// allSections.forEach(function (section) {
//   section.classList.add('section--hidden');
//   sectionObserver.observe(section);
// });

// const allSectionsFn = function(entries){
//   const [entry] = entries;
//   console.log(entry.target);
//   if (entry.isIntersecting === true){
//     entry.target.classList.remove('section--hidden');
//   } else {
//     entry.target.classList.add('section--hidden');
//   }
// }

// const allSectionsOptions = {
//   root : null,
//   rootMargin : `100px`,
//   threshold : 0.15,
// }

// const allSectionsObs = new IntersectionObserver(allSectionsFn,allSectionsOptions);

// allSections.forEach(section => {
//   section.classList.add('section--hidden');
//   allSectionsObs.observe(section);
// })

//function
const revealing = function (entries, observer) {
  const [entry] = entries;
  // console.log(observer);
  // console.log(entry);

  if (entry.isIntersecting === true) {
    entry.target.classList.remove('section--hidden');
  }
  // observer.unobserve(entry.target);
};

//options
const revealingOptions = {
  root: null,
  threshold: 0.15,
  rootMargin: '100px',
};

//observer
const revealingObserver = new IntersectionObserver(revealing, revealingOptions);

//observe
allSections.forEach(section => {
  section.classList.add('section--hidden');
  revealingObserver.observe(section);
});

//   ______  _____     _______ _____     _______ _____  ______
//  / _____)/ ___ \   (_______) ___ \   (_______) ___ \(_____ \
// | /  ___| |   | |   _     | |   | |   _     | |   | |_____) )
// | | (___) |   | |  | |    | |   | |  | |    | |   | |  ____/
// | \____/| |___| |  | |____| |___| |  | |____| |___| | |
//  \_____/ \_____/    \______)_____/    \______)_____/|_|

const btnGoToTop = document.querySelector('.btn-go-to-top');

//function
const goTop = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting == true) {
    btnGoToTop.classList.add('btn-go-to-top-hidden');
    // btnGoToTop.classList.add('btn-go-to-top-no-hover');
  } else {
    btnGoToTop.classList.remove('btn-go-to-top-hidden');
    btnGoToTop.classList.remove('btn-go-to-top-no-hover');
  }
};
//options
const goTopOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};
//observer
const goTopObserver = new IntersectionObserver(goTop, goTopOptions);
//observe

goTopObserver.observe(header);

//GoToTop

btnGoToTop.addEventListener('click', function (e) {
  header.scrollIntoView({
    behavior: 'smooth',
  });
});

//  _                      _                 _ _
// | |                    | |               | (_)
// | | ____ _____ _   _   | | ___   ____  _ | |_ ____   ____
// | |/ _  (___  ) | | |  | |/ _ \ / _  |/ || | |  _ \ / _  |
// | ( ( | |/ __/| |_| |  | | |_| ( ( | ( (_| | | | | ( ( | |
// |_|\_||_(_____)\__  |  |_|\___/ \_||_|\____|_|_| |_|\_|| |
//               (____/                               (_____|

// const imgTargets = document.querySelectorAll('img[data-src]');

// //function
// const loadImgs = function(entries,observer){
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   //replace thmbnail with real image

//   entry.target.src = entry.target.dataset.src;
//   entry.target.addEventListener('load', function(){
//     entry.target.classList.remove('lazy-img');
//   })
//   console.log(observer);
//   observer.unobserve(entry.target);

// }

// //observer
// const imgObserver = new IntersectionObserver(loadImgs,{
//   root: null,
//   threshold : 0,
// });
// //observe

// imgTargets.forEach(el => {
//   imgObserver.observe(el);
// })
// // console.log(imgTargets);

const lazyImages = document.querySelectorAll('img[data-src]');

//function
const loadingImgs = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
//observer
const lazyImgsObserver = new IntersectionObserver(loadingImgs, {
  root: null,
  threshold: 0,
  rootMargin: '0px',
});

//observe multiple lazy images
lazyImages.forEach(image => {
  lazyImgsObserver.observe(image);
});

//       _ _     _
//      | (_)   | |
//   ___| |_  _ | | ____  ____
//  /___) | |/ || |/ _  )/ ___)
// |___ | | ( (_| ( (/ /| |
// (___/|_|_|\____|\____)_|

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.75)';
// slider.style.overflow = 'visible';

// 0%, 100%, 200%, 300%

// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// let curSlide = 0;
// const maxSlide = slides.length - 1;
// console.log(maxSlide);

// //need refactoring
// slides.forEach(
//   (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
// );

// btnRight.addEventListener('click', function () {
//   if (curSlide === maxSlide) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   //need refactoring
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
//   );
// });

// btnLeft.addEventListener('click', function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }
//   //need refactoring
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
//   );
// });

// const nextBtn = document.querySelector('.slider__btn--right');
// const prevBtn = document.querySelector('.slider__btn--left');
// let currentSlide = 0;
// const maxSlide = slides.length;
// // console.log(maxSlide);

// // Refactoring
// // slides.forEach((slide, index) => {
// //   slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
// // });

// const goToSlide = function (targetSlide) {
//   slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${100 * (index - targetSlide)}%)`;
//   });
// };

// const nextSlide = function () {
//   currentSlide == maxSlide - 1 ? (currentSlide = 0) : currentSlide++;
//   goToSlide(currentSlide);
//   activateDots(currentSlide);
// };

// const prevSlide = function () {
//   currentSlide == 0 ? (currentSlide = maxSlide - 1) : currentSlide--;
//   goToSlide(currentSlide);
//   activateDots(currentSlide);
// };

// goToSlide(0);

// nextBtn.addEventListener('click', nextSlide);
// prevBtn.addEventListener('click', prevSlide);

// //keyboard moving slides
// document.addEventListener('keydown', function (e) {
//   e.key === 'ArrowLeft' ? prevSlide() : null;
//   e.key === 'ArrowRight' ? nextSlide() : null;
// });

// //the dots implementation
// const dotContainer = document.querySelector('.dots');
// const createDots = function () {
//   slides.forEach((slide, index) => {
//     dotContainer.insertAdjacentHTML(
//       'beforeend',
//       `<button class="dots__dot" data-slide="${index}"></button>`
//     );
//   });
// };

// createDots();

// const allDots = document.querySelectorAll('.dots__dot');

// dotContainer.addEventListener('click', function (e) {
//   const currentDotSlide = e.target.dataset.slide;

//   if (e.target.classList.contains('dots__dot')) {
//     goToSlide(currentDotSlide);
//   }
//   //dots Clicked moving slides
//   activateDots(currentDotSlide);

// });

// const activateDots = function (slide){
//   allDots.forEach(dot => {
//     dot.classList.remove('dots__dot--active');
//   });

//   document
//     .querySelector(`.dots__dot[data-slide="${slide}"]`)
//     .classList.add('dots__dot--active');

//     // console.log(document
//     //   .querySelector(`.dots__dot[data-slide="${slide}"]`));
// }

// activateDots(0);

// slider.style.overflow = 'visible';
// slider.style.scale = '0.5';

let currentSlide = 0;
let maxSlide = slides.length;
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
});

const nextBtn = document.querySelector('.slider__btn--right');
const prevBtn = document.querySelector('.slider__btn--left');

const goToSlide = function (slideNum) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - slideNum)}%)`;
  });
};

goToSlide(0);


//refactoring
const nextSlide = function () {
  currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;
  goToSlide(currentSlide);
  activateDots(currentSlide);
};

const prevSlide = function () {
  currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;
  goToSlide(currentSlide);
  activateDots(currentSlide);
};

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

//keyboard navigation
// let thisArr = [];
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  e.key == 'ArrowRight' ? nextSlide() : null;
  e.key == 'ArrowLeft' ? prevSlide() : null;
});

//dots implementation
const dots = document.querySelector('.dots');
slides.forEach((slide, index) => {
  dots.insertAdjacentHTML(
    'beforeend',
    `<div class="dots__dot" data-slide=${index}></div>`
  );
});

const allDots = document.querySelectorAll('.dots__dot[data-slide]');

dots.addEventListener('click',function(e){
  const currentDotSlide = e.target.dataset.slide;
  if (e.target.classList.contains('dots__dot')){
    goToSlide(currentDotSlide);
    activateDots(currentDotSlide);
  }
})

const activateDots = function (slide) {
  allDots.forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

activateDots(0);


                                                                                                                
                                           
                                                                             


//   _____ _            _____                   _             _             
//  |_   _| |__   ___  |_   _|__ _ __ _ __ ___ (_)_ __   __ _| |_ ___  _ __ 
//    | | | '_ \ / _ \   | |/ _ \ '__| '_ ` _ \| | '_ \ / _` | __/ _ \| '__|
//    | | | | | |  __/   | |  __/ |  | | | | | | | | | | (_| | || (_) | |   
//    |_| |_| |_|\___|   |_|\___|_|  |_| |_| |_|_|_| |_|\__,_|\__\___/|_|   
                                                                         

