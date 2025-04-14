import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <div class="detail-top">
          <div className="detail-img">
            <img src="./img/intro1.png"></img>
          </div>
          <div className="detail-c">
            <h1 className="detail-c-name">柯柯</h1>
            <h3 className="detail-c-key">台北大安 | 友善、親近人</h3>

            <div class="card">
              <div class="section-title">基本資料</div>
              <div class="info-grid">
                <div class="label">品種</div><div class="value">柯基</div>
                <div class="label">性別</div><div class="value">雌</div>

                <div class="label">年齡</div><div class="value">三至七歲</div>
                <div class="label">體型</div><div class="value">中型</div>

                <div class="label">毛色</div><div class="value">黃白</div>
                <div class="label">健康狀況</div><div class="value">正常</div>
              </div>

              <div class="section-title">領養需求(每月)</div>
              <div class="info-grid">
                <div class="label">食物</div><div class="value">$2000</div>
                <div class="label">生活用品</div><div class="value">$2000</div>
                <div class="label">醫療</div><div class="value">$2000</div>
                <div class="label">娛樂訓練</div><div class="value">$2000</div>
              </div>

              <div class="btn-group">
                <button class="btn btn-secondary">加入收藏清單</button>
                <button class="btn btn-primary">直接認養</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default App