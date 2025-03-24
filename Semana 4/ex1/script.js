function Pessoa() {
    this.nome = "";
    this.email = "";
    this.dataNascimento = "";
    this.telefoneFixo = "";
    this.telefoneCelular = "";
    this.matricula = "";
}

Pessoa.prototype.setNome = function (vNome) {
    this.nome = vNome;
};
Pessoa.prototype.getNome = function () {
    return this.nome;
};

Pessoa.prototype.setEmail = function (vEmail) {
    this.email = vEmail;
};
Pessoa.prototype.getEmail = function () {
    return this.email;
};

Pessoa.prototype.setDataNascimento = function (vDataNascimento) {
    this.dataNascimento = vDataNascimento;
};
Pessoa.prototype.getDataNascimento = function () {
    return this.dataNascimento;
};

Pessoa.prototype.setTelefoneFixo = function (vTelefoneFixo) {
    this.telefoneFixo = vTelefoneFixo;
};
Pessoa.prototype.getTelefoneFixo = function () {
    return this.telefoneFixo;
};

Pessoa.prototype.setTelefoneCelular = function (vTelefoneCelular) {
    this.telefoneCelular = vTelefoneCelular;
};
Pessoa.prototype.getTelefoneCelular = function () {
    return this.telefoneCelular;
};

Pessoa.prototype.setMatricula = function (vMatricula) {
    this.matricula = vMatricula;
};
Pessoa.prototype.getMatricula = function () {
    return this.matricula;
};

function Aluno() {
    Pessoa.call(this);
    this.curso = "";
}
Aluno.prototype = Object.create(Pessoa.prototype);
Aluno.prototype.setCurso = function (vCurso) {
    this.curso = vCurso;
};
Aluno.prototype.getCurso = function () {
    return this.curso;
};

function Professor() {
    Pessoa.call(this);
    this.area = "";
    this.lattes = "";
}
Professor.prototype = Object.create(Pessoa.prototype);
Professor.prototype.setArea = function (vArea) {
    this.area = vArea;
};
Professor.prototype.getArea = function () {
    return this.area;
};

Professor.prototype.setLattes = function (vLattes) {
    this.lattes = vLattes;
};
Professor.prototype.getLattes = function () {
    return this.lattes;
};

var radios = document.getElementsByName('opcao');
var forms = document.getElementsByClassName('fields')[0]; 
var results = document.getElementById('result');

function verificarCampo() {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value === 'aluno';
        }
    }
}

function atualizarCampos() {
    forms.innerHTML = '';    

    if (verificarCampo()) {
        forms.innerHTML = `
            <div class="mb-3">
                <label for="curso" class="form-label">Curso</label>
                <input type="text" id="curso" name="curso" class="form-control" required>
            </div>`;
    } else {
        forms.innerHTML = `
            <div class="mb-3">
                <label for="area" class="form-label">Área</label>
                <input type="text" id="area" name="area" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="lattes" class="form-label">Lattes</label>
                <input type="text" id="lattes" name="lattes" class="form-control" required>
            </div>`;
    }
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', atualizarCampos);
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    results.innerHTML = '';

    if (verificarCampo()) {
        let aluno = new Aluno();
        aluno.setNome(document.getElementById('nome').value);
        aluno.setEmail(document.getElementById('email').value);
        aluno.setDataNascimento(document.getElementById('data_nascimento').value);
        aluno.setTelefoneCelular(document.getElementById('telefone_celular').value);
        aluno.setTelefoneFixo(document.getElementById('telefone_fixo').value);
        aluno.setMatricula(document.getElementById('matricula').value);
        aluno.setCurso(document.getElementById('curso').value);

        results.innerHTML = `
            <p><strong>Nome:</strong> ${aluno.getNome()}</p>
            <p><strong>Email:</strong> ${aluno.getEmail()}</p>
            <p><strong>Data de nascimento:</strong> ${aluno.getDataNascimento()}</p>
            <p><strong>Telefone Celular:</strong> ${aluno.getTelefoneCelular()}</p>
            <p><strong>Telefone Fixo:</strong> ${aluno.getTelefoneFixo()}</p>
            <p><strong>Matrícula:</strong> ${aluno.getMatricula()}</p>
            <p><strong>Curso:</strong> ${aluno.getCurso()}</p>
        `;
    } else {
        let professor = new Professor();
        professor.setNome(document.getElementById('nome').value);
        professor.setEmail(document.getElementById('email').value);
        professor.setDataNascimento(document.getElementById('data_nascimento').value);
        professor.setTelefoneCelular(document.getElementById('telefone_celular').value);
        professor.setTelefoneFixo(document.getElementById('telefone_fixo').value);
        professor.setMatricula(document.getElementById('matricula').value);
        professor.setArea(document.getElementById('area').value);
        professor.setLattes(document.getElementById('lattes').value);

        results.innerHTML = `
            <p><strong>Nome:</strong> ${professor.getNome()}</p>
            <p><strong>Email:</strong> ${professor.getEmail()}</p>
            <p><strong>Data de nascimento:</strong> ${professor.getDataNascimento()}</p>
            <p><strong>Telefone Celular:</strong> ${professor.getTelefoneCelular()}</p>
            <p><strong>Telefone Fixo:</strong> ${professor.getTelefoneFixo()}</p>
            <p><strong>Matrícula:</strong> ${professor.getMatricula()}</p>
            <p><strong>Área:</strong> ${professor.getArea()}</p>
            <p><strong>Lattes:</strong> ${professor.getLattes()}</p>
        `;
    }
});

atualizarCampos();
