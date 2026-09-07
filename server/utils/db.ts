import { drizzle } from 'drizzle-orm/d1';
// export { sql, eq, and, or } from 'drizzle-orm';

import * as schema from '../database/schema';
import type { H3Event } from 'h3';

export * from '../database/schema';

export function useDrizzle(event: H3Event) {
  const d1 = event.context.cloudflare?.env.DB;

  if (!d1) {
    throw new Error('Cloudflare D1 database binding (DB) is missing from event context.');
  }

  return drizzle(d1, { schema });
}