const Menu = () => {
    return (  
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">PMS</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
 
export default Menu;
