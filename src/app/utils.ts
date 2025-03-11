export class StringUtils {
    toUpperCase(arg: string) {
        if(!arg) throw new Error('arg is required');
        return toUpperCase(arg);
    }
}

export const toUpperCase = (arg: string) => arg.toUpperCase();

export type stringInfo = {
    lowerCase: string;
    upperCase: string;
    characters: string[];
    length: number;
    extractInfo: Object | undefined;
}

export const getStringInfo = (arg: string): stringInfo => {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length,
        extractInfo: {}
    }
};
