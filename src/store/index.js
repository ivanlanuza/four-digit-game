import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current_entry: [],
    answer: null,
    idcounter: 1,
    rightNumberRightPlace: 0,
    gameoverFlag: false,
    wonFlag: false,
    maxTries: 8,
    results: [],
    highScoreFlag: false,
    timerOnFlag: false,
    startTime: null,
    endTime: null,
    gameStats: {
      answerCurrent: null,
      answerHigh: null,
      timeCurrent: null,
      timeHigh: null
    }
  },
  mutations: {
    generateRandomDigit(state, generated_array) {
      state.answer = generated_array;
    },
    submitNumber(state, newGuess) {
      state.results.push(newGuess);
      state.current_entry = [];
      state.rightNumberRightPlace = newGuess.rNrP;
    },
    keypadEntry(state, payload) {
      state.current_entry.push(payload.toString());
      if (state.timerOnFlag === false) {
        state.startTime = performance.now();
        state.timerOnFlag = true;
      }
    },
    keypadDelete(state) {
      state.current_entry.pop();
    },
    resetGame(state) {
      state.current_entry = [],
        state.answer = null;
      state.idcounter = 1;
      state.results = [];
      state.rightNumberRightPlace = 0;
      state.gameoverFlag = false;
      state.wonFlag = false;
      state.startTime = null;
      state.endTime = null;
      state.timerOnFlag = false;
    },
    setGameover(state) {
      state.gameoverFlag = true;
    },
    setWonFlag(state, payload) {
      //console.log(payload);

      state.wonFlag = true;
      state.idcounter = 1;
      state.gameoverFlag = false;
      state.endTime = performance.now();
      var timeMillSec = state.endTime - state.startTime;
      state.gameStats.timeCurrent = Math.round(timeMillSec / 100) / 10;

      state.highScoreFlag = payload.highScoreFlag;

      if (state.gameStats.timeCurrent < payload.timeHigh) {
        state.gameStats.timeHigh = state.gameStats.timeCurrent;
        localStorage.setItem("timeHigh", state.gameStats.timeCurrent);
        state.highScoreFlag = true;
        //console.log(state.gameStats.timeCurrent);
      }

      state.gameStats.answerCurrent = payload.answerCurrent;
      state.gameStats.answerHigh = payload.answerHigh;
    },
    ellieMode(state) {
      state.answer = ["1", "0", "2", "3"];
    },
    showWinnerMove(state) {
      state.idcounter = 1;
      state.gameoverFlag = false;
    }
  },
  actions: {
    generateRandomDigit(state) {
      var digits = "123456789".split('');
      var first = shuffle(digits).pop();
      digits.push('0');
      var randomDigits = parseInt(first + shuffle(digits).join('').substring(0, 3), 10);
      var generated_array = randomDigits.toString().split("");
      state.commit('generateRandomDigit', generated_array);

      function shuffle(o) {
        for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
      }

      console.log("token: " + randomDigits); //remove later
    },
    submitNumber(state) {
      var counter = 0;
      var rightNumberRightPlace = 0;
      var rightNumberWrongPlace = 0;
      var checkArray = this.state.current_entry; //submitted number
      var tempArray = this.state.answer; //system generated number

      while (counter < 4) {
        var a = tempArray.indexOf(checkArray[counter]);

        if (a >= 0) {
          if (counter == a) {
            rightNumberRightPlace++;
          }
          else {
            rightNumberWrongPlace++;
          }
        }
        counter++;
      }

      let newGuess = {
        id: this.state.idcounter++,
        guess: this.state.current_entry.join(""),
        rNrP: rightNumberRightPlace,
        rNwP: rightNumberWrongPlace
      }
      state.commit('submitNumber', newGuess);

      if (this.state.idcounter > this.state.maxTries) {
        state.commit('setGameover');
      }
    },
    keypadEntry(state, payload) {
      state.commit('keypadEntry', payload);
    },
    resetGame(state) {
      state.commit('resetGame');
      state.dispatch('generateRandomDigit');
    },
    setWonFlag(state) {
      var highScoreFlag = false;
      if (!localStorage.getItem('answerHigh')) {
        localStorage.setItem("answerHigh", 9); //default for first use
      }
      if (!localStorage.getItem('timeHigh')) {
        localStorage.setItem("timeHigh", 100); //default for first use
      }

      var answerCurrent = this.state.idcounter - 1;
      var answerPrevHigh = localStorage.getItem('answerHigh');
      if (answerPrevHigh > answerCurrent) {
        localStorage.setItem("answerHigh", answerCurrent);
        highScoreFlag = true;
      }

      let payload = {
        answerCurrent: answerCurrent,
        answerHigh: localStorage.getItem('answerHigh'),
        timeHigh: localStorage.getItem('timeHigh'),
        highScoreFlag: highScoreFlag
      }
      state.commit('setWonFlag', payload);
    },

  },
  getters: {
    getResults(state) {
      return state.results;
    },
    getCurrentEntry(state) {
      return state.current_entry;
    },
  },
  modules: {
  }
})
