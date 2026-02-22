# Coffee Archive Web Service

Next.js(App Router) + PostgreSQL + Prisma 기반 커피 브루잉 아카이브 서비스 MVP 스캐폴딩입니다.

## 포함 내용
- Mobile-first + Desktop 모바일 프레임 레이아웃
- 달력 기반 홈(`/app/calendar`)
- 기록/템플릿/커뮤니티용 Server Actions 기본 CRUD
- Prisma 스키마(유저, 기록, 템플릿, 그룹, 초대, 게시글, 댓글)
- NextAuth Credentials 기반 인증 뼈대

## 시작
```bash
npm install
npm run dev
```

## 라우트 구조
- Public: `/`, `/auth/login`, `/auth/signup`, `/invite/[token]`
- App: `/app/calendar`, `/app/day/[date]`, `/app/records/new`, `/app/records/[id]`, `/app/templates`, `/app/templates/new`, `/app/community`, `/app/community/[postId]`, `/app/groups`, `/app/groups/[groupId]`, `/app/settings`
