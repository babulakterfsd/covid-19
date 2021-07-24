// code for preloader starts here
document.getElementsByTagName('main')[0].style.display = 'none';
 document.querySelector('.loader').style.display = 'none';
 
 window.addEventListener('load', function () {
    
     document.querySelector('.loader').style.display = 'block';
 
     setTimeout(function () {
         document.getElementsByTagName('main')[0].style.display = 'block';
         document.querySelector('.loader').style.display = 'none';
 
     }, 2550);
 
 })


 // code for body starts from here 

