const app = Vue.createApp({
    data() {
        return {
            name: "Keng",
            age: 33,
            imgLink: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" 
        }
    },
    methods: {
        faveNum() {
            const randomNumber = Math.floor(Math.random() * 2);
            return randomNumber
        },
        calculateAge() {
            return this.age + 5
        }
    }
})

app.mount('#assignment');