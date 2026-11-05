import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import StudentCard from "./components/StudentCard.jsx"
import './App.css'



function App() {
  const[etudiants, setEtudiants]= useState([{
  nom:"Mohamed Talel Ouertani",
  email:"talelwartani57@gmail.com",
  tel:"24484070",
  filiere:"Génie Logiciel et Systèmes d'information",
  anne:"2ème année",
  grp:"GLSI2C",
  ville:"Mahdia",
},{
  nom:"Trabelsi Sarra",
  email:"trabelsisarra57@gmail.com",
  tel:"23334070",
  filiere:"Génie Logiciel et Systèmes d'information",
  anne:"2ème année",
  grp:"GLSI2A",
  ville:"Mahdia",
},{
  nom:"Jmai Adem",
  email:"Jmaiadem57@gmail.com",
  tel:"24676767",
  filiere:"Génie Logiciel et Systèmes d'information",
  anne:"2ème année",
  grp:"GLSI2C",
  ville:"Mahdia",
}]);
function modifierEtudiant(email) {
  // nlawjou 3al étudiant bech nwarriw les valeurs el 9dom fil prompt
  const etudiant = etudiants.find((e) => e.email === email);

  // prompt() : yes2el el utilisateur
  const nouveauNom = prompt("Nouveau nom :", etudiant.nom);
  const nouveauTel = prompt("Nouveau téléphone :", etudiant.tel);
  const nouvelleVille = prompt("Nouvelle ville :", etudiant.ville);

  // ken el utilisateur 3mal Annuler → prompt yraja3 null → nwa9fou
  if (nouveauNom === null || nouveauTel === null || nouvelleVille === null) {
    return;
  }

  // trim() : yna77i el espaces, w nvérifiw eli el champ mouch fer8
  if (
    nouveauNom.trim() === "" ||
    nouveauTel.trim() === "" ||
    nouvelleVille.trim() === ""
  ) {
    alert("Les champs ne doivent pas être vides !");
    return;
  }

  // map() + condition === + spread (...)
  setEtudiants(
    etudiants.map((e) =>
      e.email === email
        ? {
            ...e, // nkaddou el anciennes propriétés
            nom: nouveauNom.trim(), // w nbaddlou ken el champs hedhom
            tel: nouveauTel.trim(),
            ville: nouvelleVille.trim(),
          }
        : e // el baqyin yabqaw kif ma houma
    )
  );
}
function supprimerEtudiant(email) {
  setEtudiants(etudiants.filter((e) => e.email !== email));
}
  function ajouterEtudiant() {
  const nouvelEtudiant = {
    nom: "Ben Salem",
    prenom: "Yassine",
    email: "yassine.bensalem@gmail.com",
    telephone: "+216 44 444 444",
    filiere: "Génie Logiciel et Systèmes d'Informa...",  // texte coupé dans l'image
    anneeEtude: "2ème année",
    groupe: "GLSI 1",
    ville: "Sfax",
    // image: SlimImage,
  };
  const existeDeja = etudiants.some(
    (e) => e.email.toLowerCase() === nouvelEtudiant.email.toLowerCase()
  );

  if (existeDeja) {
    alert("Cet étudiant existe déjà !");
    return; // on arrête la fonction, on n'ajoute pas
  };
  setEtudiants([...etudiants, nouvelEtudiant]);
}
  return (
    <><div className="actions">
        <button onClick={ajouterEtudiant}>+ Ajouter un étudiant</button>
      </div>
      <div className='container'>
        {etudiants.map((etudiant, index) => (
          <StudentCard
            key={etudiant.email}
            nom={etudiant.nom}
            email={etudiant.email}
            tel={etudiant.tel}
            filiere={etudiant.filiere}
            anne={etudiant.anne}
            grp={etudiant.grp}
            ville={etudiant.ville}
            onSupprimer={() => supprimerEtudiant(etudiant.email)}
            onModifier={modifierEtudiant}
          />
        ))}
      </div>
    </>
  )
}

export default App