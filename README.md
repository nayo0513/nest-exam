## Setup
```
cp .env.example .env
npm ci
docker compose build
docker compose up -d
prisma migrate deploy
```

## TODO
- user tableにrole columnを追加する。
- userやreviewの追加、削除、変更等はroleがadminのuserしかできないようにする。
- バグ修正（あまり確認してない）
- test追加