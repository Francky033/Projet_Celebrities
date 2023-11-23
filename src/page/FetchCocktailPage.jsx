// le ".then()" permet de recuperer et gerer la reponse d'une requete asynchrone
import { useState } from "react";

function CocktailsPage() {
  const [cocktails, setCocktails] = useState(null) // "useState" permet de dynamiser une valeur(nom,valeurs,couleur..), donc de la rendre evolutif 
  if (!cocktails) {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => {
      return response.json(); // convertit la reponse en JSON
    })
    .then((json) => {
      setCocktails(json);  // affiche le fichier JSON lisible par les utilisateurs
    });
  }


  return <main>{cocktails ? <article>cocktails prêts</article> : <p>Cocktails en cour</p> }</main>  // le "?" permet de faire une condition en une seule ligne, en renvoyant une valeur si la condition est vraie, et une autre si elle est fausse
}
export default CocktailsPage;