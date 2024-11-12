<div id="top"></div>

[//]: # "## 使用技術一覧"

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->

[//]: # '  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">'

[//]: # '  <img src="https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">'

  <!-- バックエンドのフレームワーク一覧 -->
  <!-- バックエンドの言語一覧 -->
  <!-- ミドルウェア一覧 -->

[//]: # '<img src="https://img.shields.io/badge/-MySQL-4479A1.svg?logo=mysql&style=for-the-badge&logoColor=white">)'

</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)

## Office Navi

エリア、ジャンルごとに異なる予約アプリを利用していても、簡単にアクセスするできるアプリです。  
また、Outlook で登録している設備についても検索することが可能です。

[//]: # "<!-- プロジェクトの概要を記載 -->"

[//]: #

[//]: # '  <p align="left">'

[//]: # "    <br />"

[//]: # "    <!-- プロジェクト詳細にBacklogのWikiのリンク -->"

[//]: # '    <a href="Backlogのwikiリンク"><strong>プロジェクト詳細 »</strong></a>'

[//]: # "    <br />"

[//]: # "    <br />"

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

#### フロントエンド

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン  |
|------------|--------|
| React      | 18.3.1 |
| bootstrap  | 5.3.3  |

※その他のパッケージのバージョンは package.json を参照してください

#### バックエンド

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク       | バージョン   |
|------------------|---------|
| express          | 4.21.1  |
| knex             | 3.1.0   |
| dotenv           | 16.4.5  |
| axios            | 1.7.7   |
| pg               | 8.13.1  |
| @azure/msal-node | 16.17.0 |

※その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

├──backend  
│ └── db  
│ └── migrations  
│ └── seeds  
│ └── graph  
│ ├── package-lock.json  
│ ├── package.json  
│ ├── .env  
│ └── .gitignore  
├── frontend  
│ ├── public  
│ ├── src  
│ ├── package-lock.json  
│ ├── package.json  
│ ├── index.html  
│ └── .gitignore  
├── .gitignore  
└── README.md

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

<!-- コンテナの作成方法、パッケージのインストール方法など、開発環境構築に必要な情報を記載 -->

### コンテナの作成と起動

.env ファイルを以下の環境変数例を元に作成

バックエンド側
.env

`Credentials`  
TENANT_ID= ＜ご自身の環境のテナント ID>  
CLIENT_ID= ＜ご自身の環境のクライアント ID>  
CLIENT_SECRET= ＜ご自身の環境のシークレット>

`Endpoints`
AAD_ENDPOINT=https://login.microsoftonline.com/  
GRAPH_ENDPOINT=https://graph.microsoft.com/

`Database`  
DB_USER= ＜ご自身のユーザ>  
DB_PASSWORD= ＜ DB_USER で指定したユーザのパスワード>  
DB_NAME= ＜当仕組で利用する Database 名>

以下のコマンドでコンテナを起動できます

npm run dev

### 動作確認

http://127.0.0.1:3000 にアクセスできるか確認
アクセスできたら成功

### コンテナの停止

以下のコマンドでコンテナを停止できます

Ctrl + C

### コマンド一覧

| npm run       | 実行する処理          | 元のコマンド                                |
|---------------|-----------------|---------------------------------------|
| makeMigration | マイグレーションファイルの作成 | node_modules/.bin/knex migrate:make   |
| migrate       | マイグレーションを行う     | node_modules/.bin/knex migrate:latest |
| makeSeed      | シードファイルの作成      | node_modules/.bin/knex seed:make      |
| Seed          | シードを行う          | node_modules/.bin/knex seed:run       |

## トラブルシューティング

### .env: no such file or directory

.env ファイルがないので環境変数の一覧を参考に作成しましょう

### Ports are not available: address already in use

別のコンテナもしくはローカル上ですでに使っているポートがある可能性があります
<br>
下記記事を参考にしてください
<br>
[コンテナ起動時に Ports are not available: address already in use が出た時の対処法について](https://qiita.com/shun198/items/ab6eca4bbe4d065abb8f)

<p align="right">(<a href="#top">トップへ</a>)</p>
