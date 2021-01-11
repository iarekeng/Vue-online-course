const app = Vue.createApp({
    data() {
        return {
            text: "",
            isVisible: true,
            color: ""
        }
    },
    computed: {
        paraClasses() {
            user1: this.text === 'user1',
            user2: this.text === 'user2',
            visible: this.isVisible,
            hidden: !this.isVisible
        }
    },
    methods: {
        toggleParagraph() {
           this.isVisible = !this.isVisible;
        }
    }
})

app.mount('#assignment');