module.exports = function reverse (n) {
    const y = (n.toString()).split('');
    const z = y.reverse().join('')
    
    const lastSumbol = (z) => {
    if (z[z.length -1] === '-') {return z.slice(0, z.length -1)}
    return z
    }

    return lastSumbol(z)
}
