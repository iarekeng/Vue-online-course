<template>
    <form v-on:submit.prevent="submitForm">
        <div>Name: <input type="text" ref="nameInput" /></div>
        <div>Age: <input type="text" ref="ageInput" /></div>
        <button>Add User</button>
    </form>
</template>

<script>
export default {
    emits: ['new-user'],
    methods: {
        submitForm() {
            const newUser = {
                name: this.$refs.nameInput.value,
                age: this.$refs.ageInput.value
            }
            this.$emit('new-user', newUser)
        }
    }
    
}
</script>