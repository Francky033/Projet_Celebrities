 import shittyStars from "../utils/Celebrities-utils";
 import Header from "../component/Header";
 import Footer from "../component/Footer";
 
//Cette fonction permet de generer un élément aleatoire de mon tableaux

 function RandomCelebrities() {
    const randomIndex = (Math.random() * (shittyStars.length - 1)).toFixed(0);

    const randomCelebrity = shittyStars[randomIndex];
    return(
        <>
        <Header/>
        <section>
            <h2>{randomCelebrity.name}</h2> 
            <img src={randomCelebrity.img} alt="" />
        </section>
        <Footer/>
        </>
        
     );
}

 export default RandomCelebrities