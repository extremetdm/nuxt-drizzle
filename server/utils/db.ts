import { drizzle } from 'db0/integrations/drizzle';
// export { sql, eq, and, or } from 'drizzle-orm';

export * from '../database/schema';

export function useDrizzle() {
  return drizzle(useDatabase());
}