import Header from "../component/Header";
import Footer from "../component/Footer";
import shittyStars from "../utils/Celebrities-utils";
import { Link } from "react-router-dom";

// je demande a ma fonction de recuperer certains élements de mon tableaux

function Celebrities() {
    return(
        <>
        <Header/>
        <main>
          {shittyStars.map((shittyStar) => {
            return (
                <article>
                    <div><img src={shittyStar.name} alt="" /></div>
                    <h3><Link to={`/celebrities/description/${shittyStar.id}`}><img src={shittyStar.img} alt="" /></Link></h3>
                   
                    
                </article>
            )
          })
}
</main>
        <Footer/>
        </>
    );
}

export default Celebrities 