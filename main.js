function adicionarContato() {
    // Obter os valores do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    // Validar se ambos os campos foram preenchidos
    if (nome === "" || telefone === "") {
        
    
alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar uma nova linha na tabela
    var tabela = document.getElementById("contatos").getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow(tabela.rows.length);
    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);

    // Adicionar os valores do formulário à nova linha
    celulaNome.
 
innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    
    
document.getElementById("telefone").value = "";
}