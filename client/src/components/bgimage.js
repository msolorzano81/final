import React, { Component } from 'react';
import Pic from '../images/travel1.jpg' ;
/* import Pic2 from '../images/active1.jpg' ;
import Pic3 from '../images/leisure1.jpg' ;
import Pic4 from '../images/travel2.jpg' ; */

class BackgroundImage extends Component {

    /* const images = ['../images/travel1.jpg','../images/active1.jpg','../images/leisure1.jpg','../images/travel2.jpg'];

        setInterval(function(){
        const url = images[Math.floor(Math.random() * images.length)];
        styles.backgroundImage = 'url('+url+')';  
        },5000);
    */

    render() {
        const styles = {
            backgroundImage: {
                backgroundImage: `url(${Pic})`,
                backgroundSize: "cover",
                height: "100vh"
            }
        };

        return (
            <div style={styles.backgroundImage}>
                {this.props.children}
                    
            </div>
        )
    }
}

export default BackgroundImage;