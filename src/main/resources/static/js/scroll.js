var head = document.getElementById("head");

var absolute = document.getElementById("absolute");

var heigthHead = head.offsetHeight;
//var heigthUserContain = userContain.offsetHeight;

window.addEventListener('scroll',function(){
    
//    console.log(111);
    
    if(window.scrollY>heigthHead){
        absolute.style.top="50px";
    }
    
    if(window.scrollY<heigthHead){
        absolute.style.top="150px";
    }



});