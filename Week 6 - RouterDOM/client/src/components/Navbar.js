import { Link } from "react-router-dom"

const Navbar = () => {
    return (  
        <nav>
          <ul>
            <li><Link to='/dog' >Dog</Link></li>
            <li><Link to='/cat' >Cat</Link></li>
            <li><Link to='/netflix' >Netflix</Link></li>
            <li><Link to='/zillow-group' >Zillow Group</Link></li>
            <li><Link to='/yahoo' >Yahoo</Link></li>
            <li><Link to='/modus-create' >Modus Create</Link></li>
            <li><Link to='/345/nhat/member'>Account</Link></li>
          </ul>
        </nav>
    )
}
 
export default Navbar;