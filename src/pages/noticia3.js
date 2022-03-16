import image from '../assets/hunter.png'
import navbar from '../pages/components/navbar.js'
import header from '../pages/components/header.js'

const noti3 = async () => {
  const view = `
      <div class="bg-gray-800 w-full h-full">
        <${header}/>
        <${navbar}/>
        <div>
            <h1 class="text-zinc-300 font-bold">¡Expedición al continente oscuro!<h1>
            <div><img src="${image}"/></div>
            <p class="text-zinc-200">En el capítulo 340 del manga Hunter x Hunter escrito e ilustrado por Yoshigiro Togashi, “Los Zodiacos”,<br>
             un grupo de doce cazadores, reconocidos por el entonces ex presidente de la Asociación de Cazadores, Isaac Netero,<br>
              fueron testigos del anuncio del rey de Kakin en medios televisivos sobre su intención de explorar el “Continente Oscuro”.
              <br><br>
            A través de su anuncio, da a entender que las “naciones emergentes”, como él denomina a su estado, no debían desaprovechar<br>
             la oportunidad de realizar el viaje al continente oscuro. Entonces, los Zodiacos, se cuestionan si esto en verdad es posible,<br>
              ya que todos los estados incluido Kakin, habrían suscrito un acuerdo internacional que prohíbe explorar el continente oscuro,<br>
               por la peligrosidad que representa, ya que de los 149 intentos de viajes que se registraron, sólo 28 personas de 5 viajes regresaron.
               <br><br>            
            Sobre ello, Cheadle Yorkshire, la presidenta de la Asociación de Cazadores, al momento del anuncio, señala que es posible que Kakin no esté<br>
             violando el acuerdo, recordando lo que sucedió hace treinta años, donde Kakin pasó de ser un imperio socialista a una democracia parlamentaria,<br>
              y que desde entonces se eliminaron los nombres de las familias reales de las naciones y se habría convertido en una nación totalmente nueva. </p>
        </div>
        </div>
       <footer class="bg-slate-700"> Lab 7 - Babel x Webpack</footer>
        `
  return view
}

export default noti3
