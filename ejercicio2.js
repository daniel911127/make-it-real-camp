function frecuencias(palabra) {
    const sinEspacios = palabra.replace(/ /g, "")
    const split = sinEspacios.split("")
        //console.log(sinEspacios)
        //console.log(split)
    const rta = split.reduce((obj, item) => {
            if (!obj[item]) {
                obj[item] = 1
            } else {
                obj[item] = obj[item] + 1
            }
            return obj
        }, {})
        //const result = Object.keys(rta);
        //console.log(result);


    return rta

}
console.log(frecuencias("hola mundo"));
console.log(frecuencias("anita lava la tina"));