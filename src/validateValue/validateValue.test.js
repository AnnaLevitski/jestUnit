const validateValue = require('./validateValue');

describe('validateValue', () =>{
        test('valid data mid', () =>{
            expect(validateValue(50)).toBe(true);
        })
        test('valid data bottom border', () =>{
            expect(validateValue(0)).toBe(true);
        })
        test('valid data top border', () =>{
            expect(validateValue(100)).toBe(true);
        })
        test('Less than valid data', () =>{
            expect(validateValue(-1)).toBe(false);
        })
        test('More than valid data', () =>{
            expect(validateValue(101)).toBe(false);
        })
})