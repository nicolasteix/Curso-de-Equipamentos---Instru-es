const flashcards = [
    {
        question: "Cite quais são os fatores mais importantes na prevenção contra acidentes?",
        answer: "<strong>Medidas de Proteção Coletiva</strong>: Implementação de barreiras de segurança em máquinas e equipamentos, priorizando a saúde e integridade física dos trabalhadores. <br><br><strong>Medidas Administrativas ou de Organização do Trabalho:</strong> Estabelecimento de procedimentos seguros e treinamentos regulares sobre segurança no trabalho.<br><br><strong>Medidas de Proteção Individual:</strong> Fornecimento e exigência do uso adequado de Equipamentos de Proteção Individual (EPI), como capacetes, luvas e calçados de segurança, para proteção individual contra riscos específicos."
    },
    {
        question: "Cite um exemplo de medida de proteção coletiva",
        answer: "Instalação de dispositivos de segurança em máquinas, como grades de proteção, dispositivos de parada de emergência e sensores de proximidade para evitar o acesso a áreas perigosas durante a operação.<br><br>Implementação de sistemas de ventilação adequados para controlar a exposição a poeiras e vapores tóxicos em ambientes de trabalho."
    },
    {
        question: "Cite um exemplo de medida administrativa ou de proteção do trabalho",
        answer: "Estabelecimento de procedimentos padronizados de operação e manutenção de máquinas, incluindo instruções claras sobre como iniciar, operar, ajustar e parar o equipamento de forma segura.<br><br>Programação regular de inspeções preventivas para identificar e corrigir potenciais falhas ou condições inseguras antes que causem acidentes."
    },
    {
        question: "Cite um exemplo de medida de proteção individual",
        answer: "Uso de EPI's"
    },
    {
        question: "Quais são os principais tipos de Equipamentos de Proteção Individual (EPI)?",
        answer: "Proteção para a Cabeça<br> Olhos e Face<br> Auditiva<br> Respiratória<br> Para o Tronco<br> Membros Superiores e Inferiores<br> Proteção para o Corpo Inteiro<br> Proteção Contra Quedas."
    },
    {
        question: "Quais são os tipos de proteção auditiva mencionados na NR 12 e nos textos da instrução?",
        answer: "Protetores auriculares, como os circum-auriculares, de inserção e semi-auriculares."
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
