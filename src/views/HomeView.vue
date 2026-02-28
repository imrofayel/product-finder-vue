<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import FilterDropdown from '@/components/FilterDropdown.vue';
import type { FilterConfig } from '@/types';

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

</template>