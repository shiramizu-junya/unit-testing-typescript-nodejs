import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	/*
    ・TypeScriptファイルをJestが理解できるJavaScriptに変換する
    ・TypeScriptの型チェックをテスト実行時に行える
    ・JestをTypeScriptプロジェクトで使用するための橋渡し役
    ・Jestは「テストを実行するエンジン」で、ts-jestは「そのエンジンがTypeScriptを理解できるようにするアダプター」です。
  */
	preset: 'ts-jest',
	// テストの実行環境としてNode.jsを使用します。代替としてはブラウザライクな環境（jsdom）などがあります。
	testEnvironment: 'node',
	// テスト実行時に詳細な出力を有効にします。各テストの結果や実行状況が詳しく表示されます。
	verbose: true,
	collectCoverage: true,
	collectCoverageFrom:[
		'<rootDir>/src/app/**/*.ts',
	]
};

export default config;
