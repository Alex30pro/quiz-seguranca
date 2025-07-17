const questions = [
    {
        question: "Qual tipo de ataque tenta enganar alguém para que revele informações confidenciais, como senhas, através de e-mails falsos?",
        answers: [
            { text: "Ransomware", correct: false },
            { text: "Phishing", correct: true },
            { text: "DDoS", correct: false },
        ]
    },
    {
        question: "Qual é a principal função de um Firewall em uma rede de computadores?",
        answers: [
            { text: "Detectar vírus em arquivos", correct: false },
            { text: "Acelerar a velocidade da internet", correct: false },
            { text: "Monitorar e controlar o tráfego de rede", correct: true },
        ]
    },
    {
        question: "O que significa a sigla '2FA' no contexto de segurança?",
        answers: [
            { text: "Autenticação de Dois Fatores", correct: true },
            { text: "Arquivo de Acesso Rápido", correct: false },
            { text: "Algoritmo de Frequência Dupla", correct: false },
        ]
    },
    {
        question: "Qual protocolo é considerado seguro para a navegação na web, pois utiliza criptografia?",
        answers: [
            { text: "HTTP", correct: false },
            { text: "HTTPS", correct: true },
            { text: "FTP", correct: false },
        ]
    },
    {
        question: "Uma política de senhas fortes geralmente exige uma combinação de:",
        answers: [
            { text: "Apenas letras minúsculas e números", correct: false },
            { text: "Palavras fáceis de lembrar", correct: false },
            { text: "Letras maiúsculas, minúsculas, números e símbolos", correct: true },
        ]
    },
    {
        question: "No modelo 'Red Team vs. Blue Team', qual é o papel do 'Red Team'?",
        answers: [
            { text: "Defender os sistemas e monitorar ataques", correct: false },
            { text: "Simular ataques para encontrar vulnerabilidades", correct: true },
            { text: "Criar as regras e políticas de segurança", correct: false },
        ]
    },
    {
        question: "Um software malicioso que 'sequestra' os arquivos e exige um resgate é chamado de:",
        answers: [
            { text: "Ransomware", correct: true },
            { text: "Spyware", correct: false },
            { text: "Adware", correct: false },
        ]
    },
    {
        question: "O que é Engenharia Social?",
        answers: [
            { text: "A arte de manipular pessoas para que revelem informações confidenciais", correct: true },
            { text: "Uma técnica para otimizar o hardware de um servidor", correct: false },
            { text: "O desenvolvimento de software para redes sociais", correct: false },
        ]
    },
    {
        question: "Qual dos conceitos abaixo é um pilar da Governança de TI?",
        answers: [
            { text: "Velocidade máxima da rede", correct: false },
            { text: "Número de computadores na empresa", correct: false },
            { text: "Alinhamento estratégico entre TI e os objetivos do negócio", correct: true },
        ]
    },
    {
        question: "O que é 'Computação em Nuvem' (Cloud Computing)?",
        answers: [
            { text: "A entrega de serviços de computação pela internet", correct: true },
            { text: "Armazenar arquivos apenas em computadores que usam a cor branca", correct: false },
            { text: "Uma técnica de programação para climas chuvosos", correct: false },
        ]
    }
];