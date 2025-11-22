import 'dotenv/config';

// essa func n depende do servidor, por isso fica aqui

export function getDbUrl(): string {
  const PORT = process.env.DB_PORT ?? "5432";
  const HOST = process.env.DB_HOST ?? "localhost";
  const USER = process.env.DB_USER ?? "postgres";
  const PASSWORD = process.env.DB_PASSWORD ?? "123456789";
  const DB = process.env.DB_NAME ?? "ubqtdatabase";

  return `postgresql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}`;
}
