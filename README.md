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

### Set database
Documentation: https://www.prisma.io/docs/

Requirements:
- Node version : 16.14.2

```
# Install dependencies
npm i
```
```
# Create a .env file and add the connection URL 
# e.g., mysql://root:root@localhost:3306/starter_project
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/"
```
```
# Add data model into prisma/schema.prisma
# This example will work for the current repository
e.g.
    model Post {
    id        Int      @id @default(autoincrement())
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    title     String   @db.VarChar(255)
    content   String?
    published Boolean  @default(false)
    author    User     @relation(fields: [authorId], references: [id])
    authorId  Int
    }

    model Profile {
    id     Int     @id @default(autoincrement())
    bio    String?
    user   User    @relation(fields: [userId], references: [id])
    userId Int     @unique
    }

    model User {
    id      Int      @id @default(autoincrement())
    email   String   @unique
    name    String?
    posts   Post[]
    profile Profile?
    }
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
