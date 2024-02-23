/*

const slideWrapper = document.querySelector('.slide-wrapper');
const slideContainer =slideWrapper.querySelector('.slide-container');
let slides = slideContainer.querySelectorAll('li');
const slideBtn = slideWrapper.querySelectorAll('.controls');
const mainMenu = document.querySelectorAll('.gnb_wrap>.gnb>li');
const header = document.querySelector('header');

const headerHeight = header.offsetHeight;
const slideHeight = slideWrapper.offsetHeight;
const moveAmt = slideHeight;
let currentIdx = 0;
let slideCount = slides.length;

//헤더 이벤트
for(let mm of mainMenu){
	mm.addEventListener('mouseenter',()=>{
		let smHeight = mm.querySelector('ul').offsetHeight;
		let totalHeight = smHeight + headerHeight;
		header.style.height = `${totalHeight}px`;
	});
	mm.addEventListener('mouseleave',()=>{
		header.style.height = `${headerHeight}px`;
	});
}

///slideContainer의 너비를 지정
slides = slideContainer.querySelectorAll('li');
let newslideCount = slides.length;


// 이동함수
function moveSlide(idx) {
// idx = 0, slideContainer left 0,
// idx = 1, slideContainer left = 230px.
// idx = 2, slideContainer left = 460px.
slideContainer.style.top = `${-idx*moveAmt}px`;
currentIdx = idx;
}

slideBtn.forEach((item,idx)=>{
  item.addEventListener('click',(e)=>{
    e.preventDefault();
    moveSlide(idx);

    //전체에서 active제거, item에서만 추가
    for(let sb of slideBtn){
      sb.classList.remove('active');
    }
    item.classList.add('active');
  });
});
*/

// sub slide 스크립트
const subslideWrapper = document.querySelector('.main_newpd .slide-wrapper');
const subslideContainer = subslideWrapper.querySelector('.slide-container');
const subslides = subslideWrapper.querySelectorAll('.slide');
const prevBtn = subslideWrapper.querySelector('.prev');
const nextBtn = subslideWrapper.querySelector('.next');
const gap = 30;
const subslideCount = subslides.length;
let subcurrentIdx = 0;

let slideWidth = subslideWrapper.offsetWidth;
const moveAmt = slideWidth;
const slideHeight = subslideWrapper.offsetWidth;


//슬라이드 너비
const newslidesCount = document.querySelectorAll('.main_newpd .slide').length;
console.log(newslidesCount);

subslideContainer.style.width = `${slideWidth*newslidesCount +gap*newslidesCount-1}px`;

function showSlide(idx){
  for(let slide of subslides){
    slide.classList.remove('active');
  }
  
  subslideContainer.style.left = `${(slideWidth + gap) * -idx}px`;

  subcurrentIdx = idx;

  if(subcurrentIdx == subslideCount || subcurrentIdx == -subslideCount){
    setTimeout(function(){
        subslideContainer.classList.remove('animated');
        subslideContainer.style.left = '0px';
        subcurrentIdx = 0;
    },500);
  }  

}
showSlide(0);

function setSlide(){
  let ulMoveAmt = `${-(subslideCount * slideWidth + gap*subslideCount)}px`;

  subslideContainer.style.transform = `translateX(${ulMoveAmt})`;
  subslideContainer.classList.add('animated');
}
setSlide();

function moveSlide(idx) {
  subslideContainer.style.left = `${-idx*moveAmt}px`;
  subcurrentIdx = idx;
  
  if(subcurrentIdx == -subslideCount || subcurrentIdx == subslideCount){
    setTimeout(()=>{
      subslideContainer.classList.remove('animated');
      subslideContainer.style.left = 0;
    },500);
    setTimeout(()=>{
      subslideContainer.classList.add('animated');
    },550);
  
    subcurrentIdx = 0;
  }
  console.log(subcurrentIdx);
  }


// 이전 버튼으로 이동하기
prevBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  moveSlide(subcurrentIdx-1);
});

// 다음 버튼으로 이동하기
nextBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  moveSlide(subcurrentIdx+1);
});


