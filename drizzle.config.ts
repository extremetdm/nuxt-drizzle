import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './server/database/schema',
  out: './server/database/migrations',
  // driver: 'dflocal',
  dbCredentials: {
    url: '.wrangler/state/v3/d1/miniflare-D1DatabaseObject/b4aeb8b1ebdaef90f6e6a5e0a4ffa62dd6028f9443a24539749651c48747e92d.sqlite',
  },
});