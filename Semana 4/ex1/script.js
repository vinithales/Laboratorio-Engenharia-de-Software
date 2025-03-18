function Pessoa() {
    var nome;
    var email;
    var dataNascimento;
    var telefoneFixo;
    var telefoneCelular;
    var matricula;

    this.setNome = function (vNome) {
        this.nome = vNome;
    };
    this.getNome = function () {
        return this.nome;
    };

    this.setEmail = function (vEmail) {
        this.email = vEmail;
    };
    this.getEmail = function () {
        return this.email;
    };

    this.setDataNascimento = function (vDataNascimento) {
        this.dataNascimento = vDataNascimento;
    };
    this.getDataNascimento = function () {
        return this.dataNascimento;
    };

    this.setTelefoneFixo = function (vTelefoneFixo) {
        this.telefoneFixo = vTelefoneFixo;
    };
    this.getTelefoneFixo = function () {
        return this.telefoneFixo;
    };

    this.setTelefoneCelular = function (vTelefoneCelular) {
        this.telefoneCelular = vTelefoneCelular;
    };
    this.getTelefoneCelular = function () {
        return this.telefoneCelular;
    };

    this.setMatricula = function (vMatricula) {
        this.matricula = vMatricula;
    };
    this.getMatricula = function () {
        return this.matricula;
    };
}

function Aluno() {
    Pessoa.call(this);
    var curso;

    this.setCurso = function (vCurso) {
        this.curso = vCurso;
    };
    this.getCurso = function () {
        return this.curso;
    };
}

function Professor() {
    Pessoa.call(this);
    var area;
    var lattes;

    this.setArea = function (vArea) {
        this.area = vArea;
    };
    this.getArea = function () {
        return this.area;
    };

    this.setLattes = function (vLattes) {
        this.lattes = vLattes;
    };
    this.getLattes = function () {
        return this.lattes;
    };
}

var radios = document.getElementsByName('opcao');
var result = document.getElementsByClassName('fields')[0]; 
var forms = document.getElementById('formulario');
var results = document.getElementById('results');

function verificarCampo(){
    for (let i = 0; i < radios.length; i++) {
        if(radios[i].checked){
            if(radios[i].value === 'aluno'){
                return true;
            } else if(radios[i].value === 'professor'){
                return false;
            }
        }
        
    }
}

function atualizarCampos() {
    forms.innerHTML = '';    

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (verificarCampo()) {
                forms.innerHTML = `
                    <div class="mb-3">
                        <label for="curso" class="form-label">Curso</label>
                        <input type="text" id="curso" name="curso" class="form-control" required="">
                    </div>`;
            } else if (verificarCampo()) {
                forms.innerHTML = `
                    <div class="mb-3">
                        <label for="area" class="form-label">Área</label>
                        <input type="text" id="area" name="area" class="form-control" required="">
                    </div>
                    <div class="mb-3">
                        <label for="lattes" class="form-label">Lattes</label>
                        <input type="text" id="lattes" name="lattes" class="form-control" required="">
                    </div>`;
            }
        }
    }
}

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener('change', atualizarCampos);
}



forms.document.addEventListener('submit', function(){
    result.innerHTML = '';
    
    if(verificarCampo()){
        let aluno = {
            nome: document.getElementsById('nome'),
            email: document.getElementsById('email'),
            dataNascimento: document.getElementById('dataNascimento'),
            telefoneCelular: document.getElementById('telefone_celular'),
            telefoneFixo: document.getElementById('telefone_fixo'),
            matricula: document.getElementById('matricula'),
            curso: document.getElementById('curso')
        }


        result.innerHTML = `Nome : ${aluno.nome}<br>Email: ${aluno.email}<br>Data de nascimento: ${aluno.dataNascimento}<br>Telefone Celular ${aluno.telefoneCelular}<br>Telefone Fixo: ${aluno.}`
    }
});




atualizarCampos();


