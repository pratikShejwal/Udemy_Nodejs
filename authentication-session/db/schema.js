import { uuid,integer, pgTable, varchar,text,timestamp, pgEnum } from "drizzle-orm/pg-core";
import { time } from "node:console";
export const userRoleEnum = pgEnum('user_role',['user','admin'])

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  role: userRoleEnum().notNull().default('user'),
  password: varchar({ length: 255 }).notNull(),
  salt: text().notNull()
});

export const userSessions = pgTable('user_sessions',{
    id: uuid().primaryKey().defaultRandom(),
    userId: uuid().references(()=> usersTable.id).notNull(),
    createdAt: timestamp().defaultNow().notNull()
})