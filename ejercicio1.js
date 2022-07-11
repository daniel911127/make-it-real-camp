function numDuplicados(palabra) {
    const split = palabra.split("")
        //console.log(split)
    let array = []
    let suma = 0
    for (let i = 0; i < split.length; i++) {
        for (let j = 0; j < i; j++) {
            if (split[i] == split[j]) {
                let newArray = array.push(split[i])
            }
        }
    }
    const rta = array.reduce((obj, item) => {
            if (!obj[item]) {
                obj[item] = 1
            } else {
                obj[item] = obj[item] + 1
            }
            return obj
        }, {})
        //console.log(rta)
    const result = Object.values(rta);
    return (result.length)
}

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0