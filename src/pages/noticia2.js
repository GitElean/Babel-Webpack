import image from '../assets/estus.png'
import navbar from '../pages/components/navbar.js'
import header from '../pages/components/header.js'

const noti2 = async () => {
  const view = `
      <div class="bg-gray-800 w-full h-full">
        <${header}/>
        <${navbar}/>
        <div>
            <h1 class="text-zinc-300 font-bold">Escasea el estus en lordran<h1>
            <div><img src="${image}"/></div>
            <p class="text-zinc-200">Se presentá una escasez de Estus en Lordran, por lo que se preveen subidas en los precios<br>
            de suplementos básicos como las humanidades, las flechas y resinas de pino, tanto doradas como carbón. <br>
            Se cree que el mejor camino para resolver la escasez es el rito del avidado.<br>
            Este rito secreto permite reforzar las hogueras aún más con el Avivado, lo que permite recoger más Estus.<br><br>
            El Avivado era un rito sagrado transmitido entre clérigos, pero los no muertos pueden imitar el proceso, de la misma manera que pueden<br>
            recuperar su forma de Hueco con humanidad. Lo curioso es que los humanos no supieron cómo usar la humanidad hasta que se volvieron no muertos </p>
        </div>
        </div>
       <footer class="bg-slate-700"> Lab 7 - Babel x Webpack</footer>
        `
  return view
}

export default noti2
