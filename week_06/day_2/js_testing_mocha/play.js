// import the test module
const assert = require('assert');

// Equal method (actual compared with expected) - these are in the opposite order of Python
// This tests using == which is not extirely accurate so use the strict equal
// assert.equal(1, '1')

// Strick equal (===) 
// assert.strictEqual(1, '1');

// Strict equal will also have its issues a s these take up different memory spaces.
// assert.strictEqual([1,2,3], [1,2,3]);

//deepEqual() but this still only uses the ==
// assert.deepEqual([1,2,3], [1,2,3])


//deepStrictEqual()
// assert.deepStrictEqual([1,2,3], [1,2,3])

// The ones to use are strictEqual and deepStrictEqual

