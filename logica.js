document.addEventListener('DOMContentLoaded', function () {
    // 1. Navegação suave para âncoras
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 2. Preencher projetos dinamicamente
    const projetos = [
        { titulo: 'Projeto 1', descricao: 'Descrição breve do seu primeiro projeto.', link: '#' },
        { titulo: 'Projeto 2', descricao: 'Descrição breve do seu segundo projeto.', link: '#' },
        { titulo: 'Projeto 3', descricao: 'Descrição breve do seu terceiro projeto.', link: '#' }
    ];

    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = '';
        projetos.forEach(function (projeto) {
            const card = document.createElement('a');
            card.className = 'project-card';
            card.href = projeto.link;
            card.innerHTML = '<h3>' + projeto.titulo + '</h3><p>' + projeto.descricao + '</p>';
            projectGrid.appendChild(card);
        });
    }
});