<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { Product } from '@/types'
import { uniqueValues } from '@/utils/filters';

const props = defineProps<{
    field: string
    products: Product[]
    unit?: string
}>()

const modelValue = defineModel<[number, number]>()

const range = computed(() => {
    const values = uniqueValues(props.field, props.products, true).map(Number)

    if (!values.length) return { min: 0, max: 100 }
    return { min: Math.min(...values), max: Math.max(...values) }
})

const sliderValue = ref<[number, number]>([range.value.min, range.value.max])

watch(() => [range.value.min, range.value.max], ([newMin, newMax]) => {
    sliderValue.value = [newMin as number, newMax as number]
})

watch(sliderValue, (val) => {
    modelValue.value = val
}, { deep: true })
</script>

<template>
    <div class="px-1 py-3">
        <div class="flex justify-between text-[17.5px] mb-3">
            <span>{{ sliderValue[0] }} {{ unit }}</span>
            <span>{{ sliderValue[1] }} {{ unit }}</span>
        </div>
        <USlider v-model="sliderValue" :min="range.min" :max="range.max" :step="1" size="sm" />
    </div>
</template>
