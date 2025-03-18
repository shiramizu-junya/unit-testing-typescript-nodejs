import {
	calculateComplexity,
	OtherStringUtils,
	stringInfo,
	toUpperCaseWithCallback,
} from '../../app/doubles/OtherUtils';

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

	describe('Tracking callbacks', () => {
		let callBackArgs: string[] = [];
		let timesCalled = 0;

		const callBackMock = (arg: string) => {
			callBackArgs.push(arg);
			timesCalled++;
		};

		afterEach(() => {
			callBackArgs = [];
			timesCalled = 0;
		});

		it('calls callback for invalid argument - track calls', () => {
			const actual = toUpperCaseWithCallback('', callBackMock);
			expect(actual).toBeUndefined();
			expect(callBackArgs).toContain('Argument is empty');
			expect(timesCalled).toBe(1);
		});

		it('calls callback for valid argument - track calls', () => {
			const actual = toUpperCaseWithCallback('abc', callBackMock);
			expect(actual).toBe('ABC');
			expect(callBackArgs).toContain('called function with abc');
			expect(timesCalled).toBe(1);
		});
	});

	describe('Tracking callbacks with jest mocks', () => {
		const callBackMock = jest.fn();

		afterEach(() => {
			jest.clearAllMocks();
		});

		it('calls callback for invalid argument - track calls', () => {
			const actual = toUpperCaseWithCallback('', callBackMock);
			expect(actual).toBeUndefined();
			expect(callBackMock).toHaveBeenCalledWith('Argument is empty');
			expect(callBackMock).toHaveBeenCalledTimes(1);
		});

		it('calls callback for valid argument - track calls', () => {
			const actual = toUpperCaseWithCallback('abc', callBackMock);
			expect(actual).toBe('ABC');
			expect(callBackMock).toHaveBeenCalledWith('called function with abc');
			expect(callBackMock).toHaveBeenCalledTimes(1);
		});
	});

	describe('OtherStringUtils test with spies', () => {
		let sut: OtherStringUtils;

		beforeEach(() => {
			sut = new OtherStringUtils();
		});

		test('Use a spy to track calls', () => {
			const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
			const result = sut.toUpperCase('abc');
			expect(result).toBe('ABC');
			expect(toUpperCaseSpy).toHaveBeenCalledWith('abc');
			expect(toUpperCaseSpy).toHaveBeenCalledTimes(1);
		});

		test('Use a spy to track calls other module', () => {
			const consoleLogSpy = jest.spyOn(console, 'log');
			sut.logString('abc');
			expect(consoleLogSpy).toHaveBeenCalledWith('abc');
			expect(consoleLogSpy).toHaveBeenCalledTimes(1);
		});

		test('Use a spy replace the implementation of a method', () => {
			jest.spyOn(sut as any, 'callExternalService').mockImplementation(() => {
				console.log('calling mocked implementation');
			});
			(sut as any).callExternalService();
		});
	});
});
