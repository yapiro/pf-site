import './Home.css';
import React from 'react';
import {withRouter} from 'react-router-dom';
const Home = (props)=>{
        return(
            <div>
            <div className="Home">
                <div className = "header">
                    <img className = "head-image"></img>
                    <p>HIDE's Portfolio</p>
                </div>
                <div className = "main">
                    <button className = "Button-container"  onClick= {()=>{props.history.push('./Profile')}}>プロフィール</button>
                    <button className = "Button-container"  onClick= {()=>{props.history.push('/Skillportfolio')}}>スキル/制作実績</button>
                    <button className = "Button-container"  ><a className = "a-link" href = 'https://twitter.com/1m8pseqcODr2idm'>積み上げ</a></button>
                    <button className = "Button-container"  onClick= {()=>{props.history.push('/Quiita')}}>Qiita(キータ)</button>
                </div>    
            </div>
             <div className = "contact"> 
             <h1>Contact</h1>
             <div className = "contact-text">
                  <p>ご連絡はTwitterのDM(ダイレクトメッセージ)からお願い致します！</p>
             </div>
             <div className = "link">
                 <a href='https://twitter.com/1m8pseqcODr2idm' target='_blank'>→こちらのリンクをクリック←</a>
                 <img className = "twitter-image"></img>
             </div>
         </div>
         </div>
        )  
 }


 export default withRouter(Home);
        

        