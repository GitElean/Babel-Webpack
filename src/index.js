import 'core-js/stable'
import Template from './templates/Template.js'
import './style.css';
// import './styles/main.css';
// import './styles/vars.styl';

(async function App () {
  const main = null || document.getElementById('main')
  main.innerHTML = await Template()
})()
