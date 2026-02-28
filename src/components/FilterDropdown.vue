<script setup lang="ts">

const props = defineProps<{
    title: string;
    activeFilters: number;
}>()

</script>

<template>
    <div class="flex gap-2 items-center">
        <UPopover :content="{ sideOffset: 0, collisionPadding: 0 }"
            :ui="{ content: 'w-(--reka-popper-anchor-width) p-4 rounded-t-none! rounded border-t-0 shadow' }">

            <template #default="{ open }">
                <UButton :trailing-icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" variant="outline"
                    :color="activeFilters > 0 ? 'primary' : 'neutral'"
                    :class="['w-64 justify-between font-normal text-[18px] rounded px-3 py-1.5 active:bg-transparent focus:bg-transparent hover:bg-transparent hover:shadow', open && 'rounded-b-none!', activeFilters > 0 && 'text-default']">
                    <span class="flex items-center gap-2">
                        {{ title }}
                        <UBadge v-if="activeFilters > 0" :label="activeFilters" color="primary" size="sm"
                            variant="solid" class="rounded-full justify-center text-sm w-5.5! h-5.5" />
                    </span>
                </UButton>
            </template>

            <template #content>
                <slot name="default" />
            </template>
        </UPopover>
        <UTooltip :delay-duration="0"
            text="Directly select the Swissbit product series and then choose the density or temperature range" :ui="{
                content: 'text-[16px] w-64 h-auto py-2',
                text: 'whitespace-normal text-wrap'
            }">
            <UIcon name="i-lucide-info" class="text-[21.5px]" />
        </UTooltip>
    </div>
</template>