import { Component } from "react";
import "./Header.css";
class Header extends Component{

    render(){

        return(
        <header id="home">
        <div className="container">
                 <div className="row">
                  <div className="col-md-6">
                    <h2>Good food choices are good investments</h2>
                    <p>Transform your expanding and collapsing navbar into an offcanvas drawer with the offcanvas component. </p>
                     <button>order now</button>
                     <button> learn more</button>
                  </div>
                 <div className="col-md-6 ">
                 
                   
                  </div>
                 </div>
        </div> </header>)

    }



}

export default Header;