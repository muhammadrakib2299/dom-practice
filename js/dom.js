// getElementsByTagName
const title=document.getElementsByTagName('h1');
console.log(title);
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

// getEelemntById
const basicProjectList = document.getElementById('basic-procets');
console.log(basicProjectList);

// getElementsByClassName
console.log(document.getElementsByClassName('Advanced-project'));
const AdvancedProjects = document.getElementsByClassName('Advanced-project');
for(const li of AdvancedProjects){
    console.log(li.innerText);
}

// querySelectorAll
const intermidateProjects = document.querySelectorAll('.intermidate-projects li');
console.log(intermidateProjects);

// querySelector
const intermidateProject = document.querySelector('.intermidate-projects li');
console.log(intermidateProject);


// Appendchild 
const ProjectsList = document.getElementById('advanced-project-list');
const projectItem = document.createElement('li');
projectItem.innerText = "Massenger Chat application";

// add the child into the list 
ProjectsList.appendChild(projectItem);

// Event Handaller 

// onclick event 1
const BlueBtn = document.getElementById('make-blue-btn');
BlueBtn.onclick = function (){
    document.body.style.backgroundColor = 'blue';
}


// on click event 2
const makeRedBtn = document.getElementById('make-red-btn');
makeRedBtn.addEventListener('click', makeRed)
// creating function
function makeRed(){
    document.body.style.backgroundColor = 'Red';
}

// on click event 3
const makeGreenBtn = document.getElementById('make-green-btn');
makeGreenBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'Green';
});
 
// on click event 4 for alawys use
document.getElementById('make-orrange-btn').addEventListener('click', function(){
    document.body.style.backgroundColor = 'orange';
});