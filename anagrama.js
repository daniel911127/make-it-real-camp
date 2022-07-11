var isAnagram = function(s, t) {
    const palabra1 = s.split("").sort().join("")
    const palabra2 = t.split("").sort().join("")
    console.log(palabra1, palabra2)
    if (palabra1 == palabra2) {
        return true
    } else {
        return false
    }


};
console.log(isAnagram("anagram", "nagaram"))