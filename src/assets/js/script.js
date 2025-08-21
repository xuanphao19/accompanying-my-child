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
    OUT_OF_RANGE_10: "Kết quả nằm ngoài phạm vi 10. Sẽ học sau Pháo nhé! Pháo chọn số khác đi",
    OUT_OF_RANGE_20: "Kết quả nằm ngoài phạm vi 20. Sẽ học sau Pháo nhé! Pháo chọn số khác đi",
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
    this.calculusElement = this.mathApp.querySelector(".calculus");
    this.excellent = this.mathApp.querySelector(".excellent");
  },

  debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  },

  handleSpeak(message, callbackEnd = null) {
    if (!window.responsiveVoice) {
      console.error("responsiveVoice is not available");
      return;
    }
    message = message == 0 ? "Không" : message;
    if (Date.now() - this.lastClicked > 300 || !this.isSpeechEnd) {
      responsiveVoice.speak(message, "Vietnamese Female", {
        onstart: () => (this.isSpeechEnd = true),
        onend: () => {
          this.isSpeechEnd = false;
          if (message === "Bắt đầu") {
            this.audio.setAttribute("src", CONSTANTS.AUDIO.NEW_GAME);
            // this.audio.play();
          }
          callbackEnd instanceof Function && callbackEnd();
        },
      });
    }
    this.lastClicked = Date.now();
  },

  bindEvents() {
    document.onclick = this.debounce((e) => {
      if (!this.audio?.paused) return;

      const target = e.target.closest("[data-speak]");
      const message = target?.dataset.speak.trim();
      if (!message) return;

      this.handleSpeak(message);
      this.handleMessage(message);
    }, 500);
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
        // this.renderAdditionTable({ range: this.range, svgPath: this.svgPath });
        break;

      case "Bảng Cộng":
        this.renderAdditionTable({ range: this.range, svgPath: this.svgPath });
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
    if (isNaN(num) || !this.secondTerm || !this.firstTerm || !this.resultElement) return;

    if (this.firstNum !== null && this.calculus !== null && this.result === null) {
      this.secondNum = num;
      this.secondTerm.innerText = num;
    }

    if (this.secondNum === null) {
      this.firstNum = num;
      this.firstTerm.innerText = num;
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
      }, 3000);
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
      if (this.result > 10 && this.range === 10) {
        this.handleSpeak(CONSTANTS.MESSAGES.OUT_OF_RANGE_10);
        this.result = null;
      }
      if (this.result > 20 && this.range === 20) {
        this.handleSpeak(CONSTANTS.MESSAGES.OUT_OF_RANGE_20);
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
    this.mathApp.classList.add("math-app");

    const appContent = this.mathApp.querySelector(".math-app-content");
    const appBgr = document.querySelector(".app-bgr");
    appBgr.setAttribute("src", "./assets/image/ao-sen.png");

    if (items.range === 20) appContent.classList.add("md:bottom-16");
    let num = [];
    for (let i = 0; i < items.range + 1; i++) {
      const randomIndex = Math.floor(Math.random() * 5) + 1;
      const imagePath = `./assets/image/ID_IMAGE-${randomIndex}.png`;
      const element = `
          <div
            data-speak=${i}
            style="background-image: url('${imagePath}');"
            class="number md:px-4 md:py-0 px-1 md:w-[52px] w-[28px] flex justify-center md:h-[85px] h-[50px]">
            ${i === 0 ? "0" : `${i}`}
          </div>
        `;

      num.push(element);
    }

    const content = document.createElement("div");
    content.classList = `numbers flex items-center justify-center mt-10 ${items.range === 10 ? "md:mt-28" : "md:mt-20"} md:text-4xl text-xl gap-y-8`;
    content.innerHTML = num.join(" ");

    appContent.append(content);
    this.updateDOMReferences();
  },

  renderAdditionTable(items) {
    if (![10, 20].includes(items.range)) items.range = 10;
    if (!["addition", "subtraction"].includes(items.svgPath)) items.svgPath = "addition";
    this.mathApp.classList.add("math-app");

    const appContent = this.mathApp.querySelector(".math-app-content");
    const appBgr = document.querySelector(".app-bgr");
    appBgr.setAttribute("src", "./assets/image/addition-table.png");

    let num = [];
    for (let i = 0; i < items.range; i++) {
      const element = `
          <div
            data-speak= "3 + ${i === 0 ? "0" : `${i}`} ="
            class="number rounded-lg md:px-4 md:py-0 px-1 h-[40px] md:w-[152px] w-[128px] flex justify-center items-center text-2xl">
            3 + ${i === 0 ? "0" : `${i}`}
          </div>
        `;

      num.push(element);
    }

    const content = document.querySelector(".numbers");
    content.classList.add("gap-y-2", "flex-col", "left-4", "absolute");
    content.innerHTML = num.join(" ");

    appContent.append(content);
    this.updateDOMReferences();
    this.calculusElement.classList.add("bg-yellowgreen");
  },

  async restoreTab() {
    // const newUrl = new URL(window.location);
    // newUrl.searchParams.set("tab", this.currentTab);
    // history.pushState(null, "", newUrl);
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    this.currentTab = ["range-ten", "range-twenty"].includes(tabParam) ? tabParam : "range-ten";
  },

  setActiveTab(tabName) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => {
      tab.classList.toggle("bg-blue-500", tab.dataset.tab === tabName);
      tab.classList.toggle("text-white", tab.dataset.tab === tabName);
    });
  },
};

document.addEventListener("DOMContentLoaded", () => MathApp.init());
