### 概要

本ポートフォリオサイトは、Next.js (App Router) を用いて制作しています。TypeScript + Tailwind CSS による型安全で見やすいデザイン、フォームのバリデーションや API経由のデータ送信機能などを実装しました。

---

### ディレクトリ構成（抜粋）

```
.
├── app/                    # App Router 構成のページ群
│   ├── (home)/             # トップページ
│   ├── profile/            # プロフィールページ
│   ├── works/              # 制作実績ページ
│   ├── contact/            # お問い合わせページ
│   │   ├── confirm/        # フォーム確認画面
│   │   └── complete/       # 送信完了画面
│   ├── api/                # API エンドポイント
│   │   ├── auth/           # Basic認証API
│   │   └── send/           # フォーム送信処理API
│   └── _not-found/         # 404ページ
│
├── components/             # 共通コンポーネント群
└── features/               # 各ページ固有機能

```

---

### 技術スタック

| 技術                  | 説明                         |
| ------------------- | -------------------------- |
| **Next.js**         | App Router 構成で、柔軟なページ定義    |
| **React**         | コンポーネント単位でのページ設計    |
| **TypeScript**      | 型安全な開発                   |
| **Tailwind CSS**    | ユーティリティファーストな CSS          |
| **Preline,shadcn/ui**         | UI 拡張ライブラリ |
| **Resend** | メール送信機能の管理       |
| **Zod**         | フォームバリデーション   |
| **Figma**         | ページ，UIデザイン   |

---

### お問い合わせフォームの流れ

1. `/contact` にアクセスするとフォームが表示される
2. 情報を入力して確認ボタン押下 → 確認画面 `/contact/confirm` へ遷移
3. sendAPI を通じて送信処理 → `/contact/complete` へ遷移

※ バックエンド API も App Router 配下の `/api/send` などに実装されている。

---

### デプロイと実行

```bash
# インストール
npm install

# 開発サーバ起動
npm run dev

# 本番ビルド
gighubにプッシュ&vercelにデプロイ

```
