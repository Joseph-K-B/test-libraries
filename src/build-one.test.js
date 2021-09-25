// import num from "./build-one";
import expo from "./build-one";
describe ('expo', () =>{
    it.skip('multiplys base to power of exponent', () =>{
        let solution = expo(2, 2);
        expect(solution).toEqual(4)
    });
});