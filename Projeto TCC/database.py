import sqlite3
from datetime import datetime

# Criando a conexão com o banco de dados
conn = sqlite3.connect('app_database.db')

# Criando um cursor para executar comandos SQL
cursor = conn.cursor()

# Criando tabela de usuários (clients)
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME NOT NULL
)
""")

# Criando tabela de administradores
cursor.execute("""
CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME NOT NULL
)
""")

# Confirmando as alterações e fechando a conexão
conn.commit()
conn.close()

print("Banco de dados criado com sucesso.")








def insert_user(name, email, password, is_admin=False):
    conn = sqlite3.connect('app_database.db')
    cursor = conn.cursor()

    # Hashing da senha (simples exemplo, use bibliotecas seguras como bcrypt em produção)
    hashed_password = password[::-1]  # Apenas para demonstração; substitua por algo mais seguro.

    table = 'admins' if is_admin else 'users'
    query = f"""
    INSERT INTO {table} (name, email, password, created_at)
    VALUES (?, ?, ?, ?)
    """
    cursor.execute(query, (name, email, hashed_password, datetime.now()))

    conn.commit()
    conn.close()

    print(f"{'Admin' if is_admin else 'User'} adicionado com sucesso.")







# Inserindo um usuário cliente
insert_user(name="João Silva", email="joao@gmail.com", password="senha123")

# Inserindo um administrador
insert_user(name="Admin User", email="admin@example.com", password="adminpass", is_admin=True)





def get_users(is_admin=False):
    conn = sqlite3.connect('app_database.db')
    cursor = conn.cursor()

    table = 'admins' if is_admin else 'users'
    query = f"SELECT * FROM {table}"
    cursor.execute(query)
    rows = cursor.fetchall()

    conn.close()

    return rows


# Buscar todos os usuários clientes
users = get_users()
print("Clientes:", users)

# Buscar todos os administradores
admins = get_users(is_admin=True)
print("Admins:", admins)
