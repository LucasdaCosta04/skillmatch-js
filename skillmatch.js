/**
 * ============================================================================
 * SKILLMATCH JS: SIMULADOR DE COMPATIBILIDADE COM VAGA FRONT-END JÚNIOR
 * Candidato: Lucas da Costa
 * Módulo 01 - Semana 07
 * ============================================================================
 */

// ============================================================================
// PARTE 1: PERFIL DO CANDIDATO E MODELAGEM POO (RF01, RF02, RF09, RF10, RF11)
// ============================================================================

// RF01 - Criar o perfil do candidato (uso de String, Number, Boolean, Array e Object)
const candidato = {
  nome: "Lucas da Costa",
  areaInteresse: "Desenvolvimento Front-End Júnior / Full Stack Júnior",
  tempoExperienciaMeses: 8, // Experiência adequada a perfil júnior/estudante
  disponivelImediato: true,
  habilidades: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "Spring Boot",
    "SQL"
  ]
};

// RF09 e RF11 - Criar classe principal com construtor, atributos e método usando 'this'
class Vaga {
  constructor(id, empresa, cargo, requisitos) {
    this.id = id;
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  exibirResumo() {
    return `[Vaga #${this.id}] ${this.cargo} na empresa ${this.empresa} (${this.requisitos.length} requisitos)`;
  }
}

// RF10 - Usar herança (especializando comportamento para vagas de Front-End com modalidade, nível e stack principal)
class VagaFrontEnd extends Vaga {
  constructor(id, empresa, cargo, requisitos, modalidade, nivel, focoTecnico) {
    super(id, empresa, cargo, requisitos);
    this.modalidade = modalidade;
    this.nivel = nivel;
    this.focoTecnico = focoTecnico;
  }

  // Polimorfismo / sobrescrita de método utilizando 'super' e 'this' (RF10 e RF11)
  exibirResumo() {
    return `${super.exibirResumo()} | Nível: ${this.nivel} | Modalidade: ${this.modalidade} | Foco: ${this.focoTecnico}`;
  }
}

// RF02 - Criar uma lista com pelo menos 03 vagas fictícias (4 vagas criadas para cobrir diferentes faixas de compatibilidade)
const bancoDeVagas = [
  new VagaFrontEnd(
    1,
    "TechNova Solutions",
    "Desenvolvedor(a) Front-End React Júnior",
    ["JavaScript", "TypeScript", "React", "Node.js", "HTML", "CSS"],
    "Remoto",
    "Júnior",
    "SPA com React & TypeScript"
  ),
  new VagaFrontEnd(
    2,
    "FinBank Digital",
    "Desenvolvedor(a) Front-End / Full Stack Júnior",
    ["JavaScript", "TypeScript", "React", "Java", "Spring Boot", "SQL"],
    "Híbrido",
    "Júnior",
    " Ecossistema React + APIs Spring Boot"
  ),
  new VagaFrontEnd(
    3,
    "InovaWeb Studio",
    "Pessoa Desenvolvedora Front-End Júnior",
    ["JavaScript", "React", "HTML", "CSS", "Figma", "Testes Automatizados"],
    "Remoto",
    "Júnior",
    "Interfaces Responsivas & Design System"
  ),
  new VagaFrontEnd(
    4,
    "CloudScale Systems",
    "Engenheiro(a) de Interface Front-End Júnior",
    ["JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Next.js", "Testes Automatizados"],
    "Presencial",
    "Júnior",
    "Performance Web & SSR"
  )
];

// ============================================================================
// PARTE 2: MOTOR DE ANÁLISE E COMPATIBILIDADE (RF03, RF04, RF05, RF06, RF07, RF08)
// ============================================================================

// Função auxiliar para padronizar comparação de textos (case-insensitive)
function normalizarTexto(texto) {
  return texto.trim().toLowerCase();
}

// RF05 e RF08 - Listar habilidades faltantes usando os métodos de array 'map' e 'filter' com arrow functions
function obterHabilidadesFaltantes(habilidadesCandidato, requisitosVaga) {
  const habilidadesNormalizadas = habilidadesCandidato.map((hab) => normalizarTexto(hab));

  return requisitosVaga.filter(
    (requisito) => !habilidadesNormalizadas.includes(normalizarTexto(requisito))
  );
}

// RF03 - Calcular compatibilidade com cada vaga (produzindo percentual de 0 a 100)
function calcularCompatibilidade(habilidadesCandidato, requisitosVaga) {
  if (requisitosVaga.length === 0) {
    return 100;
  }

  const faltantes = obterHabilidadesFaltantes(habilidadesCandidato, requisitosVaga);
  const quantidadeAtendida = requisitosVaga.length - faltantes.length;
  const percentual = Math.round((quantidadeAtendida / requisitosVaga.length) * 100);

  return percentual;
}

// RF04 - Classificar a compatibilidade usando estrutura de decisão if-else e operadores lógicos
function classificarCompatibilidade(percentual) {
  if (percentual >= 80 && percentual <= 100) {
    return "Alta compatibilidade";
  } else if (percentual >= 50 && percentual <= 79) {
    return "Média compatibilidade";
  } else {
    return "Baixa compatibilidade";
  }
}

// Uso adicional de switch-case (opcional da Tabela 4.3) para gerar recomendação de ação por faixa
function obterAcaoRecomendadaPorClassificacao(classificacao) {
  switch (classificacao) {
    case "Alta compatibilidade":
      return "Candidatura altamente recomendada! Seu perfil técnico atende à grande maioria dos requisitos.";
    case "Média compatibilidade":
      return "Boa oportunidade! Vale se candidatar enquanto reforça os requisitos pendentes.";
    case "Baixa compatibilidade":
      return "Foque primeiro no plano de estudos para desenvolver a base exigida por esta vaga.";
    default:
      return "Analisar requisitos individualmente.";
  }
}

// RF06 e RF08 - Encontrar a vaga com maior compatibilidade usando 'reduce' e 'find'
function encontrarMelhorVaga(relatoriosVagas) {
  const maiorPercentual = relatoriosVagas.reduce((maior, atual) => {
    return atual.percentual > maior ? atual.percentual : maior;
  }, 0);

  return relatoriosVagas.find((relatorio) => relatorio.percentual === maiorPercentual);
}

// RF07 - Gerar recomendação de estudo priorizando as habilidades mais exigidas nas vagas analisadas
function gerarRecomendacaoDeEstudo(relatoriosVagas) {
  const contagemFaltantes = {};

  // Uso de laço de repetição 'for' (requisito técnico da Tabela 4.3)
  for (let i = 0; i < relatoriosVagas.length; i++) {
    const faltantesDaVaga = relatoriosVagas[i].habilidadesFaltantes;

    for (let j = 0; j < faltantesDaVaga.length; j++) {
      const habilidade = faltantesDaVaga[j];
      if (contagemFaltantes[habilidade]) {
        contagemFaltantes[habilidade] += 1;
      } else {
        contagemFaltantes[habilidade] = 1;
      }
    }
  }

  const listaPriorizada = [];
  for (const habilidade in contagemFaltantes) {
    listaPriorizada.push({
      habilidade: habilidade,
      frequencia: contagemFaltantes[habilidade]
    });
  }

  // Ordena da habilidade mais recorrente nas vagas para a menos recorrente
  listaPriorizada.sort((a, b) => b.frequencia - a.frequencia);

  if (listaPriorizada.length === 0) {
    return "Parabéns! Você já domina todas as habilidades exigidas pelas vagas analisadas.";
  }

  const principalPrioridade = listaPriorizada[0];
  const demaisHabilidades = listaPriorizada
    .map((item) => `${item.habilidade} (exigida em ${item.frequencia} vaga(s))`)
    .join(", ");

  return `Prioridade #1 de estudo: "${principalPrioridade.habilidade}" (aparece em ${principalPrioridade.frequencia} das ${relatoriosVagas.length} vagas). Fila completa priorizada: ${demaisHabilidades}.`;
}

// ============================================================================
// PARTE 3: CLOSURE, CALLBACK, PROMISE E ASYNC/AWAIT (RF12, RF13, RF14)
// ============================================================================

// RF13 - Usar closure para manter um valor interno preservado entre chamadas sem variável global
function criarGerenciadorDeAnalises() {
  let totalVagasAnalisadas = 0;

  return function registrarNovaAnalise(nomeEmpresa) {
    totalVagasAnalisadas += 1;
    return `Análise #${totalVagasAnalisadas} concluída para ${nomeEmpresa}`;
  };
}

// RF12 - Usar callback: função que recebe outra função como parâmetro dentro do fluxo do programa
function processarAnaliseDeVaga(vaga, perfilCandidato, callbackRegistro) {
  const habilidadesFaltantes = obterHabilidadesFaltantes(perfilCandidato.habilidades, vaga.requisitos);
  const percentual = calcularCompatibilidade(perfilCandidato.habilidades, vaga.requisitos);
  const classificacao = classificarCompatibilidade(percentual);
  const acaoSugerida = obterAcaoRecomendadaPorClassificacao(classificacao);

  // RF08 - Uso do método 'every' para verificar se o candidato domina 100% dos requisitos da vaga
  const atendeTodosRequisitos = vaga.requisitos.every((req) =>
    perfilCandidato.habilidades.map((h) => normalizarTexto(h)).includes(normalizarTexto(req))
  );

  // Executa o callback recebido por parâmetro
  const logAuditoria = callbackRegistro(vaga.empresa);

  return {
    vaga: vaga,
    percentual: percentual,
    classificacao: classificacao,
    acaoSugerida: acaoSugerida,
    habilidadesFaltantes: habilidadesFaltantes,
    atendeTodosRequisitos: atendeTodosRequisitos,
    protocolo: logAuditoria
  };
}

// RF14 - Usar Promise para simular o carregamento assíncrono das vagas vindas de um servidor
function buscarVagasDoServidor(simularFalha = false) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Conectando ao servidor do SkillMatch JS... Buscando vagas disponíveis...");

    setTimeout(() => {
      if (simularFalha) {
        reject(new Error("Falha de conexão com o servidor de vagas (Erro 503)."));
      } else {
        resolve(bancoDeVagas);
      }
    }, 1200);
  });
}

// RF14 - Função assíncrona com async/await que aguarda o carregamento e exibe o relatório completo
async function executarSkillMatch() {
  console.log("==========================================================================");
  console.log("      SKILLMATCH JS: SIMULADOR DE COMPATIBILIDADE FRONT-END JÚNIOR        ");
  console.log("==========================================================================\n");

  try {
    const vagasCarregadas = await buscarVagasDoServidor(false);
    console.log(`✅ Sucesso! ${vagasCarregadas.length} vagas carregadas do servidor.\n`);

    // Exibição do perfil do candidato (com operador ternário na disponibilidade)
    console.log("👤 PERFIL DO CANDIDATO");
    console.log(`Nome: ${candidato.nome}`);
    console.log(`Área de Interesse: ${candidato.areaInteresse}`);
    console.log(`Tempo de Experiência: ${candidato.tempoExperienciaMeses} meses (Júnior / Estudante)`);
    console.log(`Disponibilidade Imediata: ${candidato.disponivelImediato ? "Sim" : "Não"}`);
    console.log(`Habilidades Atuais (${candidato.habilidades.length}): ${candidato.habilidades.join(", ")}\n`);

    // Instancia a closure contadora de análises
    const contabilizarAnalise = criarGerenciadorDeAnalises();

    // RF08 - Uso de 'map' com callback para transformar cada vaga em um relatório detalhado
    const relatorios = vagasCarregadas.map((vaga) =>
      processarAnaliseDeVaga(vaga, candidato, (empresa) => contabilizarAnalise(empresa))
    );

    console.log("📊 RELATÓRIO DE COMPATIBILIDADE POR VAGA");
    console.log("--------------------------------------------------------------------------");

    for (let i = 0; i < relatorios.length; i++) {
      const item = relatorios[i];
      console.log(item.vaga.exibirResumo());
      console.log(`  • Log de Auditoria (Closure + Callback): ${item.protocolo}`);
      console.log(`  • Requisitos Exigidos: ${item.vaga.requisitos.join(", ")}`);
      console.log(`  • Compatibilidade: ${item.percentual}% -> ${item.classificacao}`);
      console.log(`  • Atende 100% dos requisitos (every): ${item.atendeTodosRequisitos ? "Sim" : "Não"}`);
      console.log(
        `  • Habilidades em Falta: ${
          item.habilidadesFaltantes.length === 0
            ? "Nenhuma! Perfil 100% compatível com a vaga."
            : item.habilidadesFaltantes.join(", ")
        }`
      );
      console.log(`  • Parecer do Sistema: ${item.acaoSugerida}`);
      console.log("--------------------------------------------------------------------------");
    }

    const melhorOpcao = encontrarMelhorVaga(relatorios);
    const recomendacaoEstudo = gerarRecomendacaoDeEstudo(relatorios);

    console.log("\n🏆 DESTAQUE: VAGA COM MAIOR COMPATIBILIDADE ");
    console.log(
      `-> ${melhorOpcao.vaga.cargo} na empresa ${melhorOpcao.vaga.empresa} (${melhorOpcao.percentual}% - ${melhorOpcao.classificacao})`
    );

    console.log("\n📚 RECOMENDAÇÃO DE ESTUDO PERSONALIZADA ");
    console.log(`-> ${recomendacaoEstudo}`);
    console.log("\n==========================================================================");
  } catch (erro) {
    console.error("❌ Erro ao executar o sistema:", erro.message);
  }
}

// Inicializa a aplicação
executarSkillMatch();