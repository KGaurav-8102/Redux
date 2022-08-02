import { isEven } from './math';

describe(isEven, () => {
    it("isEven should be true if it gives an even", () => {
        //Function under test
        const result = isEven(2);
        expect(result).toEqual(true);
    });
    
    it("isEven should be false if it gives a odd", () => {
        //Function under test
        const result = isEven(3);
        expect(result).toEqual(false);
    });
});

