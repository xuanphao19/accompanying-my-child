// import { app } from "../../service/appService";

// const number = [
//   "Không",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
// ];

// const MathApp = {
//   lastClicked: 0,
//   isSpeechEnd: false,
//   range: 10,
//   svgPath: "addition",
//   calculus: null,
//   firstNum: null,
//   secondNum: null,
//   result: null,

//   init() {
//     const $ = document.querySelector.bind(document);
//     const $$ = document.querySelectorAll.bind(document);
//     this.audio = $("audio");
//     this.mathApp = $("#math-app");

//     this.bindEvents();
//   },

//   async handleSpeak(message, callbackEnd = null) {
//     if (Date.now() - this.lastClicked > 300 || !this.isSpeechEnd) {
//       responsiveVoice.speak(message, "Vietnamese Female", {
//         onstart: () => (this.isSpeechEnd = true),
//         onend: () => {
//           this.isSpeechEnd = false;
//           if (message === "Bắt đầu") {
//             this.audio.setAttribute("src", "./src/assets/audio/ID_NEWGAME.mp3");
//             this.audio.play();
//           }
//           if (callbackEnd !== null && typeof callbackEnd === "function") callbackEnd();
//         },
//       });
//     }
//     this.lastClicked = Date.now();
//   },

//   bindEvents() {
//     let message = "";
//     document.onclick = (e) => {
//       if (!this.audio.paused) return;

//       const target = e.target.closest("[data-speak]");
//       message = target?.dataset.speak.trim();
//       if (!message) return;
//       message && this.handleSpeak(`${message}`);

//       switch (message) {
//         case "Không":
//           message = 0;
//           break;

//         case "Phạm vi 10":
//         case "Phạm vi 20":
//           this.range = Number(message.split(" ").pop());
//           break;

//         case "Phép tính Cộng":
//           this.svgPath = "addition";
//           break;

//         case "Phép tính Trừ":
//           this.svgPath = "subtraction";
//           break;

//         case "Cộng":
//           if (this.firstNum !== null) this.calculus = message;
//           break;

//         case "Trừ":
//           if (this.firstNum !== null) this.calculus = message;
//           break;

//         default:
//           message = message;
//           break;
//       }

//       if (message === "Bắt đầu") {
//         this.renderMathAppContent({
//           range: this.range,
//           svgPath: this.svgPath,
//         });
//       }

//       const sum = this.mathApp.querySelector(".result");

//       if (!isNaN(Number(message)) || message === 0) {
//         const firstTerm = this.mathApp.querySelector(".first-term");
//         const secondTerm = this.mathApp.querySelector(".second-term");
//         if (this.firstNum !== null && this.calculus !== null && this.result === null) {
//           this.secondNum = Number(message);
//           if (secondTerm) secondTerm.innerText = this.secondNum;
//         }

//         if (this.secondNum === null) {
//           this.firstNum = Number(message);
//           if (firstTerm) firstTerm.innerText = this.firstNum;
//         }

//         if (Number(message) === this.result) {
//           const excellent = this.mathApp.querySelector(".excellent");
//           sum.innerText = this.result;
//           this.audio.setAttribute("src", "./src/assets/audio/ID_RIGHT.mp3");
//           this.audio.play();

//           if (excellent) {
//             excellent.classList.remove("show");
//             excellent.style.display = "block";
//             excellent.classList.add("show");
//             excellent.addEventListener("animationend", () => {
//               excellent.style.display = "none";
//             });
//           }

//           setTimeout(() => {
//             this.calculus = null;
//             this.firstNum = null;
//             this.secondNum = null;
//             this.result = null;
//             sum.innerText = "?";
//             firstTerm.innerText = "0";
//             secondTerm.innerText = "0";
//           }, 5000);
//         } else if (this.result !== null) {
//           const oath = message == 0 ? "Không" : message;
//           this.handleSpeak(`${oath}`, () => {
//             this.handleSpeak(`Sai rồi Pháo ơi! Pháo tính toán lại nào!`);
//           });
//         }
//       }

//       if (message === "Bằng" && this.secondNum !== null && this.firstNum !== null) {
//         if (this.calculus === "Cộng") {
//           this.result = this.firstNum + this.secondNum;
//         } else if (this.calculus === "Trừ") {
//           this.result = this.firstNum - this.secondNum;
//         }
//         if (this.result > 10) {
//           this.handleSpeak(`Kết quả nằm ngoài phạm vi 10. Sẽ học sau Pháo nhé! Pháo chọn số khác đi`);
//           this.result = null;
//         }
//       }
//     };
//   },

//   async renderMathAppContent(items) {
//     const numberHTML = number
//       .slice(0, items.range + 1)
//       .map((num) => {
//         const randomIndex = Math.floor(Math.random() * 5) + 1;
//         const imagePath = `./src/assets/image/ID_IMAGE-${randomIndex}.png`;
//         return `
//     <div
//       data-speak="${num}"
//       style="background-image: url('${imagePath}');"
//       class="number md:px-4 md:py-0 px-2 md:w-[52px] w-[30px] flex justify-center md:h-[85px] h-[55px]">
//       ${num === "Không" ? 0 : num}
//     </div>
//   `;
//       })
//       .join("");

//     const html = `
//       <div class="mt-3 relative w-full min-h-[max-content]">
//         <img class="bgr w-full" src="./src/assets/image/ID_IMAGE30.png" alt="math-app-bgr" />

//         <div
//           class="math-app-content absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full z-50 text-xl md:text-3xl text-white font-semibold select-none">
//           <div class="calculus relative flex items-center justify-center gap-2 md:gap-4">
//             <img
//               class="excellent absolute top-[-30px] right-0 md:text-4xl text-3xl"
//               src="./src/assets/image/ID_IMAGE26.png"
//               alt="srcset" />
//             <div class="first-term md:text-4xl text-3xl">0</div>
//             <div class="calculation md:text-4xl text-3xl">${items.svgPath === "addition" ? "+" : "-"}</div>
//             <div class="second-term md:text-4xl text-3xl">0</div>
//             <div class="equal md:text-4xl text-3xl">=</div>
//             <div class="result md:text-4xl text-3xl">?</div>
//           </div>

//           <div
//             class="numbers flex flex-wrap items-center justify-center text-gray-300 text-2xl md:text-4xl absolute md:bottom-[40px] bottom-[10px] md:gap-4 gap-1 w-full">
//             <div class="absolute w-full md:top-[-70px] top-[-40px] flex justify-between">
//               <div
//                 data-speak="Bảng Cộng"
//                 class="addition-table flex items-center justify-center text-green-800 bg-yellow-500 px-4 py-1 text-lg md:text-2xl rounded-lg cursor-pointer">
//                 Bảng Cộng
//               </div>

//               <div class="flex gap-8">
//                 <svg data-speak=${items.svgPath === "addition" ? "Cộng" : "Trừ"} class="icon cursor-pointer" width="42" height="42">
//                   <use xlink:href="#${items.svgPath}"></use>
//                 </svg>

//                 <svg data-speak="Bằng" class="icon cursor-pointer" width="42" height="42">
//                   <use xlink:href="#equal"></use>
//                 </svg>
//               </div>

//               <div
//                 data-speak="Bảng Trừ"
//                 class="subtraction-table flex items-center justify-center text-green-800 bg-yellow-500 px-4 py-1 text-lg md:text-2xl rounded-lg cursor-pointer">
//                 Bảng Trừ
//               </div>
//             </div>
//             ${numberHTML}
//           </div>
//         </div>
//       </div>
//     `;

//     this.mathApp.innerHTML = html;
//   },

//   async addNewItem() {},

//   async restoreTab() {
//     const urlParams = new URLSearchParams(window.location.search);
//     const tabParam = urlParams.get("tab");
//     this.currentTab = ["range-ten", "range-twenty"].includes(tabParam) ? tabParam : "range-ten";
//   },

//   setActiveTab(tabName) {
//     this.tabs.forEach((tab) => {
//       tab.classList.toggle("bg-blue-500", tab.dataset.tab === tabName);
//       tab.classList.toggle("text-white", tab.dataset.tab === tabName);
//     });
//   },

//   async handleUpdateApp(e) {},
// };

// document.addEventListener("DOMContentLoaded", () => MathApp.init());
/*



*/

const number = [
  "Không",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

const CONSTANTS = {
  AUDIO: {
    NEW_GAME: "./assets/audio/ID_NEWGAME.mp3",
    RIGHT: "./assets/audio/ID_RIGHT.mp3",
  },
  IMAGES: {
    BACKGROUND: "./assets/image/ID_IMAGE30.png",
    EXCELLENT: "./assets/image/ID_IMAGE26.png",
  },
  MESSAGES: {
    WRONG: "Sai rồi Pháo ơi! Pháo tính toán lại nào!",
    OUT_OF_RANGE: "Kết quả nằm ngoài phạm vi 10. Sẽ học sau Pháo nhé! Pháo chọn số khác đi",
  },
};

const MathApp = {
  lastClicked: 0,
  isSpeechEnd: false,
  range: 10,
  svgPath: "addition",
  calculus: null,
  firstNum: null,
  secondNum: null,
  result: null,
  audio: null,
  mathApp: null,
  firstTerm: null,
  secondTerm: null,
  resultElement: null,
  excellent: null,

  init() {
    this.audio = document.querySelector("audio");
    this.mathApp = document.querySelector("#math-app");
    if (!this.mathApp || !this.audio) {
      console.error("Required elements not found");
      return;
    }
    this.bindEvents();
  },

  updateDOMReferences() {
    if (!this.mathApp) return;
    this.firstTerm = this.mathApp.querySelector(".first-term");
    this.secondTerm = this.mathApp.querySelector(".second-term");
    this.resultElement = this.mathApp.querySelector(".result");
    this.excellent = this.mathApp.querySelector(".excellent");
  },

  handleSpeak(message, callbackEnd = null) {
    if (!window.responsiveVoice) {
      console.error("responsiveVoice is not available");
      return;
    }
    if (Date.now() - this.lastClicked > 300 || !this.isSpeechEnd) {
      responsiveVoice.speak(message, "Vietnamese Female", {
        onstart: () => (this.isSpeechEnd = true),
        onend: () => {
          this.isSpeechEnd = false;
          if (message === "Bắt đầu") {
            this.audio.setAttribute("src", CONSTANTS.AUDIO.NEW_GAME);
            this.audio.play();
          }
          callbackEnd?.();
        },
      });
    }
    this.lastClicked = Date.now();
  },

  bindEvents() {
    document.onclick = (e) => {
      if (!this.audio?.paused) return;

      const target = e.target.closest("[data-speak]");
      const message = target?.dataset.speak.trim();
      if (!message) return;

      this.handleSpeak(message);
      this.handleMessage(message);
    };
  },

  handleMessage(message) {
    switch (message) {
      case "Không":
        this.handleNumberInput(0);
        break;

      case "Phạm vi 10":
      case "Phạm vi 20":
        this.range = Number(message.split(" ").pop());
        break;

      case "Phép tính Cộng":
        this.svgPath = "addition";
        break;
      case "Phép tính Trừ":
        this.svgPath = "subtraction";
        break;

      case "Cộng":
      case "Trừ":
        if (this.firstNum !== null) this.calculus = message;
        break;

      case "Bắt đầu":
        this.renderMathAppContent({ range: this.range, svgPath: this.svgPath });
        break;

      case "Bằng":
        this.handleEquals();
        break;
      default:
        this.handleNumberInput(Number(message));
        break;
    }
  },

  handleNumberInput(num) {
    if (isNaN(num) || !this.firstTerm || !this.secondTerm || !this.resultElement) return;

    if (this.firstNum === null) {
      this.firstNum = num;
      this.firstTerm.innerText = num;
    } else if (this.calculus !== null && this.result === null) {
      this.secondNum = num;
      this.secondTerm.innerText = num;
    }

    if (num === this.result) {
      this.resultElement.innerText = this.result;
      this.audio.setAttribute("src", CONSTANTS.AUDIO.RIGHT);
      this.audio.play();

      if (this.excellent) {
        this.excellent.classList.remove("show");
        this.excellent.style.display = "block";
        this.excellent.classList.add("show");
        this.excellent.addEventListener(
          "animationend",
          () => {
            this.excellent.style.display = "none";
          },
          { once: true },
        );
      }

      setTimeout(() => {
        this.resetState();
      }, 5000);
    } else if (this.result !== null) {
      const oath = num === 0 ? "Không" : num;
      this.handleSpeak(`${oath}`, () => {
        this.handleSpeak(CONSTANTS.MESSAGES.WRONG);
      });
    }
  },

  handleEquals() {
    if (this.secondNum !== null && this.firstNum !== null) {
      this.result = this.calculateResult();
      if (this.result > 10) {
        this.handleSpeak(CONSTANTS.MESSAGES.OUT_OF_RANGE);
        this.result = null;
      }
    }
  },

  calculateResult() {
    if (this.calculus === "Cộng") {
      return this.firstNum + this.secondNum;
    } else if (this.calculus === "Trừ") {
      return this.firstNum - this.secondNum;
    }
    return null;
  },

  resetState() {
    this.calculus = null;
    this.firstNum = null;
    this.secondNum = null;
    this.result = null;
    if (this.resultElement) this.resultElement.innerText = "?";
    if (this.firstTerm) this.firstTerm.innerText = "0";
    if (this.secondTerm) this.secondTerm.innerText = "0";
  },

  renderMathAppContent(items) {
    if (![10, 20].includes(items.range)) items.range = 10;
    if (!["addition", "subtraction"].includes(items.svgPath)) items.svgPath = "addition";

    const numberHTML = number
      .slice(0, items.range + 1)
      .map((num) => {
        const randomIndex = Math.floor(Math.random() * 5) + 1;
        const imagePath = `./assets/image/ID_IMAGE-${randomIndex}.png`;
        return `
          <div
            data-speak="${num}"
            style="background-image: url('${imagePath}');"
            class="number md:px-4 md:py-0 px-2 md:w-[52px] w-[30px] flex justify-center md:h-[85px] h-[55px]">
            ${num === "Không" ? 0 : num}
          </div>
        `;
      })
      .join("");

    const html = `
      <div class="mt-3 relative w-full min-h-[max-content]">
        <img class="bgr w-full" src="${CONSTANTS.IMAGES.BACKGROUND}" alt="math-app-bgr" />
        <div
          class="math-app-content absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full z-50 text-xl md:text-3xl text-white font-semibold select-none">
          <div class="calculus relative flex items-center justify-center gap-2 md:gap-4">
            <img
              class="excellent absolute top-[-30px] right-0 md:text-4xl text-3xl"
              src="${CONSTANTS.IMAGES.EXCELLENT}"
              alt="srcset" />
            <div class="first-term md:text-4xl text-3xl">0</div>
            <div class="calculation md:text-4xl text-3xl">${items.svgPath === "addition" ? "+" : "-"}</div>
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
                <svg data-speak="${items.svgPath === "addition" ? "Cộng" : "Trừ"}" class="icon cursor-pointer" width="42" height="42">
                  <use xlink:href="#${items.svgPath}"></use>
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
            ${numberHTML}
          </div>
        </div>
      </div>
    `;

    this.mathApp.innerHTML = html;
    this.updateDOMReferences();
  },

  async addNewItem() {
    // Placeholder for future implementation
  },

  async restoreTab() {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    this.currentTab = ["range-ten", "range-twenty"].includes(tabParam) ? tabParam : "range-ten";
  },

  setActiveTab(tabName) {
    const tabs = document.querySelectorAll(".tab"); // Giả sử có class tab
    tabs.forEach((tab) => {
      tab.classList.toggle("bg-blue-500", tab.dataset.tab === tabName);
      tab.classList.toggle("text-white", tab.dataset.tab === tabName);
    });
  },

  async handleUpdateApp(e) {
    // Placeholder for future implementation
  },
};

document.addEventListener("DOMContentLoaded", () => MathApp.init());
