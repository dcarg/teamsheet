## Teamsheet

A nextJS web app to select your favourite teams teamsheet.

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment variables
Ask another developer for the `.env` file

## Database Setup

The we use Prisma as our ORM.

Create the database
```bash

```

Generate and apply migrations from the Prisma schema (dev environment only)
```bash
npx prisma migrate dev
```

Seed initial data
```bash
yarn seed
```

You can now view the data by connecting your favourite tool (DBeaver, Valentina Studio, PG Admin etc) to the database. Alternatively Prisma provides a UI to explore your database:

```bash
npx prisma studio
```

Then view the database on `localhost:5555`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# By Mark Ball and David Carr-Gregg of Firebat Software
