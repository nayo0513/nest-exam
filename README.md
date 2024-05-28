## Setup
```
cp .env.example .env
npm ci
docker compose build
docker compose up -d
prisma migrate deploy
```

## TODO
- 書籍検索機能追加
- role
- pagenation?
- graphql schema 見直す?
- test追加
- 認証、認可
  - jwt,guards?