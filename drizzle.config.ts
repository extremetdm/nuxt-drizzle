import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './server/database/schema',
  out: './server/database/migrations',
  dbCredentials: {
    url: 'postgresql://postgres:P@ssw0rd@localhost:5432/testing',
  },
});