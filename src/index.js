import './main.css'
import HandsomeLogo from './logo.svg'

function headerParallax() {
  const header = document.createElement('header')
  const logo = document.createElement('img')
  const nav = document.createElement('nav')
  const links = ['#p1', '#p2', '#p3', '#p4']

  logo.className = 'logo'
  logo.src = HandsomeLogo
  header.appendChild(logo)

  links.forEach((href, i) => {
    const link = document.createElement('a')
    link.href = href
    link.textContent = `NAV LINK ${i+1}`
    nav.appendChild(link)
  })
  header.appendChild(nav)

  return header
}

document.body.insertAdjacentElement('afterbegin', headerParallax())
