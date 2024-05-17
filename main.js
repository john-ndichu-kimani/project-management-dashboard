let projectName = document.querySelector('#name');
let description = document.querySelector('#description');
let start = document.querySelector('#start-date');
let end = document.querySelector('#end-date');

let createForm = document.querySelector('.create-form');

let projects = [];

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let project_name = projectName.value.trim();
    let project_description = description.value.trim();
    let project_start = start.value.trim();
    let project_end = end.value.trim();

    if (project_name !== '' && project_description !== '' && project_start !== '' && project_end !== '') {
        let project = {
            project_name: project_name,
            project_description: project_description,
            project_start: project_start,
            project_end: project_end,
        };

    
     projects.push(project);
     console.log(projects);

     displayProjects();

    
    }
});


