// const title=document.getElementsByTagName('h1');
// console.log(title)

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}
const basicProjectList = document.getElementById('basic-procets');
// console.log(basicProjectList);

// console.log(document.getElementsByClassName('Advanced-project'));

const AdvancedProjects = document.getElementsByClassName('Advanced-project');
// console.log(AdvancedProjects);
for(const li of AdvancedProjects){
    console.log(li.innerText);
}