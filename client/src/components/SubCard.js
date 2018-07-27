import React from "react";
//import CSS from "./App.css";
import Bev from "../images/bev.png";
import Fashion from "../images/fashion.png";
import Food from "../images/food.png";
import Health from "../images/health.png";
import Beauty from "../images/beauty.png";
import Home from "../images/home.png";
import DIY from "../images/diy.png";

const images = {
    Food: Food,
    "Health & Wellness": Health,
    Fashion: Fashion,
    Beauty: Beauty,
    "Home & Garden": Home,
    "Crafting & DIY": DIY,
    Bevs: Bev

}

//class SubscriptionCard extends React.Component {

    //render() {
        const SubCard = props => (
            
                    <div className="box">
                        <article className="media">
                            <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={images[props.category]} />
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <strong>{props.name}</strong>
                                <br />
                                <a href={props.link}>{props.link}</a> 
                                <br />
                                <p>{props.description}</p>
                                
                                <small>{props.frequency}</small>
                                <br />
                                <small>{props.price}</small>
                            </div>
                            <nav className="level is-mobile">
                                <div className="level-left">
                            
                                <a className="level-item" aria-label="like">
                                    <span className="icon is-small">
                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                    </span>
                                </a>
                                </div>
                            </nav>
                            </div>
                        </article>
                    </div>
                    
     
  
        );

        //return 
    //}
//}

export default SubCard;
