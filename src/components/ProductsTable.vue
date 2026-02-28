<script setup lang="ts">
import { h, resolveComponent, useTemplateRef } from 'vue'
import type { TableColumn } from '@nuxt/ui'
import type { Product } from '@/types'

const UCheckbox = resolveComponent('UCheckbox')

defineProps<{
    products: Product[]
}>()

const table = useTemplateRef('table')

const columns: TableColumn<Product>[] = [
    {
        id: 'select',
        header: ({ table }) => h(UCheckbox, {
            'modelValue': table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected(),
            'onUpdate:modelValue': (value: boolean | 'indeterminate') => table.toggleAllPageRowsSelected(!!value),
            'aria-label': 'Select all',
            class: 'px-5',
        }),
        cell: ({ row }) => h('div', { class: 'flex items-center gap-2' }, [
            h(UCheckbox, {
                'modelValue': row.getIsSelected(),
                'onUpdate:modelValue': (value: boolean | 'indeterminate') => row.toggleSelected(!!value),
                'aria-label': 'Select row'
            }),
            row.original.image
                ? h('img', { src: row.original.image, width: 100 })
                : null
        ]),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'swissbit_part_number',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default  border-white' }, 'Part Number'),
            h('div', { class: 'pt-3' }, '\u00A0')
        ])
    },
    {
        id: 'series_density',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default border-white' }, 'Series'),
            h('div', { class: 'pt-3 px-3' }, 'Density Class')
        ]),
        cell: ({ row }) => h('div', [
            h('div', row.original.product_series || ''),
            h('div', row.original.density || '')
        ])
    },
    {
        id: 'interface_form',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default border-white' }, 'Product Interface'),
            h('div', { class: 'pt-3 px-3' }, 'Form Factor')
        ]),
        cell: ({ row }) => h('div', [
            h('div', row.original.product_interface || ''),
            h('div', row.original.form_factor || '')
        ])
    },
    {
        id: 'temp_flash',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default border-white' }, 'Temp. Grade'),
            h('div', { class: 'pt-3 px-3' }, 'Flash Type')
        ]),
        cell: ({ row }) => h('div', [
            h('div', row.original.temp_grade || ''),
            h('div', row.original.flash_type || '')
        ])
    },
    {
        id: 'design_endurance',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default border-white' }, 'New Design'),
            h('div', { class: 'pt-3 px-3' }, 'Endurance')
        ]),
        cell: ({ row }) => {
            const endurance = Number(row.original.endurance_rnd)
            return h('div', [
                h('div', row.original.for_new_design || ''),
                h('div', endurance ? '●'.repeat(endurance) : '')
            ])
        }
    },
    {
        id: 'seq_perf',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default border-white' }, 'SRP MB/s'),
            h('div', { class: 'pt-3 px-3' }, 'SWP MB/s')
        ]),
        cell: ({ row }) => h('div', [
            h('div', String(row.original.seq_read_performance_mb_s ?? '')),
            h('div', String(row.original.seq_write_performance_mb_s ?? ''))
        ])
    },
    {
        id: 'rnd_perf',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default border-white' }, 'RRP IOPS'),
            h('div', { class: 'pt-3 px-3' }, 'RWP IOPS')
        ]),
        cell: ({ row }) => h('div', [
            h('div', String(row.original.rnd_read_performance_iops ?? '')),
            h('div', String(row.original.rnd_write_performance ?? ''))
        ])
    },
    {
        id: 'status_avail',
        header: () => h('div', { class: 'flex flex-col' }, [
            h('div', { class: 'pb-3 px-3 border-b-4 dark:border-default border-white' }, 'Status'),
            h('div', { class: 'pt-3 px-3' }, 'Availability')
        ]),
        cell: ({ row }) => h('div', [
            h('div', row.original.status_pf || ''),
            h('div', 'n/a')
        ])
    }
]
</script>

<template>
    <UTable ref="table" :data="products" :columns="columns" :sticky="true" class="flex-1 max-h-[calc(100vh-320px)]" :ui="{
        base: 'min-w-full rounded-lg border-separate border-spacing-0',
        th: 'bg-neutral-100/80 dark:border-default dark:bg-black/50 px-0 py-3 text-[16.5px] text-left font-medium border-r-4 text-black/85 dark:text-white/90 border-white last:border-r-0',
        thead: 'sticky top-0 z-10',
        td: 'px-4 py-4 text-[16px] border-r-2 border-white dark:border-default last:border-r-0 dark:text-white/90 text-black/90',
        tr: 'border-b-2 border-white dark:border-default',
        tbody: '[&>tr]:border-b-2 dark:border-default [&>tr]:border-white'
    }" />
</template>