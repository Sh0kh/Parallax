const title = document.querySelector('.title')
const leaf2 = document.querySelector('.leaf2')
const leaf1 = document.querySelector('.leaf1')
const bush2 = document.querySelector('.bush2')
const bush1 = document.querySelector('.bush1')
const mount2 = document.querySelector('.mount2')
const mount1 = document.querySelector('.mount1')
const aboutContent = document.querySelector('.about-content')
const aboutImg = document.querySelector('.about-img')

document.addEventListener('scroll', function(){
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'
    leaf1.style.marginLeft = -value + 'px'
    leaf2.style.marginLeft = value + 'px'
    bush2.style.marginBottom = -value + 'px'
    mount1.style.marginBottom = -value *1.1 + 'px'
    mount2.style.marginBottom = -value *1.2 + 'px'
    aboutContent.style.marginLeft = value + 'px'
    let img = aboutImg.style.marginRight = value + "px"
    console.log(value);
})
const heading = document.getElementById('heading');

window.onscroll = function(img2) {
  const scrollTop = window.pageYOffset;
  
  if (scrollTop > 860) {
    heading.style.color = 'blue';
   img = aboutImg.style.marginLeft = value*1.2 + "px"
  } else {
    heading.style.color = 'red';
  }
};