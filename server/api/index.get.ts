export default defineEventHandler(async event => {

  const db = useDrizzle(event);

  const a = await db.select().from(users).execute();

  return { hello: 'API', users: a };
});
