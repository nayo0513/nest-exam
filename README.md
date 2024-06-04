## Setup
```
cp .env.example .env
npm ci
docker compose build
docker compose up -d
prisma migrate deploy
```

## TODO
- role
- pagenation?
- graphql schema 見直す?
- test追加
- 認可
  - guards?