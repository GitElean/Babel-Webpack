import image from '../assets/image.png'
import navbar from '../pages/components/navbar.js'
import header from '../pages/components/header.js'

const noti1 = () => {
  const view = `
        <${header}/>
        <${navbar}/>
        <div>
            <h1><h1>
            <div><img src="${image}"/></div>
        </div>
        `
  return view
}

export default noti1
