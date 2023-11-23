// le ".then()" permet de recuperer et gerer la reponse d'une requete asynchrone
// 

function CocktailsPage() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => {
      return response.json(); // convertit la reponse en JSON
    })
    .then((json) => {
      console.log(json);  // affiche le JSON dans la console
    });

  return <p>test</p>;
}

export default CocktailsPage;