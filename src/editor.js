//导出创建元素的函数
export default () => {
    const element = document.createElement('textarea')
    element.textContent = 'hello webpack'
    return element
}