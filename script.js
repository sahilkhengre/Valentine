function move(btn){
  const x = Math.random()*300 - 150;
  const y = Math.random()*300 - 150;
  btn.style.transform = `translate(${x}px,${y}px)`;
}
