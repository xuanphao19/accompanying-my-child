(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(t){if(t.ep)return;t.ep=!0;const i=l(t);fetch(t.href,i)}})();const c=["Không","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],r={AUDIO:{NEW_GAME:"./src/assets/audio/ID_NEWGAME.mp3",RIGHT:"./src/assets/audio/ID_RIGHT.mp3"},IMAGES:{BACKGROUND:"./src/assets/image/ID_IMAGE30.png",EXCELLENT:"./src/assets/image/ID_IMAGE26.png"},MESSAGES:{WRONG:"Sai rồi Pháo ơi! Pháo tính toán lại nào!",OUT_OF_RANGE:"Kết quả nằm ngoài phạm vi 10. Sẽ học sau Pháo nhé! Pháo chọn số khác đi"}},o={lastClicked:0,isSpeechEnd:!1,range:10,svgPath:"addition",calculus:null,firstNum:null,secondNum:null,result:null,audio:null,mathApp:null,firstTerm:null,secondTerm:null,resultElement:null,excellent:null,init(){if(this.audio=document.querySelector("audio"),this.mathApp=document.querySelector("#math-app"),!this.mathApp||!this.audio){console.error("Required elements not found");return}this.bindEvents()},updateDOMReferences(){this.mathApp&&(this.firstTerm=this.mathApp.querySelector(".first-term"),this.secondTerm=this.mathApp.querySelector(".second-term"),this.resultElement=this.mathApp.querySelector(".result"),this.excellent=this.mathApp.querySelector(".excellent"))},handleSpeak(e,s=null){if(!window.responsiveVoice){console.error("responsiveVoice is not available");return}(Date.now()-this.lastClicked>300||!this.isSpeechEnd)&&responsiveVoice.speak(e,"Vietnamese Female",{onstart:()=>this.isSpeechEnd=!0,onend:()=>{this.isSpeechEnd=!1,e==="Bắt đầu"&&(this.audio.setAttribute("src",r.AUDIO.NEW_GAME),this.audio.play()),s?.()}}),this.lastClicked=Date.now()},bindEvents(){document.onclick=e=>{if(!this.audio?.paused)return;const l=e.target.closest("[data-speak]")?.dataset.speak.trim();l&&(this.handleSpeak(l),this.handleMessage(l))}},handleMessage(e){switch(e){case"Không":this.handleNumberInput(0);break;case"Phạm vi 10":case"Phạm vi 20":this.range=Number(e.split(" ").pop());break;case"Phép tính Cộng":this.svgPath="addition";break;case"Phép tính Trừ":this.svgPath="subtraction";break;case"Cộng":case"Trừ":this.firstNum!==null&&(this.calculus=e);break;case"Bắt đầu":this.renderMathAppContent({range:this.range,svgPath:this.svgPath});break;case"Bằng":this.handleEquals();break;default:this.handleNumberInput(Number(e));break}},handleNumberInput(e){if(!(isNaN(e)||!this.firstTerm||!this.secondTerm||!this.resultElement)){if(this.firstNum===null?(this.firstNum=e,this.firstTerm.innerText=e):this.calculus!==null&&this.result===null&&(this.secondNum=e,this.secondTerm.innerText=e),e===this.result)this.resultElement.innerText=this.result,this.audio.setAttribute("src",r.AUDIO.RIGHT),this.audio.play(),this.excellent&&(this.excellent.classList.remove("show"),this.excellent.style.display="block",this.excellent.classList.add("show"),this.excellent.addEventListener("animationend",()=>{this.excellent.style.display="none"},{once:!0})),setTimeout(()=>{this.resetState()},5e3);else if(this.result!==null){const s=e===0?"Không":e;this.handleSpeak(`${s}`,()=>{this.handleSpeak(r.MESSAGES.WRONG)})}}},handleEquals(){this.secondNum!==null&&this.firstNum!==null&&(this.result=this.calculateResult(),this.result>10&&(this.handleSpeak(r.MESSAGES.OUT_OF_RANGE),this.result=null))},calculateResult(){return this.calculus==="Cộng"?this.firstNum+this.secondNum:this.calculus==="Trừ"?this.firstNum-this.secondNum:null},resetState(){this.calculus=null,this.firstNum=null,this.secondNum=null,this.result=null,this.resultElement&&(this.resultElement.innerText="?"),this.firstTerm&&(this.firstTerm.innerText="0"),this.secondTerm&&(this.secondTerm.innerText="0")},renderMathAppContent(e){[10,20].includes(e.range)||(e.range=10),["addition","subtraction"].includes(e.svgPath)||(e.svgPath="addition");const s=c.slice(0,e.range+1).map(n=>{const i=`./src/assets/image/ID_IMAGE-${Math.floor(Math.random()*5)+1}.png`;return`
          <div
            data-speak="${n}"
            style="background-image: url('${i}');"
            class="number md:px-4 md:py-0 px-2 md:w-[52px] w-[30px] flex justify-center md:h-[85px] h-[55px]">
            ${n==="Không"?0:n}
          </div>
        `}).join(""),l=`
      <div class="mt-3 relative w-full min-h-[max-content]">
        <img class="bgr w-full" src="${r.IMAGES.BACKGROUND}" alt="math-app-bgr" />
        <div
          class="math-app-content absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full z-50 text-xl md:text-3xl text-white font-semibold select-none">
          <div class="calculus relative flex items-center justify-center gap-2 md:gap-4">
            <img
              class="excellent absolute top-[-30px] right-0 md:text-4xl text-3xl"
              src="${r.IMAGES.EXCELLENT}"
              alt="srcset" />
            <div class="first-term md:text-4xl text-3xl">0</div>
            <div class="calculation md:text-4xl text-3xl">${e.svgPath==="addition"?"+":"-"}</div>
            <div class="second-term md:text-4xl text-3xl">0</div>
            <div class="equal md:text-4xl text-3xl">=</div>
            <div class="result md:text-4xl text-3xl">?</div>
          </div>
          <div
            class="numbers flex flex-wrap items-center justify-center text-gray-300 text-2xl md:text-4xl absolute md:bottom-[40px] bottom-[10px] md:gap-4 gap-1 w-full">
            <div class="absolute w-full md:top-[-70px] top-[-40px] flex justify-between">
              <div
                data-speak="Bảng Cộng"
                class="addition-table flex items-center justify-center text-green-800 bg-yellow-500 px-4 py-1 text-lg md:text-2xl rounded-lg cursor-pointer">
                Bảng Cộng
              </div>
              <div class="flex gap-8">
                <svg data-speak="${e.svgPath==="addition"?"Cộng":"Trừ"}" class="icon cursor-pointer" width="42" height="42">
                  <use xlink:href="#${e.svgPath}"></use>
                </svg>
                <svg data-speak="Bằng" class="icon cursor-pointer" width="42" height="42">
                  <use xlink:href="#equal"></use>
                </svg>
              </div>
              <div
                data-speak="Bảng Trừ"
                class="subtraction-table flex items-center justify-center text-green-800 bg-yellow-500 px-4 py-1 text-lg md:text-2xl rounded-lg cursor-pointer">
                Bảng Trừ
              </div>
            </div>
            ${s}
          </div>
        </div>
      </div>
    `;this.mathApp.innerHTML=l,this.updateDOMReferences()},async addNewItem(){},async restoreTab(){const s=new URLSearchParams(window.location.search).get("tab");this.currentTab=["range-ten","range-twenty"].includes(s)?s:"range-ten"},setActiveTab(e){document.querySelectorAll(".tab").forEach(l=>{l.classList.toggle("bg-blue-500",l.dataset.tab===e),l.classList.toggle("text-white",l.dataset.tab===e)})},async handleUpdateApp(e){}};document.addEventListener("DOMContentLoaded",()=>o.init());
