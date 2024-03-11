# Digital Ocean App Platform - NextJS, Tailwind, Typescript, and Strapi

## Getting Started

1. Clone the repository locally:

```bash
  git clone git@github.com:robertguss/digital-ocean-strapi-nextjs.git
```

2. Change into the repo's directory and run the `yarn setup` command to setup frontend and backend dependencies:

```bash
  cd digital-ocean-strapi-nextjs
  yarn setup
```

> [!IMPORTANT]
> You must use `yarn` to install the dependencies. If you use `npm`, you will encounter errors. You can install `yarn` by running `npm install -g yarn`. You should also be on a LTS version of Node.js.

3. Next, navigate to the `backend` directory and set up the `.env` file. You can use the `.env.example` file as reference:

```bash
HOST=localhost
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

4. Start your project by running the following command:

```bash
  yarn build
  yarn develop
```

You will be prompted to create your first admin user.

Great! Now that you have your project running, let's add some data.

## Seeding The Data

You can learn more about how this works in Strapi's documentation [here](https://docs.strapi.io/dev-docs/data-management).

In the root of the project there is a `seed-data.tar.gz` file. We will use it to seed our data.

1. Open up your terminal and make sure you are still in you `backend` folder.

2. Run the following command to seed your data:

```bash
  yarn strapi import -f ../seed-data.tar.gz
```

This will import your data locally. Log back into your admin panel to see the newly imported data.

## Setting Up The Frontend

Next we need to switch to our `/frontend` directory and create our `.env` file and paste in the following.

```bash
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
```

---

# Deploying to Digital Ocean's App Platform

## Strapi - /backend deployment

### Strapi Global Environment Variables

```bash
APP_URL=${APP_URL}
DATABASE_HOST=${db.HOSTNAME}
DATABASE_PORT=${db.PORT}
DATABASE_NAME=${db.DATABASE}
DATABASE_USERNAME=${db.USERNAME}
DATABASE_PASSWORD=${db.PASSWORD}
NODE_ENV=production
```

### Strapi App Environment Variables

```bash
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
```

## Strapi - /frontend deployment

```bash
NEXT_PUBLIC_STRAPI_API_URL=<Digital Ocean Strapi URL>
```

---

## Strapi Digital Ocean App Platform Docs

[Strapi Digital Ocean App Platform Docs](https://docs.strapi.io/dev-docs/deployment/digitalocean-app-platform#create-a-digitalocean-app)
