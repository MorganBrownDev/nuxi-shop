<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-bind:key="p" v-for="p in products">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // Fetch the products
    const { data: products } = await useFetch('https://fakestoreapi.com/products');

    useHead({
        title: 'NUXI Shop'
    })
</script>

<style scoped>

</style>