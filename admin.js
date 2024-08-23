document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const task = document.getElementById('task').value;
    const documentFile = document.getElementById('document').files[0].name;
let documents = JSON.parse(localStorage.getItem('documents')) || [];
    documents.push({ task, documentFile });
    localStorage.setItem('documents', JSON.stringify(documents));

    document.getElementById('upload-message').textContent = 'Task and Document uploaded successfully!';
    document.getElementById('upload-form').reset();
});
