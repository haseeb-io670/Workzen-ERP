document.addEventListener('DOMContentLoaded', function() {
    const documentsList = JSON.parse(localStorage.getItem('documents')) || [];
    const documentsContainer = document.getElementById('documents-list');

    documentsList.forEach(doc => {
        const docItem = document.createElement('div');
        docItem.innerHTML = `<p>Task: ${doc.task}</p><p>Document: ${doc.documentFile}</p>`;
        documentsContainer.appendChild(docItem);
    });
});
