const square = require('./square');

describe('square', () =>{
    let mockValue;
    
    test('Valid data', () =>{
        expect(square(2)).toBe(4);
        expect(square(0)).toBe(0);
        expect(square(-1)).toBe(1);
        expect(square(2)).toBeGreaterThan(3);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).not.toBeUndefined();
    })
    test('Invalid data', () =>{
        expect(square("4")).toBe(16);
        expect(square("4G")).toBe(NaN);
        expect(square([2])).toBe(4);
        expect(square([2, 2])).toBe(NaN);
    })
    test('mockSpyOnWithPow', () =>{
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(2);
        expect(spyMathPow).toBeCalledTimes(1);
    })
    test('mockSpyOn', () =>{
        const spyMathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(spyMathPow).toBeCalledTimes(0);
    })

    
    afterEach(() =>{
        jest.clearAllMocks();
    })
})