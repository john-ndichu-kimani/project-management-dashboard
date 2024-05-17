document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('createForm');
    const projectWrapper = document.getElementById('projectWrapper');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const project = {
                name: document.getElementById('name').value,
                description: document.getElementById('description').value,
                startDate: document.getElementById('start-date').value,
                endDate: document.getElementById('end-date').value,
            };

            saveProject(project);
            form.reset();
            alert('Project created successfully!');
            window.location.href = 'all.html';
        });
    }

    function saveProject(project) {
        let projects = localStorage.getItem('projects');
        if (projects) {
            projects = JSON.parse(projects);
        } else {
            projects = [];
        }

        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    function loadProjects() {
        let projects = localStorage.getItem('projects');
        if (projects) {
            projects = JSON.parse(projects);
            projects.forEach(project => displayProject(project));
        }
    }

    function displayProject(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        projectElement.innerHTML = `
            <h1>${project.name}</h1>
            <p>${project.description}</p>
            <div class="dates">
                <p>Start: ${project.startDate}</p>
                <p>End: ${project.endDate}</p>
            </div>
            <button class="view">View Project</button>
            <button class="delete">Delete</button>
        `;

        const deleteButton = projectElement.querySelector('.delete');
        deleteButton.addEventListener('click', () => deleteProject(project, projectElement));

        if (projectWrapper) {
            projectWrapper.appendChild(projectElement);
        }
    }

    function deleteProject(project, projectElement) {
        let projects = JSON.parse(localStorage.getItem('projects'));
        projects = projects.filter(p => p.name !== project.name);
        localStorage.setItem('projects', JSON.stringify(projects));
        projectElement.remove();
    }

    if (projectWrapper) {
        loadProjects();
    }
});
