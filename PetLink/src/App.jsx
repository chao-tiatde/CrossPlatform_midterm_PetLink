import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <div className="bigpic">
        <h1>PetLink遠端認養平台</h1>
          <h4>你出資助，我來照顧，一起給毛孩一個溫暖的家！</h4>
          <img src="./img/bigpic.jpg"></img>
        </div>
        <div className="intro1">
          <h1>我們在做什麼？</h1>
          <div className="intro1-l">
            <img src="./img/intro1.jpg"></img>
          </div>
          <div className="intro1-r">
            <h3>我們是一個遠端領養平台，讓有心卻沒時間養寵物的人，<br></br>透過每月資助，幫助毛孩找到愛與照顧。</h3>
            <h3>☆你提供資助，支持毛孩的食物、醫療、日常開銷。</h3>
            <h3>☆我們幫你找到照顧者，確保毛孩得到良好照顧。</h3>
            <h3>☆定期收到照片、影片，讓你遠端也能參與毛孩生活！</h3>
          </div>
        </div>
        <div className="intro2">
          <h1>如何運作？</h1>
          <div className="intro2-l">
            <h3>1. 挑選毛孩：瀏覽平台上的可愛毛孩，選擇你想支持的對象。</h3>
            <h3>2. 設定資助方案：決定每月的資助金額，支持牠的生活。</h3>
            <h3>3. 媒合照顧者：我們會為你媒合合適的照顧者，確保毛孩得到妥善照料。</h3>
            <h3>4. 定期更新：透過照片、影片、健康報告，讓你不錯過毛孩的成長點滴！</h3>
          </div>
          <div className="intro2-r">
            <img src="./img/intro2.jpg"></img>
          </div>
        </div>
        <div className="intro3">
          <h1>為什麼選擇我們？</h1>
          <div className="intro3-l">
            <img src="./img/intro3.jpg"></img>
          </div>
          <div className="intro3-r">
            <h3>☆遠端參與，讓愛無距離：<br></br>即使生活忙碌，也能成為毛孩的守護者。</h3>
            <h3>☆透明資助，專款專用：<br></br>每筆資助金都用在毛孩的生活與健康。</h3>
            <h3>☆定期更新，真實互動：<br></br>透過影片、照片，讓你感受毛孩的陪伴。</h3>
          </div>
        </div>
        <div className="intro4">
          <h1>立即加入，成為毛孩的遠端家人！</h1>
          <div className="pics">
            <img src="./img/intro4.jpg"></img>
            <img src="./img/intro5.jpg"></img>
            <img src="./img/intro6.jpg"></img>
            <img src="./img/intro7.jpg"></img>
            <img src="./img/intro8.jpg"></img>
            <img src="./img/intro9.jpg"></img>
          </div>
          <button className="home">前往認養！</button>
        </div>
      </div>
    </>
  )
}

export default App
