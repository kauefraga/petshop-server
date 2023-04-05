<div align="center">
  <h1>
    <code>Petshop Server</code>
  </h1>

  <p>
    <strong>🐶 A simple and modern petshop service (CRUD) 🐶</strong>
  </p>

  <p>
    <img
      alt="GitHub top language"
      src="https://img.shields.io/github/languages/top/kauefraga/petshop-server.svg"
    />
    <img
      alt="Repository size"
      src="https://img.shields.io/github/repo-size/kauefraga/petshop-server.svg"
    />
    <a href="https://github.com/kauefraga/petshop-server/commits/main">
      <img
        alt="GitHub last commit"
        src="https://img.shields.io/github/last-commit/kauefraga/petshop-server.svg"
      />
    </a>
    <img
      alt="GitHub LICENSE"
      src="https://img.shields.io/github/license/kauefraga/petshop-server.svg"
    />
  </p>
</div>

<!-- ## ✨ Features -->

## ⬇️ How to install and use it

```bash
git clone https://github.com/kauefraga/petshop-server.git
cd petshop-server

pnpm ci
pnpm dev
```
You are welcome to open issues and pull requests!

## 🔐 Environment Variables

1. `PORT`: it's used by our http server to listen at (default: 3333)
2. `DATABASE_URL`: needed to connect to the database
   - ex.: postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
3. `POSTGRES_PASSWORD`: password that postgres requires

## 🛠 Technologies

- [Cuid2](https://npm.im/@paralleldrive/cuid2) - Secure, collision-resistant ids optimized for horizontal scaling and performance. Next generation UUIDs.
- [Fastify](https://www.npmjs.com/package/fastify) - An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users. Framework based on plugins.
  - [@fastify/cors](https://www.npmjs.com/package/@fastify/cors) - Allows you to control who can access your Fastify application.
  - [@fastify/rate-limit](https://www.npmjs.com/package/@fastify/rate-limit) - Controls the request rate limit of your API.
- [Prisma](https://www.prisma.io) - The best ORM for Typescript.
- [Typescript](https://typescriptlang.org), [tsx](https://www.npmjs.com/package/tsx) and [tsup](https://www.npmjs.com/package/tsup) - Improve the DX by adding type safety and a blazingly fast execution/build provided by esbuild
- [Docker](https://www.docker.com) - Use virtualization/containerize to turn your "work on my machine" into "our machine".

## 📝 License

This project is licensed under the MIT License - See the [LICENSE](https://github.com/kauefraga/petshop-server/blob/main/LICENSE) for more information.

---

<div align="center" display="flex">
  <img alt="Built with love" src="https://forthebadge.com/images/badges/built-with-love.svg">
  <img alt="Powered by coffee" src="https://forthebadge.com/images/badges/powered-by-coffee.svg">
</div>
