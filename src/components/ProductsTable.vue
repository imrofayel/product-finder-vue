<script setup lang="ts">

defineProps<{
    products: any[]
}>()

</script>

<template>
    <table class="mt-6 w-full">
        <thead>
            <tr>
                <th></th>
                <th>Part Number</th>
                <th>Product Series</th>
                <th>Product Interface</th>
                <th>Temp. Grade</th>
                <th>New Design</th>
                <th>SRP MB/s</th>
                <th>SRP IOPS</th>
                <th>Status</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th>Density</th>
                <th>Form Factor</th>
                <th>Flash Type</th>
                <th>Endurance</th>
                <th>SWP MB/s</th>
                <th>RWP IOPS</th>
                <th>Online Availability</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.swissbit_part_number">
                <td class="flex items-center gap-1">
                    <input type="checkbox" />
                    <img v-if="product.image" :src="product.image" width="100" />
                </td>
                <td>{{ product.swissbit_part_number }}</td>
                <td>
                    {{ product.product_series }}<br />
                    {{ product.density }}
                </td>
                <td>
                    {{ product.product_interface }}<br />
                    {{ product.form_factor }}
                </td>
                <td>
                    {{ product.temp_grade }}<br />
                    {{ product.flash_type }}
                </td>
                <td>
                    {{ product.for_new_design }}<br />
                    <span v-if="product.endurance_rnd">
                        <span v-for="n in Number(product.endurance_rnd)" :key="n">●</span>
                    </span>
                </td>
                <td>
                    {{ product.seq_read_performance_mb_s }} MB/s<br />
                    {{ product.seq_write_performance_mb_s }} MB/s
                </td>
                <td>
                    {{ product.rnd_read_performance_iops }} IOPS<br />
                    {{ product.rnd_write_performance }} IOPS
                </td>
                <td>
                    {{ product.status_pf }}<br />
                    n/a
                </td>
            </tr>
        </tbody>
    </table>
</template>