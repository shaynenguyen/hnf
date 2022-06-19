<template>
    <form action="#">
        <label :data-state="state">
            <input type="text" placeholder="Search" @click="state = 'open'" @blur="state='close'"/>
            <v-icon color="rgba(255, 255, 255, 0.35)" size="28">mdi-magnify</v-icon>
        </label>
  </form>
</template>

<script>
export default {
    name: 'SearchComponent',
    data() {
        return {
            state: "close"
        }
    }
}
</script>

<style>

</style>