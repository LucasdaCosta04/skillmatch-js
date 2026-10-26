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