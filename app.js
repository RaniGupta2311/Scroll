// console.log("Welcome to scroll project");

// setting date value dynamilcally
const date=document.querySelector(".date");
date.innerHTML=new Date().getFullYear();

// toggling navbar
const navToggleBtn=document.querySelector(".nav-toggle");
const linksContainer=document.querySelector(".links-container");
const links=document.querySelector(".links");
// first way,here we are fixing the height of links container(height 200px)
// navToggleBtn.addEventListener("click",function(){
//     linksContainer.classList.toggle("show-link");
// });
// doing dynamically Element.getBoundingClientReact() method returns the size of
// an element and its position relative to the viewport
navToggleBtn.addEventListener("click",function(){
    const linksContainerHeight=linksContainer.getBoundingClientRect().height;
    const linksHeight=links.getBoundingClientRect().height;
    if(linksContainerHeight===0){
        linksContainer.style.height=`${linksHeight}px`
    }
    else{
        linksContainer.style.height=0;
    }
});

// fixed navbar
// pageYOffset is a read only window property that returns the number of pixel
// the document has been scrolled vertically
const navbar=document.getElementById("nav");
const topLink=document.querySelector(".top-link");
window.addEventListener("scroll",function(){
    // console.log(window.pageYOffset);
    const scrollHeight=window.pageYOffset;
    const navbarHeight=navbar.getBoundingClientRect().height;
    if(scrollHeight>navbarHeight)
    {
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }
    if(scrollHeight>500){
    topLink.classList.add('show-link');
    }
    else{
        topLink.classList.remove('show-link');
    }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
