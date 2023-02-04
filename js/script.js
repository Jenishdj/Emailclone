let option1=document.querySelector('.myDIV');
let content1=document.querySelector('.content');
let content5=document.querySelector('.chat3');
let content6=document.querySelector('.spaces3');
let spaces=document.querySelector('.myDIV2');
let content3=document.querySelector('.spaces');
let chat=document.querySelector('.myDIV1');
let content2=document.querySelector('.chat');
let content4=document.querySelector('.content2')


//card mousemove,leave

//mail start

option1.addEventListener('mousemove',function(){
  content1.classList.add("content1");
  content5.classList.add("chat4");
})

option1.addEventListener('mouseleave',function(){
  content1.classList.remove("content1");
  content5.classList.remove("chat4");
})


option1.addEventListener('mousemove',function(){
  content6.classList.add("spaces4");
})

option1.addEventListener('mouseleave',function(){
  content6.classList.remove("spaces4");
})


//mail end

//chat start

chat.addEventListener('mousemove',function(){
  content2.classList.add("chat1")
  content4.classList.add("content3")
})
chat.addEventListener('mouseleave',function(){
  content2.classList.remove("chat1");
  content4.classList.remove("content3")
})


chat.addEventListener('mousemove',function(){
  content6.classList.add('chat4');
})

chat.addEventListener('mouseleave',function(){
  content6.classList.remove('chat4');
})

//chat end


//spaces start

spaces.addEventListener('mousemove',function(){
  content3.classList.add('spaces1');
  content4.classList.add("content3");
})
spaces.addEventListener('mouseleave',function(){
   content3.classList.remove('spaces1');
   content4.classList.remove("content3")
})


spaces.addEventListener('mousemove',function(){
  content5.classList.add("chat4");
})
spaces.addEventListener('mouseleave',function(){
  content5.classList.remove("chat4");
})


//spaces end

//card mousemove,leave end



//toggle start

function menubar1(){
  var element1=document.querySelector('.content2');
  element1.classList.toggle('content4');
}

function  menubar2(){
  var element2=document.querySelector('.chat7');
  element2.classList.toggle('content4');
}


function menubar3(){
  var element3=document.querySelector('.spaces3');
  element3.classList.toggle('content4');
}


//toggle end
