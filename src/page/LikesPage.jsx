import {useState} from 'react'
function LikesPage () {

    // je veux un compteur qui montre le nombre de likes déclenchés suite au clik sur un bouton
    // Je mets en place une fonction Hook, "useState"  qui va enregistrer le nombre de clic dans une variable d'état "likes"
    // et qui va relancer le composant "LikesPage" sans perdre la donnée des précédents clics. 
    // Au premier chargement, la variable "likes" prendra la valeur 0.
    // Au click la fonction eventListener "onClick" est activée et lance  handleLikeClick qui prends alors la valeur de setLikes
    // c'est à dire le nombre de likes "likes" + 1.
    const [likes, setLikes] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false)
    
    const handleLikeClick = () => {
        if (likes < 5)  {
            setLikes(likes +1);
        } else {
            setDisplayMessage(true)
        }
    };

    const handleCloseMessage = () => {
        setDisplayMessage(false)
    }

    return (
            <main>
                <button onClick={handleLikeClick}>Like</button>
                {/* Chaque clic sur le bouton sera ajouté dasn le paragraphe ci-dessous */}
                <p>vous avez liké {likes} fois</p>
                {likes ==5 && (
                    <p>Tu ne peux pas liké plus de 5 fois.</p>
                )}

                
            </main>
    )
}
export default LikesPage;