const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },
    watch: {
        counter(value) {
            if(value != 0) {
                const that = this;
                setTimeout(function() {
                    that.counter = 0
                }, 5000);
            }
        }
    },
    computed: {
        results() {
            if (this.counter < 37) {
                return "Not there yet"
            } else if (this.counter > 37) {
                return "Too much"
            }
        }
    },
    methods: {
        addFive() {
            this.counter = this.counter + 5;
        },
        addOne() {
            this.counter = this.counter + 1;
        }
    }
})

app.mount('#assignment')