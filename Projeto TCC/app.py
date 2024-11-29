from flask import Flask, request, render_template

app = Flask(__name__)

# Página de login
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # Obtendo dados do formulário
        email = request.form.get("email")
        password = request.form.get("password")

        # Validação simples (apenas para demonstração)
        if email == "admin@example.com" and password == "123456":
            return "Login realizado com sucesso!"
        else:
            return "E-mail ou senha inválidos. Tente novamente."
    
    # Exibe o formulário de login
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
