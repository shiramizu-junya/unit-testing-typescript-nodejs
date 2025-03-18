// jest.mock('../../app/doubles/OtherUtils');
jest.mock('../../app/doubles/OtherUtils', () => {
    return {
        ...jest.requireActual('../../app/doubles/OtherUtils'),
        // calculateComplexityだけモック化する。他の関数はそのまま使う。
        calculateComplexity: () => 10,
    }
});

jest.mock('uuid', () => {
    return {
        v4: () => '123',
    }
});

import * as OtherUtils from '../../app/doubles/OtherUtils';

describe('modules test', () => {
    test('calculate complexity', () => {
        const result = OtherUtils.calculateComplexity({} as any);
        expect(result).toBe(10);
    })

    test('keep other functions', () => {
        const result = OtherUtils.toUpperCase('abc');
        expect(result).toBe('ABC');
    })

    test('string with id', () => {
        const result = OtherUtils.toLowerCaseWithId('abc');
        expect(result).toBe('abc123');
    })
})
