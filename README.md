# Workout Diary
## Deployed version
https://workout-diary-liart.vercel.app/

## Team:
- Asonov Nikolay - Backend Developer
- Kaneva Tamara - Backend Developer
- Melnikova Maria - Frontend Developer
- Titenko Elena - Frontend Developer

## Project description:
Web-application for creating your individual training program and store information about your workouts.

#### Implemented features:
- creating a profile
- adding exercises
- adding workout templates
#### Common logic:
- as a user I can create an account
- as a user I can sign in to my account
- as a user I can log out
- as a user I can add a new exercise, update it or delete
- as a user I can add a new workout, update it or delete
- as a user I can update my information on the profile page

## Design
[Our incredible Figma file](https://www.figma.com/file/Eux1jU89iuO8ioYER7QDwx/English-Workouts?node-id=0-1&t=ehm5mg0KePl58Paj-0)

## Frontend
- common:
  - storing data in `redux-store` and `localStorage`
  - mobile-first design
- Home page
- Sign-in and Sign-up pages
- Dashboard: page with diary (coming soon or never)
- Exercise editor: interface to CRUD exercises
- Workout editor: interface to CRUD workouts
- Profile page: page with profile settings 

## Backend
- database
- endpoints
  
## Built with
* JavaScript
* React
* Next.js
* Redux
* SASS/SCSS
* TablerIcons

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.page.jsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/index.endpoint.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Linting
For linting code:

```bash
yarn lint
```
