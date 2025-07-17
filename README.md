# Projeto: Quiz de Segurança da Informação

Bem-vindo ao "Desafio de Segurança"! Este é um quiz interativo e dinâmico, criado como um projeto de portfólio para demonstrar habilidades em JavaScript moderno, manipulação do DOM e criação de uma experiência de usuário engajadora com um design no estilo "Glassmorphism".

**Acesse a versão ao vivo aqui: [https://alex30pro.github.io/quiz-seguranca/](https://alex30pro.github.io/quiz-seguranca/)** 

---

### ✨ Funcionalidades Principais

Este quiz foi construído com várias funcionalidades para criar uma experiência completa e robusta:

* **Quiz Dinâmico:** Apresenta 10 perguntas sobre Segurança da Informação carregadas a partir de um arquivo de dados separado, demonstrando a prática de "separação de interesses".
* **Ordem Aleatória:** As perguntas são embaralhadas a cada nova partida usando o algoritmo Fisher-Yates, garantindo alta rejogabilidade.
* **Timer Regressivo:** Cada pergunta possui um timer de 15 segundos, adicionando um elemento de desafio e urgência.
* **Feedback Interativo:** O jogador recebe feedback visual instantâneo (verde para acerto, vermelho para erro) ao selecionar uma resposta.
* **Placar de Líderes Persistente:** O jogo salva as 5 melhores pontuações no `localStorage` do navegador. A classificação utiliza o **tempo** como critério de desempate, mostrando uma lógica de ordenação mais complexa.
* **Design Moderno e Responsivo:** A interface utiliza o estilo "Glassmorphism" (efeito de vidro) e se adapta perfeitamente a qualquer dispositivo, de celulares a desktops.

---

### 🚀 Tecnologias Utilizadas

Este projeto foi construído do zero com foco nas tecnologias web fundamentais.

* **HTML5:** Para a estruturação semântica de todas as telas do jogo.
* **CSS3:** Utilizado para criar o design "Glassmorphism", o layout responsivo com Flexbox e Media Queries, e todas as animações e transições.
* **JavaScript (Vanilla JS):** É o cérebro da aplicação, responsável por:
    * Manipulação do DOM para exibir perguntas, respostas e telas.
    * Gestão de estado do jogo (pontuação, tempo, pergunta atual).
    * Lógica de eventos para os cliques do usuário.
    * Manipulação de arrays (embaralhar, ordenar, mapear).
    * Interação com a API de `localStorage` do navegador para salvar e ler o placar de líderes.

---

### 📁 Estrutura do Projeto

O projeto está organizado na seguinte estrutura para fácil manutenção:
```
quiz-seguranca/
├── 📄 index.html
├── 📄 style.css
├── 📄 script.js
├── 📄 questions.js
└── 📁 images/
└── 🖼️ fundo-quiz.jpg
```


