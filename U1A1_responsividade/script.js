const apresentacoes = [
    "Sou um estudante apaixonado por tecnologia e desenvolvimento de software, sempre buscando aprender coisas novas.",
    "Tenho interesse em programação e gosto de criar projetos simples para aprimorar minhas habilidades.",
    "Estou em constante evolução na área de desenvolvimento, focando em lógica, organização e boas práticas.",
    "Gosto de desafios que me ajudam a crescer como desenvolvedor e profissional."
];

const textoAleatorio = apresentacoes[Math.floor(Math.random() * apresentacoes.length)];

document.getElementById("apresentacao").textContent = textoAleatorio;
