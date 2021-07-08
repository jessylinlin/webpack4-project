import fetchApi from './fetch.js'
import './global.css'

//private
import './album.css'
const mainEle = document.querySelector('.main')
fetchApi('/posts').then(data => {
    data.forEach(item => {
        const section = document.createElement('section')
        section.className = 'albumn'

        const img = document.createElement('img')
        img.src = item.thumnailUrl
        section.append(img)

        const h2 = document.createElement('h2')
        h2.contentText = item.title
        section.append(h2)

        mainEle.append(section)
    })
})