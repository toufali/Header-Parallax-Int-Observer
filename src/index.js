import './main.css'
import './logo.svg'

const header = document.querySelector('header')
const sentinel = document.createElement('span')

const intOpts = {
  threshold: ((arr, i) => {
    while (i--) {
      arr[i] = i / 100
    }
    return arr
  })([], 100)
}

const render = function(){
  header.style.transform = `translateY(${-window.scrollY * .5}px)`
}

const intObs = new IntersectionObserver(render, intOpts);

sentinel.className = 'sentinel'
sentinel.style = `position: absolute; top: 0; width: 1px; height: ${header.clientHeight}px`
document.body.appendChild(sentinel)
intObs.observe(sentinel);
