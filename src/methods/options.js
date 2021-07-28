// 這裡的函式我統一做全域使用

// 做數字千分位逗號的
export function currency(num) {
    return num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 做UUID
export function date(time) {
    const localDate = new Date(tiem*1000)
    return localDate.toLocaleDateString()
}