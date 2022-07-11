function ajustarTexto(string, numero) {
    //console.log(string.length)
    let añadir = numero - string.length
        //console.log(añadir)
    if (string.length > numero) {
        let rta = string.slice(0, numero)
            //console.log(rta.length)
        return rta
    } else {
        var array = []
        for (let i = 0; i < añadir; i++) {
            let newArray = array.push(" ")
        }
        //console.log(array)
        for (var m in array) {
            string = string.concat(array[m]);
        }
        //console.log(string.length)
        return string
    }

}


console.log(ajustarTexto("", 3)) // " " 
console.log(ajustarTexto("hola", 2)) // "ho" 
console.log(ajustarTexto("Hola", 0)) // "" 
console.log(ajustarTexto("Hola", 5)) // "Hola "