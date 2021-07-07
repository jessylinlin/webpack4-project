// // //导入模块
import Editor from './editor.JS'
import icon from './image/2.jpg'

const editor = Editor()
document.body.append(editor)

// //接受资源模块的默认导出
const img = new Image()
img.src = icon
document.body.append(img)

console.log("webpack working!")

//HMR
//注册某一个模块更新后处理函数
//路径+ 处理函数
module.hot.accept()