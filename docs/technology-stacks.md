# :package: 技術スタック

このプロジェクトで採用している技術スタックを紹介します。

## :rocket: フロントエンド

### :fire: [Next.js](https://nextjs.org/)

サーバーサイドレンダリング (SSR) と静的サイト生成 (SSG) の両方をサポートする Next.js を使用しています。ページナビゲーションや自動コード分割などの最適化により、Web サイトのパフォーマンスが向上します。

### :atom_symbol: [React](https://react.dev/)

コンポーネントベースの UI フレームワークで、仮想 DOM を使用して効率的な再レンダリングを行います。シンプルかつ柔軟な構造により、モジュール化された UI を構築しやすく、メンテナンス性が高いです。

## :art: スタイリング

### :yarn: [PostCSS](https://postcss.org/)

CSS 処理ツールで、Tailwind CSS と併用して CSS のモジュール化や最適化を行います。プラグイン対応により、CSS の高度な機能追加も可能です。

### :nail_care: [Tailwind CSS](https://tailwindcss.com/)

ユーティリティファーストの CSS フレームワークで、迅速にカスタマイズされたスタイルを提供します。[tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)によるアニメーション効果や、[tailwind-merge](https://www.npmjs.com/package/tailwind-merge)によるクラス競合の解消により、効率的なスタイリングを実現しています。

### :jigsaw: [@radix-ui](https://www.radix-ui.com/)

アクセシブルな UI コンポーネントを提供するライブラリで、ダイアログ、ツールチップ、ナビゲーションメニューといった機能を実装しています。Radix UI により、UI の一貫性を保ちながらインターフェースを簡潔に構築できます。

### :sparkles: [shadcn/ui](https://ui.shadcn.com/)

React と Tailwind CSS に基づいた UI フレームワークで、シンプルかつ美しいコンポーネントを提供します。スタイルが事前に設定されており、オーバーライドやカスタムテーマの設定が容易で、迅速なプロトタイピングが可能です。また、アクセシビリティにも配慮されています。

## :hammer: ツール＆ユーティリティ

### :mag: [ESLint](https://eslint.org/)

静的コード解析ツールで、コード品質を保ち、エラーを早期に発見します。[eslint-config-next](https://www.npmjs.com/package/eslint-config-next)と[eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)を活用し、Next.js と Prettier の設定を統合しています。

### :blue_book: [TypeScript](https://www.typescriptlang.org/)

型安全な JavaScript のスーパーセットであり、エラーを事前に発見できるため、コードの安全性と保守性が向上します。TypeScript の補完機能と型チェックにより、開発体験も向上します。

### :link: [clsx](https://www.npmjs.com/package/clsx)

条件付きでクラス名を付与するユーティリティで、動的なスタイリングをシンプルに実装します。

### :pushpin: [class-variance-authority](https://cva.style/docs)

スタイルを柔軟に変更するためのライブラリで、ビジュアルの一貫性を保ちながら、デザインのバリエーション管理を容易にします。
