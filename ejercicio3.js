function caracteresEnComun(string1, string2) {
    const sinEspacios1 = string1.replace(/ /g, "")
    const split1 = sinEspacios1.split("")
    const rta1 = split1.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item] = obj[item] + 1
        }
        return obj
    }, {})
    const sinEspacios2 = string2.replace(/ /g, "")
    const split2 = sinEspacios2.split("")
    const rta2 = split2.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1
        } else {
            obj[item] = obj[item] + 1
        }
        return obj
    }, {})
    let result1 = Object.keys(rta1);
    let result2 = Object.keys(rta2);
    //console.log(result1)
    //console.log(result2)
    let array = []
    if (result1.length < result2.length) {
        for (let i = 0; i < result2.length; i++) {
            for (let j = 0; j < result1.length; j++) {
                if (result1[j] == result2[i]) {
                    let newArray = array.push(result1[j])
                }
            }

        }
        console.log(array)
    }
    if (result1.length > result2.length) {
        for (let i = 0; i < result1.length; i++) {
            for (let j = 0; j < result2.length; j++) {
                if (result2[j] == result1[i]) {
                    let newArray = array.push(result2[j])
                }
            }
        }
        console.log(array)
    }

}


caracteresEnComun("Hola", "Mundo"); // ["o"]
caracteresEnComun("German", "Gabriela"); // ["G", "e", "r", "a"]
caracteresEnComun("Hola", "Bye"); // []