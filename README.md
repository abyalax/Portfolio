Script untuk pertama kali deploy dan buat schema database production ( deploy pertama )
```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "postinstall": "prisma generate",
    "vercel-build": "prisma generate && prisma migrate deploy && next build",
    "lint": "next lint"
  },
```

Script jika tidak perlu migrasi ( deploy kedua )
```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "postinstall": "prisma generate",
    "vercel-build": "next build",
    "lint": "next lint"
  },
```
