// J'importe tout les éléments qui vont apparaitre sur ma page d'accueil

import Header from "../component/Header"
import Footer from "../component/Footer"
import shittyStars from "../utils/Celebrities-utils";

// Cette constante permet de comparer plusieurs élements 

const shittyStarsSortedByDate = shittyStars.sort((star1, star2) => {
    return new Date(star1.publishedAt) - new Date(star2.publishedAt);
  });

  const lastShittyStars = shittyStarsSortedByDate.slice(-5);

  const shittyStarsPickedByTeam = shittyStarsSortedByDate.filter((star) => {
    return star.isPickedByTeam === true;
  });
  const lastShittyStarsPickedByTeam = shittyStarsPickedByTeam.slice(-3);

function HomePage() {

    // la function '.sort' permet de comparer 2 élements
    // la function '.map' permet de faire une boucle
    return (
        <>
        <Header/>
       <main>
        <section>
            <h2>Last Celebrities published</h2>
          {lastShittyStars.map((shittyStars)=>{
            return(
                <>
                <article>
                    <p>{shittyStars.name}</p>
                </article>
                </>
            )
          })}

          <h2>The 3 choises</h2>

          {lastShittyStarsPickedByTeam.map((shittyStars)=>{
            return(
                <>
                <article>
                    <p>{shittyStars.name}</p>
                </article>
                </>
            )
          })}



        </section>
       </main>
       <Footer/>
       </>
    )
}

export default HomePage