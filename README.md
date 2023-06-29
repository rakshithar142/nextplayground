This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


Steps: CREATE PROJECT

1. Create git repo locally without readme file [GIT DESKTOP] [main branch]
2. Create a nextjs APP with npx create-next-app
3. Run loclly and commit to git as initial commit 
4. Deploy the APP to vercel cloud..As main branch is used [GIT HOOKS are added automatically]
5. Create branches on git develop and release 
6.change the default branvh to develop 
7.checkout develop in local and start making changes 

RELEASE CYCLE ::

1. Create a feature branch and use this to commit 
2. Raise a PR to develop ..Squash commits and merge 
3. Raise PR from develop to main ..Merge this ..Automatically code will be deployed [RELEASE TO PROD ]
4. Verify the changes on UI / versal cloud 
5. Raise a PR from main to release and merge  [After deployment]


BEST PRACTICE GIT:

1. Pull code from origin before starting to code and before pushing to origin
2. Commit working code periodically and EOD 


npm install prisma@4.8.1
npx prisma db push