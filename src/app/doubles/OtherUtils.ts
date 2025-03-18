import { v4 } from "uuid";

export type stringInfo = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	length: number;
	extractInfo: Object | undefined;
};

export const toUpperCase = (arg: string): string => {
	return arg.toUpperCase();
};

export const toLowerCaseWithId = (arg: string): string => {
	return arg.toLowerCase() + v4();
};

export const calculateComplexity = (stringInfo: stringInfo): number => {
	return Object.keys(stringInfo.extractInfo).length * stringInfo.length;
};

type LoggerServiceCallBack = (arg: string) => void;

export const toUpperCaseWithCallback = (
	arg: string,
	callback: LoggerServiceCallBack
): string | undefined => {
	if (!arg) {
		callback('Argument is empty');
		return;
	}

	callback(`called function with ${arg}`);
	return arg.toUpperCase();
};

export class OtherStringUtils {
	private callExternalService() {
		console.log('Calling external service');
	}

	toUpperCase(arg: string): string {
		return arg.toUpperCase();
	}

	logString(arg: string) {
		console.log(arg);
	}
}
