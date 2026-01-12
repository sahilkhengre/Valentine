function startConfetti(){
  for(let i=0;i<150;i++){
    let c=document.createElement("div");
    c.style.position="fixed";
    c.style.width="8px";
    c.style.height="8px";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.left=Math.random()*100+"vw";
    c.style.top="-10px";
    c.style.animation=`fall ${Math.random()*3+2}s linear`;
    document.body.appendChild(c);
  }
}

const style=document.createElement("style");
style.innerHTML=`
@keyframes fall{
  to{transform:translateY(110vh) rotate(360deg);}
}`;
document.head.appendChild(style);
