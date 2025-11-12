import app from "./app";
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/node-postgres';
dotenv.config({quiet: true});

const PORT = Number(process.env.PORT ?? 3000);

const db = drizzle(process.env.DATABASE_URL!)

app.listen(PORT, (error) => {
    console.log(`Server running on port ${PORT}`);
    if(error) console.log(error);
});