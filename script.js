function enviar(){
    class Funcionario {
        constructor(nome, idade, cargo){
            this.nome = nome;
            this.idade = idade;
            this.cargo = cargo;
        }

        seApresentar(){
            console.log(`Muito prazer, meu nome é ${this.nome} tenho ${this.idade} anos e sou ${this.cargo}`)
            return;
        }

        trabalhar(){
                console.log('Estou trabalhando.');
                return;
        }
    }

    class Gerente extends Funcionario {
        constructor(nome, idade, cargo, departamento){
            super(nome, idade, cargo);
            this.departamento = departamento;
        }

        gerenciar(){
                console.log('Estou gerenciando.')
                return;
        }
    }

    class Desenvolvedor extends Funcionario{
        constructor(nome, idade, cargo, linguagem){
            super(nome, idade, cargo);
            this.linguagem = linguagem;
        }

         programar(){
                console.log(`Estou programando em ${this.linguagem}`);
                return;
        }
    }

    console.log('funcao enviar')
    // console.log(this.cargo.value)
    const cargoValue = document.getElementById('cargo').value;
    const nomeValue = document.getElementById('nome').value;
    const idadeValue = document.getElementById('idade').value;
    const departamentoValue = document.getElementById('departamento').value;
    const linguagemValue = document.getElementById('linguagem').value;

    try{
        if(cargoValue == 'gerente'){
            novoGerente = new Gerente(nomeValue, idadeValue, cargoValue, departamentoValue);
            console.log(novoGerente);
            novoGerente.trabalhar();
            novoGerente.gerenciar();
        } else if (cargoValue == 'desenvolvedor'){
            novoDes = new Desenvolvedor(nomeValue, idadeValue, cargoValue, linguagemValue);
            console.log(novoDes)
            novoDes.trabalhar()
            novoDes.programar()
        }
    } catch (erro) {
        console.log('deu erro na hora de chamar a funcao programar. mensagem: ' + erro.message)
    }
}

