const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '', 
      goals: []
     };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue)
    },
    removeGoal(idx) {
      // this will remove 1 item and index
      this.goals.splice(idx, 1)
    }
  }
});

app.mount('#user-goals');
