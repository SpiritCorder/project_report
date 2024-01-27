const fs = require('fs');

const rawBuffer = fs.readFileSync('projects.json');

const projectsData = JSON.parse(rawBuffer.toString())

const projectsDataModified = projectsData.map(project => {
    
    if(project.id <= 30) {
        const domains = project.domains.split(', ');
        let str = "";
        domains.forEach((val, index) => {
            if(index !== domains.length - 1) {
                str += `${val}|`
            } else {
                str += val
            }
        })
        const skills = project.skills.split(', ')
        let str2 = "";
        skills.forEach((val, index) => {
            if(index !== skills.length - 1) {
                str2 += `${val}|`
            } else {
                str2 += val
            }
        })
        return {...project, domains: str, skills: str2}
    } else {
        return project;
    }
})

console.log(projectsDataModified)

fs.writeFileSync('projects_update.json', JSON.stringify(projectsDataModified))


