import fetchApi from './fetch.js'
import './global.css'

//private
import './index.css'
const mainEle = document.querySelector('.main')
fetchApi('/posts').then(data => {
    data.forEach(item => {
        const artical = document.createElement('article')
        artical.className = 'artical'

        const h2 = document.createElement('h2')
        h2.contentText = item.title
        artical.append(h2)

        const p = document.createElement('p')
        p.contentText = item.paragraph
        artical.append(h2)

        mainEle.append(artical)
    })
})