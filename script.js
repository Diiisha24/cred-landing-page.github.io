// section-6
const sec6 = document.querySelector('.sec-6');

const sec6Left1 = document.querySelector('.sec-6-left-1');
const sec6Left2 = document.querySelector('.sec-6-left-2');
const sec6Left3 = document.querySelector('.sec-6-left-3');
const sec6Left4 = document.querySelector('.sec-6-left-4');

const sec6RightImg = document.querySelector('.sec-6-right-img');

const sec6RightImage1 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png";
const sec6RightImage2 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png";
const sec6RightImage3 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png";
const sec6RightImage4 = "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png";


window.addEventListener('scroll',()=>{
    const scrollPosition = window.scrollY;
    const sec6OffsetTop = sec6.offsetTop;
    const sec6Height= sec6.clientHeight;

    // sec-6-left
    if((scrollPosition > sec6OffsetTop) && (scrollPosition < (sec6Height + sec6OffsetTop))){

        if((scrollPosition > sec6OffsetTop) && scrollPosition < sec6OffsetTop + 300){
            sec6Left1.style.opacity = 1;
            sec6Left1.style.transition="opacity 1s ease-in-out";
        }else if((scrollPosition > sec6OffsetTop + innerHeight) && (scrollPosition < sec6OffsetTop + innerHeight +300)){
            sec6Left2.style.opacity=1;
            sec6Left2.style.transition="opacity 1s ease-in-out";
        }else if((scrollPosition > sec6OffsetTop + innerHeight*2) && (scrollPosition < sec6OffsetTop + innerHeight*2 + 300)){
            sec6Left3.style.opacity=1;
            sec6Left3.style.transition="opacity 1s ease-in-out";
        }else if((scrollPosition > sec6OffsetTop + innerHeight*3) && (scrollPosition < sec6OffsetTop + innerHeight*3 + 300)){
            sec6Left4.style.opacity=1;
            sec6Left4.style.transition="opacity 1s ease-in-out";

        }else{
            sec6Left1.style.opacity=0;
            sec6Left2.style.opacity=0;
            sec6Left3.style.opacity=0;
            sec6Left4.style.opacity=0;
        }


        // sec-6-right
        if((scrollPosition > sec6OffsetTop) && (scrollPosition < sec6OffsetTop + innerHeight)){
            sec6RightImg.src = sec6RightImage1;
            sec6RightImg.style.transition="scrollBehaviour 5s ease-in-out";
        }else if((scrollPosition > sec6OffsetTop + innerHeight) && (scrollPosition < sec6OffsetTop + innerHeight*2)){
            sec6RightImg.src = sec6RightImage2;
            sec6RightImg.style.transition="scrollBehaviour 5s ease-in out";
        }else if((scrollPosition > sec6OffsetTop + innerHeight*2) && (scrollPosition < sec6OffsetTop + innerHeight*3)){
            sec6RightImg.src = sec6RightImage3;
            sec6RightImg.style.transition="scrollBehaviour 5s ease-in out";
        }else if((scrollPosition > sec6OffsetTop + innerHeight*3) && (scrollPosition < sec6OffsetTop + innerHeight*4)){
            sec6RightImg.src = sec6RightImage4;
            sec6RightImg.style.transition="scrollBehaviour 5s ease-in out";
        }else{
            sec6RightImg.src= sec6RightImage1;
        }

    }

})  

// section-10
 const sec10 = document.querySelector('.sec-10');

 var reviewMain =   document.querySelector('.sec-10-review-main');
 var reviewPerson = document.querySelector('.sec-10-review-person');


// const reviewPerson1="";
// const reviewMain2 ="in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job.";
// const reviewPerson2="parul mehra";
// const reviewMain3="have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience.";
// const reviewPerson3 ="pushpalatha a";
// const reviewMain4="great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred.";
// const reviewPerson4 ="sanjeev kataria";
// const reviewMain5="i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. that's really cool. thanks for all the awesomeness. keep inventing !!";
// const reviewPerson5 ="jagadeeswar reddy singam";

const sec10CarouselButton = document.querySelector('.sec-10-carousel-button');

 const sec10CarouselButton1 = document.querySelector('.sec-10-carousel-button-1');
 const sec10CarouselButton2 = document.querySelector('.sec-10-carousel-button-2');
 const sec10CarouselButton3 = document.querySelector('.sec-10-carousel-button-3');
 const sec10CarouselButton4 = document.querySelector('.sec-10-carousel-button-4');
 const sec10CarouselButton5 = document.querySelector('.sec-10-carousel-button-5');

 

 function selected(x){
    x.style.opacity=0.6;
 }


  
 sec10CarouselButton1.addEventListener("click",()=>{
    selected(sec10CarouselButton1);
    reviewMain="this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind";
    reviewPerson="ranesh bhattacharya";
 })

 sec10CarouselButton2.addEventListener("click",()=>{
    selected(sec10CarouselButton2);
    reviewMain="this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind";
    reviewPerson="ranesh bhattacharya";
 })

 sec10CarouselButton3.addEventListener("click",()=>{
    selected(sec10CarouselButton3);
    reviewMain="this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind";
    reviewPerson="ranesh bhattacharya";
 })

 sec10CarouselButton4.addEventListener("click",()=>{
    selected(sec10CarouselButton4);
    reviewMain="this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind";
    reviewPerson="ranesh bhattacharya";
 })

 sec10CarouselButton5.addEventListener("click",()=>{
    selected(sec10CarouselButton5);
    reviewMain="this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind";
    reviewPerson="ranesh bhattacharya";
 })

// const x=1;

//  function selected(x) {
//      return x;
//     }
//    const y=selected(1);
    // const newSec10CarouselButton ="sec10CarouselButton"+ 1 ;
    // const newReviewMain = ("reviewMain" + 1 );
    // const newReviewPerson = ("reviewPerson" + 1) ;
//    const z= style(newReviewMain,newReviewPerson); 

//  function style(newReviewMain,newReviewPerson){
//     //  newSec10CarouselButton.style.opacity=1;
//     //  reviewMain= newReviewMain;
//      reviewPerson= newReviewPerson;

//  }
// const n=2;
// reviewMain = "reviewMain"+n;

