// import post from './post/post'
// import album from './album/album'
import './album/album.css'

const render = () => {
    const hash = window.location.hash || '#post'
    const mainEle = document.querySelector('.main')
    mainEle.innerHTML = ''

    if (hash === '#post') {
        //动态导入，通过ESM提供的import()函数,返回promise ， 拿到模块对象
        import ( /* webpackChunkName: 'post' */ './post/post').then(({ default: post }) => {
            mainEle.appendChild(post())
        })
    } else {
        import ( /* webpackChunkName: 'album' */ './album/album').then(({ default: album }) => {
            mainEle.appendChild(album())
        })

    }
}

render()
window.addEventListener('hashchange', render)