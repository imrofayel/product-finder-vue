<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ProductsTable from '@/components/ProductsTable.vue'
import FilterDropdown from '@/components/FilterDropdown.vue'
import RangeFilter from '@/components/RangeFilter.vue'
import type { FilterConfig } from '@/types'
import { useProductsStore } from '@/stores/useProductsStore'
import { storeToRefs } from 'pinia'
import { uniqueValues } from '@/utils/filters'
import { computed } from 'vue'

const filters: FilterConfig[] = [
    { field: 'product_interface', label: 'Product Interface', type: 'checkbox' },
    { field: 'density_class', label: 'Density Class', type: 'checkbox' },
    { field: 'seq_read_performance_mb_s', label: 'Seq. Read Perf.', type: 'range', unit: 'MB/s' },
    { field: 'product_series', label: 'Product Series', type: 'checkbox' },
    { field: 'form_factor', label: 'Form Factor', type: 'checkbox' },
    { field: 'temp_grade', label: 'Temp. Grade', type: 'checkbox' },
    { field: 'seq_write_performance_mb_s', label: 'Seq. Write Perf.', type: 'range', unit: 'MB/s' },
    { field: 'swissbit_part_number', label: 'Part Number', type: 'text' },
    { field: 'flash_type', label: 'Flash Type', type: 'checkbox' },
    { field: 'endurance_rnd', label: 'Endurance', type: 'endurance' },
    { field: 'rnd_read_performance_iops', label: 'Rand. Read Perf.', type: 'range', unit: 'IOPS' },
    { field: 'for_new_design', label: 'For new design', type: 'checkbox' },
    { field: 'rnd_write_performance', label: 'Rand. Write Perf.', type: 'range', unit: 'IOPS' },
    { field: 'status_pf', label: 'Status', type: 'checkbox' },
]

const { products } = storeToRefs(useProductsStore())

const filterValues = computed(() => {
    const map: Record<string, string[]> = {}
    for (const filter of filters) {
        if (filter.type === 'checkbox' || filter.type === 'endurance') {
            map[filter.field] = uniqueValues(filter.field, products.value)
        }
    }
    return map
})

</script>

<template>
    <AppHeader />

    <div>
        <div class="pt-14 flex flex-col gap-6 items-center">
            <h1 class="text-5xl">Find your product</h1>
            <div>
                <div class="text-xl">Use the filters and parameters to minimize the
                    selection and find
                    the right solution for your needs</div>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-8 max-w-7xl mx-auto mt-8">

            <div v-for="filter in filters" :key="filter.field">
                <FilterDropdown :title="filter.label" :active-filters="0">
                    <template #default>
                        <div v-if="filter.type === 'checkbox' || filter.type === 'endurance'">
                            <div v-for="value in filterValues[filter.field]" :key="value" class="my-2.5">
                                <UCheckbox :value="value" :name="filter.field" :ui="{
                                    label: 'text-[18px] font-normal'
                                }">
                                    <template #label>
                                        <span v-if="filter.type === 'endurance'" class="flex items-center gap-2">
                                            <UIcon v-for="n in Number(value)" :key="n" name="i-lucide:battery-charging"
                                                class="size-5.5" />
                                        </span>
                                        <span v-else>{{ value }}</span>
                                    </template>
                                </UCheckbox>
                            </div>
                        </div>

                        <RangeFilter v-else-if="filter.type === 'range'" :field="filter.field" :products="products"
                            :unit="filter.unit" />
                    </template>
                </FilterDropdown>
            </div>
        </div>
    </div>

    <div class="max-w-7xl mx-auto mt-4">
        <div class="pt-4 pb-6 flex items-center justify-between">
            <span class="text-2xl">We have found {{ products.length }} items.</span>

            <div class="text-primary flex gap-6 text-[18px]">
                <UButton variant="text" class="px-0 text-lg font-medium" trailing-icon="i-lucide:filter-x" :ui="{
                    trailingIcon: 'size-5.5'
                }">Reset all
                    filters
                </UButton>

                <UButton variant="text" class="px-0 text-lg font-medium" trailing-icon="i-lucide:message-circle" :ui="{
                    trailingIcon: 'size-5.5'
                }">Send request
                </UButton>

                <UButton variant="text" class="px-0 text-lg font-medium" trailing-icon="i-lucide:share-2" :ui="{
                    trailingIcon: 'size-5.5'
                }">Share result list
                </UButton>
            </div>
        </div>
        <ProductsTable :products="products" />
    </div>

</template>