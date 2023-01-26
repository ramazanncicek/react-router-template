import { useEffect, useState } from 'react';
import back1 from './images/vamos-back1.jpg';
import back2 from './images/vamos-back2.jpg';
import back3 from './images/vamos-back3.jpg';
import back4 from './images/vamos-back4.jpg';
import back5 from './images/vamos-back5.jpg';

const Vamos = () => {
    const [theBackground, setBackground] = useState(back1);
    const [textColor, setTextColor] = useState('black');
    const [h2Color,setColor2] = useState('#5E1212');
    const [isActive,setActive] = useState(true);
    useEffect(()=>{
        setActive(true);
        if(isActive){
            setTimeout(() => {
                if(theBackground === back1){
                    setBackground(back2);
                    setTextColor('#F13A4B');
                    setColor2('#F13A4B');
                }
                else if(theBackground === back2){
                    setBackground(back3);
                    setTextColor('#50F8F8');
                    setColor2('#50F8F8');
                }
                else if(theBackground === back3){
                    setBackground(back4);
                    setTextColor('#9B1204');
                    setColor2('#9B1204');
                }
                else if(theBackground === back4){
                    setBackground(back5);
                    setTextColor('#F5E810');
                    setColor2('#F5E810');
                }
                else if(theBackground === back5){
                    setBackground(back1);
                    setTextColor('#F99432');
                    setColor2('#F99432');
                }
            }, 4000);
        }
        // END
        return () => {
            setActive(false);
        }
    },[theBackground])
    return ( 
        <div className="vamos" id="vamos-back" style={{backgroundImage: `url(${theBackground})`, transition: "2s",backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"auto"}}>
            <h1 style={{color: h2Color, transition: '1s'}}>Scroll down to a new world!</h1>
            <section className="amigos" >
            <h3><a href="https://www.javascript.com/" style={{color: textColor}}>JavaScript</a></h3>
            </section>
            <section className="amigos">
            <h3><a href="https://reactjs.org/" style={{color: textColor}}>React</a></h3>
            </section>
            <section className="amigos">
            <h3><a href="https://gulpjs.com/" style={{color: textColor}}>Gulp</a></h3>
            </section>
            <section className="amigos">
            <h3><a href="https://babeljs.io/" style={{color: textColor}}>Babel</a></h3>
            </section>
            <section className="amigos">
            <h3><a href="https://www.w3schools.com/html/" style={{color: textColor}}>HTML5</a></h3>
            </section>
            <section className="amigos">
            <h3><a href="https://www.w3schools.com/css/" style={{color: textColor}}>CSS3</a></h3>
            </section>
        </div>
     );
}
 
export default Vamos;