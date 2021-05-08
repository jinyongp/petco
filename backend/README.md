# Petco server

## Technical Stack

- GraphQL, Apollo Server Express, Prisma, MySQL

### GraphQL

- [Introduction to GraphQL](https://graphql.org/learn/)

### Apollo Server

- [Get Started with Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/)

### Apollo Server Express

- [Get Started with Apollo Server Express](https://github.com/apollographql/apollo-server#getting-started)
- Middleware
  - [morgan](https://github.com/expressjs/morgan#readme)
  - [graphql-uploads](https://github.com/jaydenseric/graphql-upload#readme)

### Prisma

- [Getting Started with Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project-typescript-postgres)
- [Connect to MySQL Database Server](https://www.prisma.io/docs/concepts/database-connectors/mysql)
- [Data Model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
- [Relations](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)

### MySQL

### Miscellaneous

- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) ([@types/jsonwebtoken](https://www.npmjs.com/package/@types/jsonwebtoken))
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js#usage) ([@types/bcrypt](https://www.npmjs.com/package/@types/bcrypt))
- [dotenv](https://github.com/motdotla/dotenv#readme)

## References

## Response Status

### General

성공할 시 코드 없음

### Authentication



- 401: Email is null (SignIn)
- 402: Password is null (SignIn)
- 403: Not found ( Invalid email )
- 404: Not found ( Invalid password )
- 411:
- 500: Internal Server Error
