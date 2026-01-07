const { sum } = require("../sum");



test("SUm fucntion to test sum of 2 numbers",()=>{
    const result =sum(2,5);

    expect(result).toBe(7);
});