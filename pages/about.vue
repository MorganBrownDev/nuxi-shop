<template>
    <div>
        <h2>About | {{ data }}</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Fugiat voluptatibus iste id molestias officiis in beatae vero temporibus, quasi vitae.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Fugiat voluptatibus iste id molestias officiis in beatae vero temporibus, quasi vitae.</p>
    </div>
</template>

<script setup>

// Fetch the Endpoint
const { data } = await useFetch('/api/currency/AUD');
</script>

<style scoped>
body {
    font-family: 'Courier New', Courier, monospace;
}
h2 {
    margin-bottom: 25px;
    font-size: 3rem;
    font-weight: 600;
}
p {
    font-size: 1,5rem;
}
</style>