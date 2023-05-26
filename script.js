class Usuario {
    constructor(nome, idade, telefone, sexo) {
        this.nome = nome
        this.idade = idade
        this.telefone = telefone
        this.sexo = sexo
    }
    validarDadosDoUsuario() {
        if (!this.nome || !this.idade || !this.telefone || !this.sexo) { return false }
        else {
            return true
       }
    }
}
let dados = new Array()
function buscarDadosDoFormulario() {
 const nome = document.getElementById('nome').value
 const idade = document.getElementById('idade').value
 const telefone = document.getElementById('telefone').value
 const sexo = document.getElementById('sexo').value 
    return new Usuario(nome, idade, telefone, sexo)
}

const btn = document.getElementById('btnEnviar').addEventListener("click", enviarFomulario)

function coletarDadosdoUsuario(usuario) {
    dados.push(usuario)
}
function limparFormulario(){
 document.getElementById('nome').value = ''
 document.getElementById('idade').value = ''
 document.getElementById('telefone').value = ''
 document.getElementById('sexo').selectedIndex = 0
}
function enviarFomulario() {
    let usuario = buscarDadosDoFormulario()
    if(usuario.validarDadosDoUsuario()){   
        coletarDadosdoUsuario(usuario)
        alert('Dados inseridos com sucesso!')
        limparFormulario()
    } else{
        alert('Dados incorretos!')
    }
}
