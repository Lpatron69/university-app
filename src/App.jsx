import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import aa from './assets/aa.jpeg'
import './App.css'
const etudiant ={
  nom:"Mohamed Talel Ouertani",email:"talelwartani57@gmail.com",tel:"24484070",filiere:"Génie Logiciel et Systèmes d'information",anne:"2ème année",grp:"GLSI2C",ville:"Mahdia"
  
}
function App() {
  const [count, setCount] = useState(0)

  return (
  <div id='div1'>
    <img src={aa} alt="" />
    <h1>Fiche étudiant</h1>
    <label className='lab99' >Nom & Prénom :</label><label>{etudiant.nom}</label><br />
    <label className='lab99' >Email :</label><label>{etudiant.email}</label><br />
    <label className='lab99' >Téléphone :</label><label>{etudiant.tel}</label><br />
    <label className='lab99' >Filière :</label><label>{etudiant.filiere}</label><br />
    <label className='lab99' >Année d'étude :</label><label>{etudiant.anne}</label><br />
    <label className='lab99' >Groupe :</label><label>{etudiant.grp}</label><br />
    <label className='lab99' >Ville :</label><label>{etudiant.ville}</label><br />
    <button>Contacter</button>
  </div>
  )
}

export default App
