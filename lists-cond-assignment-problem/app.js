const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredInput: '',
            isListVisible: true
        };
    },
    computed: {
        buttonCaption() {
            return this.isListVisible ? 'Hide List' : 'Show List'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredInput)
            this.enteredInput = ''
        },
        toggleTask() {
            this.isListVisible = !this.isListVisible
        }
    }
})

app.mount('#assignment')