# Node Express Prisma Boilerplate

Starter project for building a RESTful API using Express.

## Features

- Express
- Prettier
- ESlint
- Husky
- lint-staged
- JEST
- Prisma

## Commands
### Requirements:
- Node version : 16.14.2

### Install dependencies:
```
npm i
```

### Set Prisma ORM:
Documentation: https://www.prisma.io/docs/

```
# Create an .env file and add the connection URL 
# e.g., DATABASE_URL="mysql://root:root@localhost:3306/starter_project"
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/"
```
```
# Map data model to your DB
npm run prisma:migrate
```

### Running locally:
```
npm run dev
```

### Formating code:
```
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Run prettier
npm run prettier

# Fix prettier issues
npm run prettier:fix
```

### Testing:
```
# Run tests
npm run test

# Run test coverage
npm run coverage
```
