import './style.css'
import setupInput from './input'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="calculator">
  <div class="input" id="input"></div>
  <div class="buttons">
    <div class="topPanel">
      <div class="operators" onClick="">
        <div class="btn">+</div>
        <div class="btn">-</div>
        <div class="btn">&times;</div>
        <div class="btn">&divide;</div>
      </div>
    </div>
    <div class="bottomPanel">
      <div class="leftPanel">
        <div class="numbers">
          <div class="btn">7</div>
          <div class="btn">8</div>
          <div class="btn">9</div>
        </div>
        <div class="numbers">
          <div class="btn">4</div>
          <div class="btn">5</div>
          <div class="btn">6</div>
        </div>
        <div class="numbers">
          <div class="btn">1</div>
          <div class="btn">2</div>
          <div class="btn">3</div>
        </div>
        <div class="numbers">
          <div class="btn">0</div>
          <div class="btn">.</div>
          <div class="btn" id="clear">C</div>
        </div>
      </div>
      <div class="rightPanel">
        <div class="equal btn" id="result">=</div>
      </div>
    </div>
  </div>
</div>
`

setupInput(document.querySelector<HTMLDivElement>('#input')!)