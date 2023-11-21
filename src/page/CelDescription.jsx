// J'importe tout les éléments qui vont apparaitre sur ma page d'accueil

import Header from "../component/Header";
import Footer from "../component/Footer";
import shittyStars from "../utils/Celebrities-utils";
import { useParams } from "react-router-dom";

// cette fonction permet de recuperer une id de mon tableaux 

function CelDescription() {

    const {id} = useParams();
    const idInt = parseInt(id)

    const CelFound = shittyStars.find((star)=>{
        return star.id ===idInt
    })

    return(
        <>
        <Header/>
        <main>

          {CelFound && (

                <article>
                    <div><img src={CelFound.img} alt="" /></div>
                    <h3>{CelFound.name}</h3>
                    <p>{CelFound.bio}</p>
                    
                </article>
          
        )};  

</main>
        <Footer/>
        </>
    );
}

export default CelDescription