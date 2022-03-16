import image from '../assets/image.png'
import navbar from '../pages/components/navbar.js'
import header from '../pages/components/header.js'

const noti1 = async () => {
  const view = `
      <div class="bg-gray-800 w-full h-full">
        <${header}/>
        <${navbar}/>
        <div>
            <h1 class="text-zinc-300 font-bold">Makise Kurisu y su opinión sobre los viajes en el tiempo<h1>
            <div><img src="${image}"/></div>
            <p class="text-zinc-200"> La conjetura de los viajes en el tiempo se representa perfectamente en la “Paradoja del abuelo”,<br>
            que viene a decir que si una persona viaja al pasado y mata a su abuelo antes de que conciba a sus hijos,<br>
            el viajero en el tiempo crea un futuro alternativo sin él ya que no será concebido en el universo en el que se encuentra en ese momento (relatividad),<br>
            o desaparece de la existencia, ya que al no ser concebido no existiría. Y si desaparece y no existe,<br>
            entonces no puede matar a su abuelo y al no matarlo,puede existir. Por lo tanto, no se puede variar la historia (inmutabilidad).</p>
        </div>
        </div>
       <footer class="bg-slate-700"> Lab 7 - Babel x Webpack</footer>
        `
  return view
}

export default noti1
