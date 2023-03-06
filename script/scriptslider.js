index=0
 slideshow()
 function slideshow(){
 x=document.getElementsByClassName("slide")
 for(i=0;i<x.length;i++)
   x[i].style.display="none"
 if(index > x.length-1)
   {index=0;}

 {x[index].style.display="block"
   index++;}
 setTimeout(slideshow,2500)}