$(document).ready(function() {
    // Exibir todas as seções inicialmente (para a Página Inicial)
    $("#pagina-inicial-conteudo").show();  // Exibe o conteúdo completo na inicial
    
    // Quando clicar em "Página Inicial", todas as seções são exibidas novamente
    $("#pagina-inicial").click(function() {
        $("#pagina-inicial-conteudo").show();  // Exibe todo o conteúdo novamente
        $("#sobre-mim-conteudo").show();  // Exibe "Sobre Mim"
        $("#meus-trabalhos-conteudo").show();  // Exibe "Meus Trabalhos"
        $("#contato-conteudo").show();  // Exibe "Contato"
    });

    // Quando clicar em "Sobre Mim", apenas a seção "Sobre Mim" é exibida
    $("#sobre-mim").click(function() {
        $("#meus-trabalhos-conteudo").hide();  // Esconde "Meus Trabalhos"
        $("#contato-conteudo").hide();  // Esconde "Contato"
        $("#sobre-mim-conteudo").show();  // Exibe "Sobre Mim"
    });

    // Quando clicar em "Meus Trabalhos", apenas a seção "Meus Trabalhos" é exibida
    $("#meus-trabalhos").click(function() {
        $("#sobre-mim-conteudo").hide();  // Esconde "Sobre Mim"
        $("#contato-conteudo").hide();  // Esconde "Contato"
        $("#meus-trabalhos-conteudo").show();  // Exibe "Meus Trabalhos"
    });

    // Quando clicar em "Meus Trabalhos", apenas a seção "Meus Trabalhos" é exibida
    $("#conheca-trabalhos").click(function() {
        $("#sobre-mim-conteudo").hide();  // Esconde "Sobre Mim"
        $("#contato-conteudo").hide();  // Esconde "Contato"
        $("#meus-trabalhos-conteudo").show();  // Exibe "Meus Trabalhos"
    });

    // Quando clicar em "Contato", apenas a seção "Contato" é exibida
    $("#contato").click(function() {
        $("#sobre-mim-conteudo").hide();  // Esconde "Sobre Mim"
        $("#meus-trabalhos-conteudo").hide();  // Esconde "Meus Trabalhos"
        $("#contato-conteudo").show();  // Exibe "Contato"
    });
});

// MODALS

// Função para abrir o modal e carregar o site no iframe
function openSiteModal(url) {
    // Atualiza o src do iframe com o caminho do arquivo local
    document.getElementById('siteIframe').src = url;
  }