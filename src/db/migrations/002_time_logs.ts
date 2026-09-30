import { Kysely } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema.createTable('time_logs')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('ticket_id', 'integer', (col) =>
      col.notNull(),
    )
    .addColumn('user_id', 'integer', (col) =>
      col.notNull(),
    )
    .addColumn('hours', 'integer', (col) => col.notNull())
    .addColumn('logged_at', 'timestamptz', (col) =>
      col.notNull(),
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('time_logs').execute();
}
