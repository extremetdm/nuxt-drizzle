export default defineEventHandler(async () => {

  const db = useDrizzle();

  const a = await db.select().from(users).execute();

  return { hello: 'API', users: a };
});
