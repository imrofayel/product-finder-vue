<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import ProductsTable from '@/components/ProductsTable.vue'
import FilterDropdown from '@/components/FilterDropdown.vue'
import type { FilterConfig } from '@/types'

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

const products = ref<any[]>([])

onMounted(async () => {
    const res = await fetch('/api/products.json')
    const data = await res.json()
    products.value = Object.values(data.content.products)
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
            <FilterDropdown title="Series" :active-filters="0">
                <template #>
                    <div>
                        <label class="block text-sm mb-1">Your Swissbit Part Number</label>
                        <UInput placeholder="" class="w-full" />
                    </div>
                </template>
            </FilterDropdown>

            <FilterDropdown title="Series" :active-filters="2">
                <template #>
                    <div>
                        <label class="block text-sm mb-1">Your Swissbit Part Number</label>
                        <UInput placeholder="" class="w-full" />
                    </div>
                </template>
            </FilterDropdown>

            <FilterDropdown title="Series" :active-filters="2">
                <template #>
                    <div>
                        <label class="block text-sm mb-1">Your Swissbit Part Number</label>
                        <UInput placeholder="" class="w-full" />
                    </div>
                </template>
            </FilterDropdown>

            <FilterDropdown title="Series" :active-filters="2">
                <template #>
                    <div>
                        <label class="block text-sm mb-1">Your Swissbit Part Number</label>
                        <UInput placeholder="" class="w-full" />
                    </div>
                </template>
            </FilterDropdown>
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