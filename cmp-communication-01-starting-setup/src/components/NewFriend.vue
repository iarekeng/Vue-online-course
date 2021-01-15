<template>
    <form  v-on:submit.prevent="submitForm">
        <div>Name: <input type="text" ref="nameInput"/></div>
        <div>Phone: <input type="text" ref="phoneInput"/></div>
        <div>Email: <input type="text" ref="emailInput"/></div>
        <button>Submit</button>
    </form>
</template>

<script>
export default {
    emits: ['new-submit'],
    methods: {
        submitForm() {
            const newFriend = {
                name: this.$refs.nameInput.value,
                phone: this.$refs.phoneInput.value,
                email: this.$refs.emailInput.value,
                id: this.name,
                isFavorite: false
            }
            this.$emit('new-submit', newFriend);
        }
    }
};
</script>