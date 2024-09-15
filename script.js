// Dados de exemplo para instituições
const instituicoes = [
    { id: 1, nome: "Lar dos Idosos Felizes", descricao: "Cuidando de idosos desde 1990", imagem: "idosos-feliz.jpeg" },
    { id: 2, nome: "Abrigo Animal Amigo", descricao: "Resgatando e cuidando de animais abandonados", imagem: "animais-e-amigos.jpeg" },
    { id: 3, nome: "Educação para Todos", descricao: "Fornecendo educação gratuita para crianças carentes", imagem: "educacao-todos.jpeg" }
];

// Dados de exemplo para doações
const dadosDoacoes = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
        label: 'Doações Recebidas (R$)',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

// Dados de exemplo para distribuição por causa
const dadosDistribuicao = {
    labels: ['Idosos', 'Animais', 'Educação'],
    datasets: [{
        data: [30, 25, 45],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }]
};

// Dados de exemplo para histórias de impacto
const historiasImpacto = [
    { titulo: "Uma Nova Chance", conteudo: "João, um idoso abandonado, encontrou um novo lar e família em nossa instituição." },
    { titulo: "Educação Transformadora", conteudo: "Maria, de 12 anos, recebeu sua primeira oportunidade de estudar e agora sonha em ser médica." },
    { titulo: "Resgate Animal", conteudo: "Rex, um cão abandonado, foi resgatado e agora tem uma nova família amorosa." }
];

// Variáveis globais para armazenar os dados
let totalDoadores = 1000;
let totalDoado = 500000;
let projetosApoiados = 20;
let doacoesMensais = [12000, 19000, 15000, 25000, 22000, 30000];
let distribuicaoCausas = [30, 25, 45];

// Função para preencher a lista de instituições
function preencherInstituicoes() {
    const lista = document.getElementById('lista-instituicoes');
    if (!lista) return;
    lista.innerHTML = '';
    instituicoes.forEach(instituicao => {
        const div = document.createElement('div');
        div.className = 'instituicao';
        div.innerHTML = `
            <img src="${instituicao.imagem}" alt="${instituicao.nome}">
            <h3>${instituicao.nome}</h3>
            <p>${instituicao.descricao}</p>
            <button onclick="selecionarInstituicao(${instituicao.id})">Selecionar</button>
        `;
        lista.appendChild(div);
    });
}

// Função para criar o gráfico de doações
function criarGraficoDoacoes() {
    const ctx = document.getElementById('grafico-doacoes');
    if (!ctx) return;
    if (window.graficoDoacao) {
        window.graficoDoacao.destroy();
    }
    window.graficoDoacao = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Doações Recebidas (R$)',
                data: doacoesMensais,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Função para criar o gráfico de distribuição por causa
function criarGraficoDistribuicao() {
    const ctx = document.getElementById('grafico-distribuicao');
    if (!ctx) return;
    if (window.graficoDistribuicao) {
        window.graficoDistribuicao.destroy();
    }
    window.graficoDistribuicao = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Idosos', 'Animais', 'Educação'],
            datasets: [{
                data: distribuicaoCausas,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Função para preencher histórias de impacto
function preencherHistoriasImpacto() {
    const container = document.getElementById('historias');
    historiasImpacto.forEach(historia => {
        const div = document.createElement('div');
        div.className = 'historia';
        div.innerHTML = `<h3>${historia.titulo}</h3><p>${historia.conteudo}</p>`;
        container.appendChild(div);
    });
}

// Função para preencher detalhes financeiros
function preencherDetalhesFinanceiros() {
    const detalhes = [
        { mes: 'Janeiro', receita: 10000, despesas: 8000 },
        { mes: 'Fevereiro', receita: 12000, despesas: 9000 },
        { mes: 'Março', receita: 15000, despesas: 11000 },
        { mes: 'Abril', receita: 20000, despesas: 18000 },
        { mes: 'Maio', receita: 22000, despesas: 19000 },
        { mes: 'Junho', receita: 25000, despesas: 20000 }
    ];

    const container = document.getElementById('detalhes-financeiros');
    container.innerHTML = ''; // Limpa o conteúdo existente

    const table = document.createElement('table');
    table.className = 'tabela-financeira';

    // Cria o cabeçalho da tabela
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Mês</th>
            <th>Receita</th>
            <th>Despesas</th>
            <th>Saldo</th>
        </tr>
    `;
    table.appendChild(thead);

    // Cria o corpo da tabela
    const tbody = document.createElement('tbody');
    detalhes.forEach(detalhe => {
        const saldo = detalhe.receita - detalhe.despesas;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${detalhe.mes}</td>
            <td>R$ ${detalhe.receita.toLocaleString('pt-BR')}</td>
            <td>R$ ${detalhe.despesas.toLocaleString('pt-BR')}</td>
            <td class="${saldo >= 0 ? 'positivo' : 'negativo'}">
                R$ ${saldo.toLocaleString('pt-BR')}
            </td>
        `;
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.appendChild(table);
}

// Função para preencher opções de instituição no formulário de doação
function preencherOpcoesInstituicao() {
    const select = document.getElementById('instituicao');
    instituicoes.forEach(instituicao => {
        const option = document.createElement('option');
        option.value = instituicao.nome;
        option.textContent = instituicao.nome;
        select.appendChild(option);
    });
}

// Função para atualizar estatísticas
function atualizarEstatisticas() {
    document.getElementById('total-doadores').textContent = totalDoadores.toLocaleString('pt-BR');
    document.getElementById('total-doado').textContent = `R$ ${totalDoado.toLocaleString('pt-BR')}`;
    document.getElementById('projetos-apoiados').textContent = projetosApoiados;
}

// Função para atualizar gráficos
function atualizarGraficos() {
    criarGraficoDoacoes();
    criarGraficoDistribuicao();
}

// Função para lidar com o envio do formulário de doação
function handleFormSubmit(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const instituicao = document.getElementById('instituicao').value;

    if (isNaN(valor) || valor <= 0) {
        alert('Por favor, insira um valor válido para a doação.');
        return;
    }

    // Atualizar estatísticas
    totalDoadores++;
    totalDoado += valor;
    projetosApoiados++;

    // Atualizar doações mensais (assumindo que a doação é para o mês atual)
    const mesAtual = new Date().getMonth();
    doacoesMensais[mesAtual] += valor;

    // Atualizar distribuição por causa (simplificado, distribuindo igualmente)
    const valorPorCausa = valor / 3;
    distribuicaoCausas = distribuicaoCausas.map(v => v + valorPorCausa);

    // Atualizar a interface
    atualizarEstatisticas();
    atualizarGraficos();

    console.log(`Doação de ${nome} (${email}) no valor de R$${valor} para a instituição ${instituicao}`);

    // Limpar o formulário
    event.target.reset();

    // Mostrar mensagem de agradecimento
    alert('Obrigado pela sua doação! Os dados foram atualizados.');
}

// Função para alternar o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateDarkModeIcon();
}

// Função para atualizar o ícone do botão de modo escuro
function updateDarkModeIcon() {
    const icon = document.querySelector('#darkModeToggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Adicionar animação de fade-in aos elementos
function addFadeInAnimation() {
    const elements = document.querySelectorAll('section, .estatistica, .instituicao, .historia');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
}

// Inicialização
function inicializarPagina() {
    preencherInstituicoes();
    preencherHistoriasImpacto();
    preencherDetalhesFinanceiros();
    preencherOpcoesInstituicao();
    atualizarEstatisticas();
    atualizarGraficos();

    // Adicionar event listeners
    const formDoacao = document.getElementById('form-doacao');
    if (formDoacao) {
        formDoacao.addEventListener('submit', handleFormSubmit);
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    // Verificar preferência de modo escuro
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeIcon();
}

// Executar a função de inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', inicializarPagina);

// Adicionar animação de fade-in aos elementos após o carregamento da página
window.addEventListener('load', addFadeInAnimation);

// Função para selecionar uma instituição
function selecionarInstituicao(id) {
    const instituicao = instituicoes.find(i => i.id === id);
    if (instituicao) {
        document.getElementById('instituicao').value = instituicao.nome;
    }
}
