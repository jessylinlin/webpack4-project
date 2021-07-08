import './album.css'
export default () => {
    const element = document.createElement('div')
    element.contentEditable = true
    element.className = 'editor'
    element.id = 'editor'

    console.log('editor init complete~')

    return element
}