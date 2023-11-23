import { Link } from "react-router-dom";

function Header() {
    return (
<header>
      <h1>Worst Celebrities</h1>
      <nav>
        <ul>
          <li><Link to= "/">Home</Link></li>
          <li><Link to= "/celebrities">Celebrities</Link></li>
          <li><Link to= "/random">Random Celebrities</Link></li>
          
        
          
        </ul>
      </nav>
    </header>
    );
}

export default Header