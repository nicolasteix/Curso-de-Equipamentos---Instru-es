const flashcards = [
    {
        question: "Quais são os principais objetivos de segurança nas oficinas das OM de Eng?",
        answer: "Eliminar Danos Pessoais <br><br> Eliminar Danos à Propriedade <br><br> Eliminar Danos ao Material <br><br> Eliminar Danos ao Meio ambiente.<br><br> <strong>(DPPMM)</strong>"
    },
    {
        question: "Qual as regras básicas de segurança na oficina?",
        answer: "Atentar para as Condições e Emprego do local;<br><br> Condições e Emprego do Material;<br><br>  Utilização das Máquinas;<br><br> Os Cuidados e Ação de pessoal. <br><br> <strong>(Local, Material, Máquinas e Pessoal)</strong>"
    },
    {
        question: "Qual a primeira regra básica de segurança na oficina?",
        answer: "Atentar para as condições e emprego do local."
    },
    {
        question: "Qual a segunda regra básica de segurança na oficina?",
        answer: "Atentar para as condições e emprego do material."
    },
    {
        question: "Qual a terceira regra básica de segurança na oficina?",
        answer: "Atentar para a utilização das máquinas."
    },
    {
        question: "Qual a quarta regra básica de segurança na oficina?",
        answer: "Atentar para os cuidados e ação de pessoal."
    },
    {
        question: "Quais são as principais atribuições do chefe de oficina?",
        answer: "Fazer discussões diárias de segurança e reunião de segurança <br><br> Reprimir as práticas inseguras <br><br> Investigar os acidentes, as causas e aplicar as medidas corretivas."
    },
    {
        question: "Quais condiçoes propiciam o acidente no local de trabalho?",
        answer: "Luminosidade <br><br> Local <br><br> Tempo <br><br> Equipamento <br><br> Homem. <br><br> <strong>(LuLoTEqH)</strong>"
    },
    {
        question: "Dê um exemplo de como Atentar para as Condições e Emprego do Local.",
        answer: "Manter pisos livres de óleo e graxa <br><br> Assegurar iluminação adequada <br><br>  Disponibilizar bancadas e cavaletes para desmontar peças."
    },
    {
        question: "Dê um exemplo de como Atentar para as Condições e Emprego do Material.",
        answer: "Utilizar ferramentas corretamente <br><br> Manter ferramentas limpas <br><br> Guardar ferramentas no local correto"
    },
    {
        question: "Dê um exemplo de como Atentar para a Utilização Das Máquinas.",
        answer: "Manter máquinas ajustadas e bem manutenidas <br><br> Respeitar sinais de alerta e segurança <br><br> Usar EPIs adequados."
    },
    {
        question: "Dê um exemplo de como Atentar para os Cuidados e Ações de Pessoal.",
        answer: "Cobrar o uso de EPIs <br><br> Divulgar planos de prevenção de acidentes, segurança e combate a incêndio <br><br>Instruir e conscientizar sobre segurança."
    },
    {
        question: "O que deve ser mantido disponível na máquina para o operador?",
        answer: "O manual do operador."
    },
    {
        question: "O que deve ser amplamente divulgado na oficina?",
        answer: "O Plano de Prevenção de Acidentes, o Plano de Segurança e o Plano de Combate a Incêndio."
    },
    {
        question: "Como avaliar o grau de segurança de uma oficina?",
        answer: "Observando condições ambientais, infraestrutura, equipamentos e ferramentas, conforto e segurança."
    },
    {
        question: "Quais fatores devem ser considerados na avaliação de segurança?",
        answer: "Excesso de calor ou frio,<br><br> produtos químicos danosos,<br><br> tipo da construção,<br><br> condições dos equipamentos,<br><br> máquinas e ferramentas,<br><br> resíduos sólidos,<br><br> dispositivos de segurança,<br><br> iluminação,<br><br> pavimento,<br><br> revestimento,<br><br> ventilação e conforto."
    }
];

const flashcardsContainer = document.getElementById('flashcards');

flashcards.forEach((flashcard, index) => {
    const card = document.createElement('div');
    card.className = 'flashcard';
    card.innerHTML = `
        <div class="flashcard-content" id="flashcard-${index}">
            <p>${flashcard.question}</p>
        </div>
    `;
    card.addEventListener('click', () => {
        const content = document.getElementById(`flashcard-${index}`);
        content.innerHTML = `<p>${flashcard.answer}</p>`;
    });
    card.addEventListener('mouseleave', () => {
        const content = document.getElementById(`flashcard-${index}`);
        content.innerHTML = `<p>${flashcard.question}</p>`;
    });
    flashcardsContainer.appendChild(card);
});


