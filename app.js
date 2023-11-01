const projectsContainer = document.getElementById("projects-list");

const projectList = [];

projects.forEach(function (project, index) {
  const projectDetail = `<li>
  <h3>${project.name}</h3>
  <ul>
    <li>
      <a
        href="${project.view}"
        target="_blank"
        >View</a
      >
    </li>
    <li>
      <a
        href="${project.source}"
        target="_blank"
        >Source</a
      >
    </li>
  </ul>
</li>`;
  projectList.push(projectDetail);
});

console.log(projectList.join(" "));

projectsContainer.innerHTML = projectList.join(" ");
