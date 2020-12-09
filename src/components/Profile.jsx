import React from 'react';
import './Profile.css';
import Icon from './IMG_2489.png';

function Profile(props){ 
    return(
        <div>
            <div className = "profile">
                <div className = "profile-button">
                    <button className = "Button-pro"  onClick= {()=>{props.history.push('/')}}>topページ</button>
                    <button className = "Button-pro"  onClick= {()=>{props.history.push('/Skillportfolio')}}>スキル/制作実績</button>
                    <button className = "Button-pro"  ><a className = "a-link" href = 'https://twitter.com/1m8pseqcODr2idm'>積み上げ</a></button>
                    <button className = "Button-pro"  onClick= {()=>{props.history.push('/Quiita')}}>Qiita(キータ)</button>
        　　　　　</div>  
                <h1>Profile</h1>
                <img className = "image" src = {Icon}></img>
                <div className = "text">
                    <ul>
                        <li>名前:八代　秀明</li>
                        <li>生年月日:1996年12月12日</li>
                        <li>出身:千葉県（現在は神奈川県）</li>
                        <li>学歴:明治大学法学部</li>
                        <li>経歴:2019年4月に大学を卒業後、都内区役所に勤務中</li>
                        <li>継続していること:サウナ・筋トレ・自炊</li>
                        <li>好きなこと：ウイスキーを飲むこと</li>
                    </ul>
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
    );
}
    

export default Profile;