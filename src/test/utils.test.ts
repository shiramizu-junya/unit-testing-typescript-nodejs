import { getStringInfo, StringUtils, toUpperCase } from '../app/utils';

describe('utilsのテスト', () => {
	describe('StringUtils tests', () => {

        let sut: StringUtils;

		beforeEach(() => {
            sut = new StringUtils();
        });

		test('Should return correct upperCase', () => {
			const actual = sut.toUpperCase('abc');
			expect(actual).toBe('ABC');
		});

        test('Should throw error on invalid argument - arrow func', () => {
			expect(() => sut.toUpperCase('')).toThrow();
		});

        test('Should throw error on invalid argument - try catch block', () => {
            try {
                sut.toUpperCase('');
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'arg is required');
            }
		});
	});

	test('toUpperCaseメソッドを実行すると、大文字で返ってくること', () => {
		// arrange: 準備
		const suite = toUpperCase;
		const expected = 'ABC';

		// actual: 実行
		const actual = suite('abc');

		// assert: 検証
		expect(actual).toBe('ABC');
	});

	test.each([
		{ input: 'abc', expected: 'ABC' },
		{ input: 'My-string', expected: 'MY-STRING' },
		{ input: 'ghi', expected: 'GHI' },
	])('$input → $expected に変換されること', ({ input, expected }) => {
		const actual = toUpperCase(input);
		expect(actual).toBe(expected);
	});

	test('getStringInfoメソッドを実行すると、lowerCaseプロパティが小文字で返ってくること', () => {
		const actual = getStringInfo('My-String');
		// プリミティブ型の検証
		expect(actual.lowerCase).toBe('my-string');
	});

	test('getStringInfoメソッドを実行すると、lowerCaseプロパティが小文字で返ってくること', () => {
		const actual = getStringInfo('My-String');
		// プリミティブ型の検証
		expect(actual.lowerCase).toBe('my-string');
	});

	test('getStringInfoメソッドを実行すると、upperCaseプロパティが大文字で返ってくること', () => {
		const actual = getStringInfo('My-String');
		expect(actual.upperCase).toBe('MY-STRING');
	});

	test('getStringInfoメソッドを実行すると、charactersプロパティが配列で返ってくること', () => {
		const actual = getStringInfo('My-String');
		expect(actual.characters).toHaveLength(9);
		expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g']);

		// expect(actual.characters.length).toBe(9);
		// expect(actual.characters).toContain('M');
		// expect(actual.characters).toEqual(
		// 	expect.arrayContaining(['S', 't', 'r', 'i', 'n', 'g', 'M', 'y', '-'])
		// );
	});

	test('getStringInfoメソッドを実行すると、lengthプロパティが文字数で返ってくること', () => {
		const actual = getStringInfo('My-String');
		expect(actual.length).toBe(9);
	});

	test('getStringInfoメソッドを実行すると、extractInfoプロパティがオブジェクトで返ってくること', () => {
		const actual = getStringInfo('My-String');
		expect(actual.extractInfo).toEqual({});
		// expect(actual.extractInfo).toStrictEqual({});
		// expect(actual.extractInfo).not.toBe(undefined);
		// expect(actual.extractInfo).toBeDefined();
		// expect(actual.extractInfo).toBeTruthy();
	});
});
