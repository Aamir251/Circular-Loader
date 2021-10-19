const count = document.getElementById('count'),
      button = document.getElementById('load'),
      container = document.querySelector('.container')
let i = 0;


button.addEventListener('click',()=>{
  container.classList.add('animate-svg')
  let id = setInterval(runTimer, 30)
  function runTimer(){
  if(i === 100) {
    clearInterval(id);
    container.classList.remove('animate-svg');
    i = 0;
  }
  else {
    i++;
    count.innerText = i;
  }
}
})

