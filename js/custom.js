const bgOverlay= document.querySelector('.bg-overlay');
const navBar = document.querySelector('.nav-bar');
const navMenu = document.querySelector('.nav-menu');
const navCart = document.querySelector('.nav-cart');
const navCartClose = document.querySelector('.nav-cart-bar-close');
const navCartBar= document.querySelector('.nav-cart-bar');
function menuBar(){
    navBar.addEventListener("click",()=>{
        navBar.classList.toggle('active');
        // alert("hello")
        navMenu.classList.toggle('show');
        bgOverlay.classList.toggle('active')
    })
}
menuBar();

function cartBar(){
    navCart.addEventListener("click",()=>{
        navCartBar.classList.toggle('active');
        bgOverlay.classList.toggle('active')
    });
    navCartClose.addEventListener("click",()=>{
        navCartBar.classList.remove('active');
        bgOverlay.classList.toggle('active')
    })
}
cartBar();


document.addEventListener('readystatechange', e => {
    if(document.readyState === "complete"){
    //   document.querySelector('.webBody').style.opacity= "1";
      document.querySelector('.loader').style.display= "none";
    }else{
        // document.querySelector('.webBody').style.display= "none";
        setTimeout(()=>{
          document.querySelector('.loader').style.display= "flex";

        },100)
    }
  });

const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 70) {
    header.classList.add(toggleClass);
  } else {
    header.classList.remove(toggleClass);
  }
});
