const app = Vue.createApp({
    data() {
        return {
            text: "",
            confirmedText: ""
        }
    },
    methods: {
        showAlert() {
            alert('You clicked this button')
        },
        setOutput1(event) {
            this.text = event.target.value
        },
        setOutput2(event) {
            this.confirmedText = event.target.value
        }
    }
})

app.mount('#assignment')