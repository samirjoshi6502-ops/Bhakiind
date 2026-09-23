This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Hosted admin access

Set `ADMIN_SECRET` and `ADMIN_ALLOWED_IPS` environment variables in the hosted deployment. `ADMIN_ALLOWED_IPS` accepts comma-separated public IPs. Open `/admin` from an approved IP and sign in with `admin@example.com` / `admin123` for now. After signing in, an administrator can add more IPs from the Security panel. Override the temporary credentials with `ADMIN_EMAIL` and `ADMIN_PASSWORD`. If `ADMIN_SECRET` is omitted, the temporary account pair is used as the session fallback; configure `ADMIN_SECRET` before real production use.

For hosted saves and uploads, create a Vercel Blob store and connect it to this project so `BLOB_READ_WRITE_TOKEN` is available in the deployment environment. The admin content JSON and uploaded images/videos/PDFs then persist in Blob storage. Without this token, local development uses the filesystem and hosted writes return a storage configuration error.
