export function flatten(arr, depth = 1) {
if (!Array.isArray(arr)) throw new TypeError('Expected an array')
if (depth === Infinity) return arr.flat(Infinity)
const result = []
for (const item of arr) {
if (Array.isArray(item) && depth > 0) {
result.push(...flatten(item, depth - 1))
} else {
result.push(item)
}
}
return result
}