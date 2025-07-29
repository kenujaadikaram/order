const dm=document.getElementById('maind');
const en=document.getElementById('enter');
const or=document.getElementById('orders');
let p=1;
 let bi='true';
function main(){
    bi='false';
    dm.style.backgroundSize='cover';
    if(p==5){
        alert(11);
    }
   if(p==3){
      dm.style.backgroundImage='url("Untitled - Copy.png")';
      document.body.style.backgroundImage='url("foodbg.jpg")';
       dm.style.opacity=0.9;
   };
   if(p==1){
   or.style.width='395px';
   or.style.left='551px';
   or.style.top='450px';
   dm.style.backgroundColor="blue";
   dm.style.backgroundImage='url("Untitled.png")';
   dm.style.width='400px';
   dm.style.height='400px';
   dm.style.left='550px';
   dm.style.top='10px';
   document.body.style.backgroundImage='url("download.jpg")';
   document.body.style.backgroundSize='1550px 900px';
   en.style.width='200px';
   en.style.height='100px';
   en.style.top='300px';
   en.style.left='200px';
   const div1 = document.createElement("div");
   div1.style.backgroundImage='url("foodbg.jpg")';
   dm.appendChild(div1);
   div1.style.position='relative';
   div1.style.top='200px';
  
   };
    p=p+1;

  
   
}
    function st(){
        
        st1(); 
        dm.style.opacity=0.8;
        document.body.style.opacity=10;
        
        
        
        
    }
    function st1(){
        if(bi=='true'){
      setTimeout(bc,2500);
      dm.style.backgroundImage='url("f1.jpg")';
        }
    }
    function bc(){
        if(bi=='true'){
         dm.style.backgroundImage='url("foodbg.jpg")';
         setTimeout(bc2,2500);
        }
    }
        function bc2(){
            if(bi=='true'){
         dm.style.backgroundImage='url("download.jpg")';
         dm.style.backgroundSize='500px 300px';
         setTimeout(st1,2500);
            }
    }
















































































































































































