import aa from "../assets/aa.jpeg";
import { useState } from 'react';
function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);
  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }
  function contacter() {
    const email = props.email;
    alert(`Contacter ${props.nom} à l'adresse : ${email}`);
    return;
  }
  function supprimer() {
  if (window.confirm(`Supprimer ${props.nom} ?`)) {
    props.onSupprimer();
  }
}
  return (
  <div className='card'>
    <img src={aa} />
    <h1>Fiche étudiant</h1>

    <p className='lab99' >Nom & Prénom : {props.nom}</p>
    {coordonneesVisibles && (
  <div>
    <p className='lab99' >Email :{props.email}</p>
    <p className='lab99' >Téléphone :{props.tel}</p>
    </div>
)}
    <p className='lab99' >Filière :{props.filiere}</p>
    <p className='lab99' >Année d'étude : {props.anne}</p>
    <p className='lab99' >Groupe :{props.grp}</p>
    <p className='lab99' >Ville :{props.ville}</p>
    <button onClick={contacter}>Contacter</button>
<button onClick={() => props.onModifier(props.email)}>Modifier</button>
<button onClick={props.onSupprimer}>Supprimer</button>
<button onClick={basculerCoordonnees}>
  {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
</button>
  </div>
  )
}
export default StudentCard