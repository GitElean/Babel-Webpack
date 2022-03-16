import image from '../assets/image.png'
import image2 from '../assets/estus.png'
import image3 from '../assets/hunter.png'
import noti1 from '../pages/noticia1'
import noti2 from '../pages/noticia2'
import noti3 from '../pages/noticia3'
import navbar from '../pages/components/navbar.js'
import header from '../pages/components/header.js'

const Template = async () => {
  const view = `
    <div class="bg-gray-800 w-full h-full">
    <${header}/>
    <div class="left-80">
      <${navbar}/>
      <div class="left-80">
        <div class="px-36 bg-slate-900 w-4/5 m-2 border-black border-2">
        <h1 class="text-zinc-300">Makise Kurisu y su investigación sobre neurotransmisores</h1>
        <img class="w-80 h-80" src="${image}"  />
          <a href="${noti1}"/>
          </a> 
        </div>
        <div class="px-36 bg-slate-900 w-4/5 m-2 border-black border-2">
        <h1 class="text-zinc-300">Escasea el estus en lordran</h1>
        <img class="w-80 h-80" src="${image2}"  />

          <a href="${noti2}">
          </a> 
        </div>
        <div class="px-36 bg-slate-900 w-4/5 m-2 border-black border-2">
        <h1 class="text-zinc-300">Expedición al continente oscuro!</h1>
        <img class="w-80 h-80" src="${image3}"  />

          <a href="${noti3}">
          </a> 
        </div>
      </div>
    </div>
    </div>
    <footer class="bg-slate-700"> Lab 7 - Babel x Webpack</footer>
  `

  return view
}

export default Template
