export function uniqueValues(field: string, products: any[], numeric: boolean = false) {
    return [...new Set(
        products.map(p => p[field]).filter(v => v != null && v !== '' && (!numeric || !isNaN(v)))
    )].sort()
}