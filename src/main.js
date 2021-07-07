// // // //导入模块
// import Editor from './editor.js'
// import BG from './image/2.jpg'

// const editor = Editor()
// document.body.append(editor)

// // //接受资源模块的默认导出
// const img = new Image()
// img.src = BG
// document.body.append(img)

// console.log("webpack working!")

// //HMR
// //注册某一个模块更新后处理函数
// //路径+ 处理函数
// let lastEditor = editor
// if (module.hot) {
//     module.hot.accept('./editor', () => {
//         const value = lastEditor.innerHTML
//         document.body.removeChild(editor)
//         const newEditor = Editor()
//         newEditor.innerHTML = value
//         document.body.appendChild(newEditor)
//         lastEditor = newEditor
//     })

//     module.hot.accept('./image/1.jpg', () => {
//         img.src = BG
//     })
// }

//DefinePlugin
console.log(API_BASE_URL)

//tree-shaking
import { Button } from './components.js'
document.body.appendChild(Button())
