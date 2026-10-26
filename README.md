# 🚀 SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior

Projeto avaliativo desenvolvido para o **Módulo 01 — Semana 07**, cujo objetivo é automatizar a triagem e a análise de compatibilidade entre o perfil técnico do candidato **Lucas da Costa** e vagas de desenvolvimento Front-End Júnior utilizando **JavaScript puro (Vanilla JS)**.

---

## 📌 1. O que o sistema faz?

O **SkillMatch JS** funciona como um motor de análise (*engine*) de recrutamento e orientação de estudos. Ele:
1. Carrega de forma assíncrona (simulando uma requisição a um servidor via `Promise` e `async/await`) uma lista de vagas de tecnologia com diferentes requisitos técnicos.
2. Compara as habilidades que o candidato **Lucas da Costa** já domina (`JavaScript`, `TypeScript`, `React`, `Node.js`, `Python`, `Java`, `Spring Boot` e `SQL`) com os requisitos exigidos por cada vaga.
3. Identifica exatamente quais habilidades estão em falta para cada oportunidade.
4. Calcula o percentual exato de aderência (`0%` a `100%`) e classifica a vaga em **Alta**, **Média** ou **Baixa compatibilidade**.
5. Regista cada análise realizada utilizando **Callbacks** e **Closures** (mantendo um contador interno seguro sem variáveis globais).
6. Destaca a **vaga com maior compatibilidade** para candidatura imediata e gera uma **recomendação de estudo priorizada** com base nas tecnologias mais pedidas nas vagas em que houve lacunas.

---

## ⚙️ 2. Passo a passo para executar o projeto

Podes executar o código de três formas diferentes:

### Opção A: Usando Node.js no Terminal (Recomendado)
1. Certifica-te de ter o [Node.js](https://nodejs.org/) instalado na tua máquina.
2. Clona este repositório e acede à pasta do projeto:
   ```bash
   git clone https://github.com/SEU-USUARIO/skillmatch-js.git
   cd skillmatch-js
   ```
3. Executa o ficheiro principal no terminal:
   ```bash
   node skillmatch.js
   ```

### Opção B: Colando no Console do Navegador
1. Abre o teu navegador (Google Chrome, Edge ou Firefox) e pressiona `F12` (ou `Ctrl + Shift + I` / `Cmd + Option + I`) para abrir o **DevTools**.
2. Acede ao separador **Console**.
3. Copia todo o conteúdo do ficheiro `skillmatch.js`, cola no console e pressiona `Enter`.

### Opção C: Ambiente Online de JavaScript
1. Acede a um interpretador online como [PlayCode.io](https://playcode.io/), [RunJS](https://runjs.app/) ou [OneCompiler](https://onecompiler.com/javascript).
2. Cola o código do ficheiro `skillmatch.js` e observa a saída no painel de console após 1,2 segundo.

### Extensões do VS Code Recomendadas (Tabela 4.3)
- **ESLint**: para padronização e identificação rápida de erros de sintaxe no JavaScript.
- **Prettier - Code formatter**: para manter a indentação e formatação limpa do código.
- **Code Runner**: para executar o ficheiro `skillmatch.js` diretamente dentro do VS Code com um clique.
- **GitLens**: para visualizar o histórico de commits e branches de forma clara.

---

## 🧮 3. Regra de cálculo de compatibilidade adotada (RF03 e RF04)

A regra de cálculo definida no projeto atribui **peso igualitário** a todos os requisitos técnicos listados numa vaga, garantindo transparência e consistência em todas as comparações:

$$\text{Compatibilidade (\%)} = \text{Math.round}\left(\frac{\text{Total de Requisitos da Vaga} - \text{Habilidades em Falta}}{\text{Total de Requisitos da Vaga}} \times 100\right)$$

- Antes da comparação, todas as strings passam pela função `normalizarTexto()` (`trim().toLowerCase()`), evitando que diferenças entre letras maiúsculas e minúsculas gerem falsos negativos.
- Após o cálculo numérico, o sistema classifica cada vaga segundo a tabela oficial do guião:
  - **80% a 100%**: `Alta compatibilidade`
  - **50% a 79%**: `Média compatibilidade`
  - **0% a 49%**: `Baixa compatibilidade`

---

## 🎯 4. Critério de priorização da recomendação de estudo (RF07)

Para sugerir o que o candidato deve estudar primeiro, o sistema adota o **Critério de Frequência de Demanda de Mercado**:
1. A função `gerarRecomendacaoDeEstudo()` percorre as habilidades em falta de todas as vagas analisadas utilizando laços `for`.
2. Conta em quantas vagas cada habilidade ausente é exigida (ex.: `HTML` e `CSS` aparecem em 3 vagas; `Testes Automatizados` aparece em 2 vagas; `Figma`, `Tailwind CSS` e `Next.js` aparecem em 1 vaga).
3. Ordena as habilidades de forma decrescente pela frequência (`sort((a, b) => b.frequencia - a.frequencia)`).
4. Recomenda como **Prioridade #1** a tecnologia que desbloqueia o maior número de vagas simultaneamente, exibindo também a fila completa priorizada.

---

## 💻 5. Conceitos de JavaScript e Engenharia Aplicados (Tabela 4.3)

| Conceito | Onde e como foi aplicado no projeto |
| :--- | :--- |
| **Tipos de Dados** | `String` (nome, cargo), `Number` (meses de experiência, percentuais), `Boolean` (`disponivelImediato`), `Array` (habilidades, vagas) e `Object` (`candidato`, relatórios). |
| **`const`, `let` e `var`** | Priorizou-se `const` para referências imutáveis (objetos, funções, arrays base) e `let` para variáveis que mudam de valor (contadores de laço `for` e estado interno da closure). O `var` não foi utilizado no código por ter escopo de função (e não de bloco) e sofrer *hoisting*, o que pode causar vazamento de escopo e bugs difíceis de rastrear. |
| **Estruturas de Decisão** | `if-else` na função `classificarCompatibilidade()`, `switch-case` em `obterAcaoRecomendadaPorClassificacao()` e **operador ternário** (`? :`) na formatação das mensagens do relatório. |
| **Laços de Repetição** | Laços `for` clássicos e `for...in` na contagem de frequência de habilidades para recomendação de estudo e na impressão do relatório no console. |
| **Métodos de Array (RF08)** | Utilizados **5 métodos**: `map` (normalizar strings e gerar relatórios), `filter` (listar habilidades em falta), `reduce` (descobrir o maior percentual de compatibilidade), `find` (localizar a vaga com maior percentual) e `every` (verificar se o candidato atende a 100% dos requisitos). |
| **POO, Classes e `this` (RF09, RF10, RF11)** | Classe base `Vaga` com `constructor` e método `exibirResumo()` usando `this`. Subclasse `VagaFrontEnd` usando `extends` e `super()` para herdar de `Vaga` e especializar o comportamento com `modalidade`, `nivel` e `focoTecnico`. |
| **Callbacks (RF12)** | A função `processarAnaliseDeVaga()` recebe a função `callbackRegistro` como parâmetro e a executa ao finalizar a avaliação de cada vaga. |
| **Closures (RF13)** | A função `criarGerenciadorDeAnalises()` encapsula a variável privada `totalVagasAnalisadas` e retorna uma função interna que preserva e incrementa esse contador entre chamadas sem usar variáveis globais. |
| **Promises e Async/Await (RF14)** | A função `buscarVagasDoServidor()` retorna uma `Promise` com `setTimeout` simulando a latência de rede, enquanto `executarSkillMatch()` utiliza `async/await` e `try/catch` para aguardar os dados antes de processar o relatório. |

---

## 🌐 6. Como a Internet e a Arquitetura Cliente-Servidor Funcionam

### Como a Internet funciona
A internet é uma rede global de computadores interconectados que trocam dados através de protocolos padronizados, principalmente a pilha **TCP/IP**. Quando acedemos a um endereço web, o **DNS (Domain Name System)** traduz o nome de domínio (como `github.com`) para um endereço **IP** numérico. Em seguida, os dados são divididos em pequenos pacotes que viajam por roteadores até chegarem ao destino, utilizando protocolos de aplicação como **HTTP/HTTPS** para transferir textos, códigos e ficheiros com segurança.

### Arquitetura Cliente-Servidor e relação com o projeto
Na arquitetura **Cliente-Servidor**, responsabilidades são divididas entre duas partes:
- **Cliente (Front-End / Navegador / Aplicação local)**: é a interface com a qual o utilizador interage. Ele faz **requisições (*requests*)** pedindo informações ou enviando dados.
- **Servidor (Back-End / API / Banco de Dados)**: é o sistema remoto que armazena as regras de negócio e os dados. Ele processa o pedido do cliente e devolve uma **resposta (*response*)**, geralmente em formato JSON, com um código de status HTTP (ex.: `200 OK` ou `503 Service Unavailable`).

No **SkillMatch JS**, simulamos esse comportamento real através da função `buscarVagasDoServidor()` com **`Promise`** e **`async/await`**: como uma resposta do servidor pela internet não é instantânea (existe latência de rede), o cliente precisa aguardar de forma assíncrona (`await`) até que a `Promise` seja resolvida (`resolve`) com a lista de vagas, mantendo a aplicação organizada e preparada para tratar eventuais falhas de rede no bloco `try/catch`.


