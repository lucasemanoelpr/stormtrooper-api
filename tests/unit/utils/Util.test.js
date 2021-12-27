import util from '../../../server/utils/Util.js';
import assert from 'assert';

const cases = [
	{ expected: 6, arr: [1, 2, 3] },
	{ expected: 42, arr: [1, 5, 6, 30] },
	{ expected: 7, arr: [7, 0, 0, 0] },
	{ expected: -3, arr: [-1, -2] },
	{ expected: 0, arr: [0, undefined] },
];

describe('#arraySum', () => {
	it.each(cases)('Should sum the array %j', (test) => {
		const result = util.arraySum(test.arr);
		assert.equal(result, test.expected);
	});
});

describe('#guid', () => {
	it('Should have a valid format', () => {
		var uuid = util.guid();
		assert.ok(/^[a-z|\d]{8}-[a-z|\d]{4}-[a-z|\d]{4}-[a-z|\d]{4}-[a-z|\d]{12}$/.test(uuid));
	});

	it('Should generate uniques uuids', () => {
		var uuid1 = util.guid();
		var uuid2 = util.guid();
		assert.notEqual(uuid1, uuid2);		
	});
});

describe('#isBiggerThan', () => {
	it('Should return [3,4,5] from input [1,2,3,4,5], 3', () => {
		const result = util.isBiggerThan([1,2,3,4,5], 3);
		assert.deepEqual(result, [3,4,5]);
	});

	it('Should return [] from input [1,2,3,4,5,6], 10', () => {
		const result = util.isBiggerThan([1,2,3,4,5], 10);
		assert.deepEqual(result, []);
	});
});
