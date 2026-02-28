<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import FilterDropdown from '@/components/FilterDropdown.vue';

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