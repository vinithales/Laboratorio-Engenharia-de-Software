function Pessoa() {
    var nome;
    var email;
    var dataNascimento;
    var telefoneFixo;
    var telefoneCelular;
    var matricula;

    this.setNome = function (vNome) {
        this.nome = vNome;
    }
    this.getNome = function () {
        return this.nome;
    }


    this.setEmail = function (vEmail) {
        this.email = vEmail;
    }
    this.getEmail = function () {
        return this.email;
    }

    this.setDataNascimento = function (vDataNascimento) {
        this.dataNascimento = vDataNascimento;
    }
    this.getDataNascimento = function () {
        return this.dataNascimento;
    }

    this.setTelefoneFixo = function (vTelefoneFixo) {
        this.telefoneFixo = vTelefoneFixo;
    }
    this.getTelefoneFixo = function () {
        return this.telefoneFixo;
    }


    this.setTelefoneCelular = function (vTelefoneCelular) {
        this.telefoneCelular = vTelefoneCelular;
    }
    this.getTelefoneCelular = function () {
        return this.telefoneCelular;
    }

    this.setMatricula = function (vMatricula) {
        this.matricula = vMatricula;
    }
    this.getMatricula = function () {
        return this.matricula;
    }
}

function Aluno() {
    Pessoa.call(this);
    var curso;

    this.setCurso = function (vCurso) {
        this.curso = vCurso;
    }
    this.getCurso = function () {
        return this.curso;
    }
}

function Professor() {
    Pessoa.call(this);
    var area;
    var lattes;

    this.setArea = function (vArea) {
        this.area = vArea;
    }
    this.getArea = function () {
        return this.area;
    }
}


var radios = document.getElementByName('opcao');
var result = document.getElementsByClassName('result');

for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        if (radios[i].value == 'aluno') {
            result.innerHTML = `
                <div class="mb-3">
                    <form method="post">
                        <div class="mb-3">
                            <label for="curso" class="form-label">Curso</label>
                            <input type="text" id="curso" name="curso" class="form-control" required="">
                        </div>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>
            `;
        }

    }
}


