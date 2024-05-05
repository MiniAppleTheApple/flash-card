function uniqBy<T, K>(arr: T[], f: (x: T) => K): T[] {
  return [...new Map(arr.map(x => [f(x), x])).values()]
}

function updateByIndex<T>(arr: T[], index: number, f: (element: T) => T): T[] {
  return arr.map((element, i) => i === index ? f(element) : element)
}

export { uniqBy, updateByIndex }
