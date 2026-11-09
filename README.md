# portfolio-v1

個人のプロフィールや制作実績を掲載するポートフォリオサイトのフロントエンドです。

Next.jsのApp Routerを使用し、ログイン認証、制作実績の表示、お問い合わせフォームなどを実装しています。認証やお問い合わせの処理は、別リポジトリのSpring Bootバックエンドと連携します。

## 主な機能

- JWT Cookieを利用したログイン・ログアウト
- ページ再読み込み時の認証状態の復元
- 未認証ユーザーのログインページへのリダイレクト
- プロフィールの表示
- 制作実績のカード・モーダル表示
- お問い合わせ内容の入力・確認・送信
- React Hook FormとZodによるフォームバリデーション
- Zustandによる認証状態・フォーム状態の管理

## システム構成

```text
Browser
  ├─ portfolio-v1
  │    Next.js / React
  │
  └─ portfolio-v1-backend
       Spring Boot
       ├─ JWT Cookie認証
       ├─ お問い合わせ内容の保存
       └─ メール送信
```

フロントエンドは静的エクスポートでビルドされます。APIリクエストは、環境変数で指定したバックエンドへ送信します。

## ページ構成

| パス                | 内容                   | 認証 |
| ------------------- | ---------------------- | ---- |
| `/login`            | ログイン               | 不要 |
| `/`                 | ホーム                 | 必要 |
| `/profile`          | プロフィール           | 必要 |
| `/works`            | 制作実績               | 必要 |
| `/contact`          | お問い合わせ入力       | 必要 |
| `/contact/confirm`  | お問い合わせ内容の確認 | 必要 |
| `/contact/complete` | 送信完了               | 必要 |

## 技術スタック

| 分類           | 技術                        |
| -------------- | --------------------------- |
| フレームワーク | Next.js 16（App Router）    |
| UI             | React 19                    |
| 言語           | TypeScript                  |
| スタイリング   | Tailwind CSS 4、Preline UI  |
| フォーム       | React Hook Form、Zod        |
| 状態管理       | Zustand                     |
| アイコン       | Lucide React                |
| パッケージ管理 | pnpm                        |
| バックエンド   | Spring Boot（別リポジトリ） |

## ディレクトリ構成

```text
.
├── public/                  # 画像・アイコンなどの静的ファイル
└── src/
    ├── app/                 # App Routerのページ・レイアウト
    │   ├── login/           # ログインページ
    │   └── (protected)/     # 認証が必要なページ
    │       ├── (home)/      # ホーム
    │       ├── profile/     # プロフィール
    │       ├── works/       # 制作実績
    │       └── contact/     # お問い合わせ
    ├── components/          # 共通UIコンポーネント
    ├── config/              # API接続設定
    ├── constants/           # ページ情報・フォームスキーマ
    ├── features/            # 機能・ページ単位の実装
    │   ├── auth/            # 認証API・状態管理
    │   ├── contact/         # お問い合わせAPI・状態管理
    │   ├── home/
    │   ├── login/
    │   ├── profile/
    │   └── works/
    ├── fonts/               # フォント設定
    └── lib/                 # 共通のAPIリクエスト処理
```

## 認証の流れ

1. `/login` からバックエンドの `POST /auth/login` へ認証情報を送信します。
2. 認証に成功すると、バックエンドがJWTをCookieに設定します。
3. `GET /auth/me` でログインユーザーの情報を取得します。
4. ページ再読み込み時は、`GET /auth/status` と `GET /auth/me` を使用して認証状態を復元します。
5. 未認証の場合は `/login` へリダイレクトします。

APIリクエストにはCookieを含めるため、バックエンド側でもフロントエンドのURLに対するCORSとCookieの設定が必要です。

## お問い合わせの流れ

1. `/contact` でお問い合わせ内容を入力します。
2. React Hook FormとZodで入力内容を検証します。
3. `/contact/confirm` で入力内容を確認します。
4. バックエンドの `POST /api/contact` へ内容を送信します。
5. 送信に成功すると `/contact/complete` を表示します。

## ローカル開発

### 前提条件

- Node.js
- pnpm
- `portfolio-v1-backend` がローカルで起動できること

### セットアップ

リポジトリをクローンし、依存パッケージをインストールします。

```bash
git clone git@github.com:wwknt0782/portfolio-v1.git
cd portfolio-v1
pnpm install
```

プロジェクトルートに `.env.local` を作成し、必要な環境変数を設定します。

```dotenv
# バックエンドURL
NEXT_PUBLIC_API_URL_DEV=http://localhost:8080
NEXT_PUBLIC_API_URL_PRD=https://example.com
```

バックエンドを起動してから、フロントエンドの開発サーバーを起動します。

```bash
pnpm dev
```

ブラウザで `http://localhost:3000/login` を開きます。

## ビルド

```bash
pnpm build
```

ビルド結果は、Next.jsの静的エクスポートによって `out/` に出力されます。

## 関連プロジェクト

- `portfolio-v1-backend`：認証、お問い合わせ内容の保存、メール送信を担当するSpring Boot API
