const WEEKS = 4;

new Vue({
  el: "#app",
  data() {
    return {
      rules: {
        required: value => !!value || "此欄位為必填",
        idNo: value => {
          const pattern = /^[0-9]{3}$/;
          return pattern.test(value) || "請輸入三個數字";
        },
        checkboxRequired: value => !!value.length || "請至少選擇一項",
        sports: value => {
          if (
            this.input.registerExtraBonus.includes(3) &&
            this.input.registerExtraBonus.includes(4)
          ) {
            return "紙本、數位藝Fun券只能擇一選擇";
          }
          return true;
        }
      },
      weeks: 0,
      extraBonusList: [],
      input: {
        valid: false,
        idNo: "",
        startWeek: 1,
        registerExtraBonus: []
      },
      output: {
        idNo: "",
        win: []
      },
      showOutput: false,
      showDetail: false,
      detailTab: 0,
    };
  },
  mounted() {
    this.Init();
  },
  methods: {
    Init() {
      this.weeks = this.GetWeeks();
      this.extraBonusList = this.GetExtraBonusList();
    },
    GetWeeks() {
      return WEEKS;
    },
    GetExtraBonusList() {
      return EXTRA_BONUS_LIST;
    },
    CheckWin() {
      this.input.registerExtraBonus.sort();
      // 針對有幾週去運算
      for (let week = 1; week <= this.weeks; week++) {
        // 如果不再開始抽籤週次，直接回傳null並往下一週前進
        if (week < this.input.startWeek) {
          this.output.win.push(null);
          continue;
        }
        this.AWeekCheckWin(week);
      }
      this.output.idNo = this.input.idNo;
      this.showOutput = true;
    },
    AWeekCheckWin(week) {
      // 遍例各個已登記的加碼券
      for (const extraBonusIdx of this.input.registerExtraBonus) {

        // 檢查是否中籤過
        if (this.output.win.includes(extraBonusIdx)) continue;

        // 產出驗證的正則
        winNums = this.extraBonusList[extraBonusIdx].win[`w${week}`].join("|");
        regx = new RegExp(`(${winNums})$`);

        // 若中籤號碼不為空且符合正則代表中籤
        if (winNums && regx.test(this.input.idNo)) {
          // 新增進輸出
          this.output.win.push(extraBonusIdx);
          // 每週只中一籤 不會有其他的結果 直接回傳
          return;
        }
      }
      // 跑完沒回傳代表沒中籤
      this.output.win.push(null);
    },
    Reset() {
      this.ClearOutput();
      this.showOutput = false;
    },
    SelectAll() {
      let extraBonusArrayAll = Array.from(Array(this.extraBonusList.length).keys());
      this.input.registerExtraBonus = extraBonusArrayAll.filter((item) => { return ![3, 4].includes(item) });
    },
    ClearInput() {
      this.input.idNo = "";
      this.input.startWeek = 1;
      this.input.registerExtraBonus = [];
    },
    ClearOutput() {
      this.output.idNo = "";
      this.output.win = [];
    }
  },
  vuetify: new Vuetify()
});
