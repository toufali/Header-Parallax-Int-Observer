import './main.css'

const header = document.querySelector('header')
const sentinel = document.createElement('span')

const render = function(){
  header.style.transform = `translateY(${-window.scrollY * .5}px)`
}

const thresholdArr = function(num){
  const arr = []
  const levels = num
  while (num--) {
    arr[num] = num / levels
  }
  return arr
}

const intersectObs = new IntersectionObserver(render, {threshold: thresholdArr(100)});

sentinel.style = `position: absolute; top: 0; width: 1px; height: ${header.clientHeight}px`
document.body.appendChild(sentinel)
intersectObs.observe(sentinel);
