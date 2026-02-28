import { defineStore } from "pinia"
import { ref } from "vue"

export const useProductsStore = defineStore('products', () => {

    const products = ref<any[]>([])

    async function fetchProducts() {
        const res = await fetch('/api/products.json')
        const data = await res.json()
        products.value = Object.values(data.content.products)
    }

    fetchProducts()

    return { products }
})