

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


// document.querySelector('.gnb .depth').addEventListener('mouseleave',()=>{
//   header.style.height = `${headerHeight}px`;
// })

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



// sub slide 스크립트
multipleSlide('.main_newpd .slide-wrapper', 360);
multipleSlide('.main_sns .slide-wrapper', 360);

function multipleSlide(target, swidth){
  const subslideWrapper = document.querySelector(`${target}`);
  const subslideContainer = subslideWrapper.querySelector('.slide-container');
  const subslides = subslideWrapper.querySelectorAll('li');
  const prevBtn = subslideWrapper.querySelector('.prev');
  const nextBtn = subslideWrapper.querySelector('.next');
  const gap = 30;
  const subslideCount = subslides.length;
  let subcurrentIdx = 0;
  
  const submoveAmt = swidth + gap;
  // const subslideWidth = subslideWrapper.offsetWidth;
  
  
  //슬라이드 너비
  let containerWidth = `${swidth*subslideCount+gap*subslideCount-1}px`;
  subslideContainer.style.width = containerWidth;
  subslideWrapper.style.width = containerWidth;
  
  function subshowSlide(idx){
    for(let slide of subslides){
      slide.classList.remove('active');
    }  
    subslideContainer.style.left = `${submoveAmt * -idx}px`;
    subcurrentIdx = idx;
  }
  subshowSlide(0);
  
  
  
  function subMoveSlide(idx) {
    subslideContainer.style.left = `${-idx*submoveAmt}px`;
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
    
    
    
  }
  
  
  // 이전 버튼으로 이동하기
  prevBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    subMoveSlide(subcurrentIdx-1);
  });
  
  // 다음 버튼으로 이동하기
  nextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    subMoveSlide(subcurrentIdx+1);
  });
  
  // 슬라이드가 처음이면 이전버튼 색 어둡게, 처음이 아니면 원래대로
   if(subcurrentIdx == 0) {
    subslideWrapper.querySelector('i').style.display='none';
  } else {
    subslideWrapper.querySelector('i').style.display='';
  }
  /* 슬라이드가 마지막이면 next에 버튼 색 어둡게 */
  if (subcurrentIdx === subslideCount -1) {
    subslideWrapper.querySelector('i').style.display='none';
   } else {
    subslideWrapper.querySelector('i').style.display='';
    }
    
    console.log(subcurrentIdx); //0~
    console.log(subslideCount); //8 
  
}


