export interface FilterConfig {
    field: string
    label: string
    type: 'checkbox' | 'range' | 'endurance' | 'text'
    unit?: string
}