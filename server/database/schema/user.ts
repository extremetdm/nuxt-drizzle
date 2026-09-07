import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial().primaryKey(),
    name: varchar()
})