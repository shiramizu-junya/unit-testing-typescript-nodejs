import { calculateComplexity, stringInfo, toUpperCaseWithCallback } from '../../app/doubles/OtherUtils';

describe('OtherUtils test suite', () => {
	it('Calculates complexity', () => {
		const someInfo = {
			length: 5,
			extractInfo: {
				field1: 'value1',
				field2: 'value2',
				field3: 'value3',
			},
		};

		const actual = calculateComplexity(someInfo as unknown as stringInfo);
		expect(actual).toBe(15);
	});

	it('ToUpperCase - calls callback for invalid argument', () => {
        const actual = toUpperCaseWithCallback('', () => {});
        expect(actual).toBeUndefined();
    });

    it('ToUpperCase - calls callback for valid argument', () => {
        const actual = toUpperCaseWithCallback('abc', () => {});
        expect(actual).toBe('ABC');
    });
});
