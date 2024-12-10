const formContainer = document.getElementById('form-container');
const tableContainer = document.getElementById('table-container');
const clientForm = document.getElementById('client-form');
const clientData = document.getElementById('client-data');
const backButton = document.getElementById('back-button');

// Envio do formulário
clientForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Pegar valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const observations = document.getElementById('observations').value;

    // Atualiza a tabela com os dados
    clientData.innerHTML = `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${observations}</td>
        </tr>
    `;

    // Transição: esconder formulário e mostrar tabela
    formContainer.classList.add('fade-out');
    setTimeout(() => {
        formContainer.classList.add('hidden');
        tableContainer.classList.remove('hidden');
        tableContainer.classList.remove('fade-out');
        tableContainer.classList.add('fade-in');
    }, 500);
});

// Botão voltar
backButton.addEventListener('click', () => {
    // Resetar o formulário
    clientForm.reset();

    // Transição: esconder tabela e mostrar formulário
    tableContainer.classList.add('fade-out');
    setTimeout(() => {
        tableContainer.classList.add('hidden');
        formContainer.classList.remove('hidden');
        formContainer.classList.remove('fade-out');
        formContainer.classList.add('fade-in');
    }, 500);
});
