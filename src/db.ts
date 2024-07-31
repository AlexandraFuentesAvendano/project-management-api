import { Pool } from 'pg';

// Configura los detalles de conexión a tu base de datos PostgreSQL
export const pool = new Pool({
    user: 'alexandra', // tu nombre de usuario de PostgreSQL
    host: 'localhost',
    database: 'project_management', // el nombre de tu base de datos
    password: '', // tu contraseña de PostgreSQL
    port: 5432, // puerto predeterminado para PostgreSQL
});



