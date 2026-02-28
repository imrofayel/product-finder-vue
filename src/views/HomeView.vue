<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';

</script>

<template>
    <AppHeader />

    <div class="pt-14 flex flex-col gap-6 items-center">
        <h1 class="text-5xl">Find your product</h1>
        <div>
            <div class="text-xl">Use the filters and parameters to minimize the
                selection and find
                the right solution for your needs</div>
        </div>
    </div>

    <UPopover :ui="{ content: 'w-(--reka-popper-anchor-width) p-3' }">
        <UButton label="Series" variant="outline" color="neutral" class="font-normal text-lg rounded px-3 py-1" />

        <template #content>
            <div>Hello!</div>
        </template>
    </UPopover>



</template>