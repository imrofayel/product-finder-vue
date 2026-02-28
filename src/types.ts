export interface FilterConfig {
    field: string
    label: string
    type: 'checkbox' | 'range' | 'endurance' | 'text'
    unit?: string
}

export interface Product {
    swissbit_part_number: string
    product_series: string
    density: string
    density_class: string
    product_interface: string
    form_factor: string
    temp_grade: string
    flash_type: string
    for_new_design: string
    endurance_rnd: string | number
    seq_read_performance_mb_s: string | number
    seq_write_performance_mb_s: string | number
    rnd_read_performance_iops: string | number
    rnd_write_performance: string | number
    status_pf: string
    image: string
    [key: string]: unknown
}
