const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () =>{
    test('Valid value', () =>{
        expect(mapArrToString([1,2,3])).toEqual(["1","2","3"]);
    })
    test('Invalid value', () =>{
        expect(mapArrToString([1,null,"3", 2 , 3, undefined])).toEqual(["1", "2", "3"]);
    })
    test('Wrong output', () =>{
        expect(mapArrToString([1,2,3])).not.toEqual(["1", "4"]);
    })
    test('Blank arr', () =>{
        expect(mapArrToString([])).toEqual([]);
    })
})