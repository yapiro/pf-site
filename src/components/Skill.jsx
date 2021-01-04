import React from 'react';
import './Skill.css';
import Icon from './titingLIFE.jpeg';
import Icon2 from './board.png';
import Icon3 from './roulette.png';

 const Skill = (props)=>{
     return(
        <div>
            <div  className = "skill-work">
                <div className = "profile-button profile-button2">
                    <button className = "Button-pro pro2"  onClick= {()=>{props.history.push('/')}}>topページ</button>
                    <button className = "Button-pro pro2"  onClick= {()=>{props.history.push('/Profile')}}>プロフィール</button>
                    <button className = "Button-pro pro2"  ><a className = "a-link" href = 'https://twitter.com/1m8pseqcODr2idm'>積み上げ</a></button>
                    <button className = "Button-pro pro2"  onClick= {()=>{props.history.push('/Quiita')}}>Qiita(キータ)</button> 
                </div> 
                <div className = "skill-title">
                    <h1>Skill</h1>
                </div> 
                <div className="skills">
                    <div className = "coding">
                        <h1>コーディング</h1>
                        <p>基本的な操作はできます。</p>
                        <table className = "one-table">
                            <tr>
                                <td>言語</td>
                                <td>学習年数</td>
                            </tr>
                            <tr>
                                <td>HTML</td>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <td>CSS</td>
                                <td>1年</td>
                            </tr>
                        </table>
                    </div>
                    <div className = "frontend">
                        <h1>フロントエンド</h1>
                        <p>基本的な操作はできます。</p>
                        <table className = "two-table">
                            <tr>
                                <td>言語</td>
                                <td>学習年数</td>
                            </tr>
                            <tr>
                                <td>javascript</td>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <td>react</td>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <td>redux</td>
                                <td>1年</td>
                            </tr>
                            <tr>
                                <td>vue</td>
                                <td>1年</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>  
            <div className = "portfolio-title">
                <h1>Portfolio</h1>
            </div> 
            <div className = "portfolio">
                <div className = "pf1">
                    <a href = "https://yapiro.github.io/portfolio"><img className = "image-skill" src = {Icon}></img></a>
                    <p>男のロマンサイト</p>
                </div>
                <div className = "pf1">
                    <a href = "https://yapiro.github.io/tweetapp"><img className = "image-skill" src = {Icon2}></img></a>
                    <p>vue掲示板</p>
                </div>
                <div className = "pf1">
                    <a href = "https://yapiro.github.io/today-s-wisky"><img className = "image-skill" src = {Icon3}></img></a>
                    <p>ウイスキールーレット</p>
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

 export default Skill;
