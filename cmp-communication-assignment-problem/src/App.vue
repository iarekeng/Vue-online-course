<template>
    <section>
        <header>
            <h1>Active Users</h1>
        </header>
        <user-data
            @new-user="inputNewUser">
        </user-data>
        <ul>
        <active-user
        v-for="user in users"
        :key="user.name"
        :name="user.name"
        :age="user.age">
        </active-user>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    name: "Keng",
                    age: "33"
                },
            ],
        }
    },
        methods: {
            inputNewUser(newUser) {
                this.users.push(newUser);
            }
        }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
* {
    font-family: 'Nanum Gothic', sans-serif;
}

header {
    text-align: center;
    background-color: #313941;
    color: white;
}
#app ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

#app li, #app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    padding: 1rem;
    text-align: center;
}
#app button {
    cursor: pointer;
}

</style>