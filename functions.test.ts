const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('check to see if length is the same after running the function', () => {
        let arr = [1,2,3,4,5]
        let results = shuffleArray(arr)
        expect(arr.length).toBe(results.length)
    })

    

    test('return array with same items', () => {
        let arr = [1,2,3,4,5]
        let results = shuffleArray(arr)

        let myVar = true

        for(let i = 0; i < results.length; i++){
            if (arr.includes(results[i]) === false){
                myVar = false
                return
            }
        }

        expect(myVar).toBe(true)
    })
})