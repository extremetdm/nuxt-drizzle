import type * as schema from '../../server/database/schema';

export type User = typeof schema.users.$inferSelect;
