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

// more event handaller using direct fuction
function changingLingBtn(){
    const defaultText = document.getElementById('default-text');
    defaultText.innerText = "Hello, My name is Md.Rakib. Now I'm learing event handaller topic form ES6";

};

// Using event listener
document.getElementById('btn-update').addEventListener('click', function(){
    const inputFiled = document.getElementById('input-field');
    const inputText = inputFiled.value;
    const updateText = document.getElementById('update-text-line');
    updateText.innerText = inputText;
    inputFiled.value = ' ';
});

// get the commnet and display it 
document.getElementById('btn-post').addEventListener('click', function(){
    // get the comment text
   const CommentBox = document.getElementById('comment-text');
   const NewCommentText = CommentBox.value;
    // display the comment 
    const commnetContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = NewCommentText;
    // append the comment into the comment contaier
    commnetContainer.appendChild(p);
    CommentBox.value = '';

});

// like as github delete confirmation project
document.getElementById('input-filed').addEventListener('keyup', function(event){
    const filedText = (event.target.value);
    const deleteBtn = document.getElementById('btn-delete');
    if(filedText === 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }

});
document.getElementById('btn-delete').addEventListener('click', function(){
    const filedText =  document.getElementById('input-filed');
    const secretText = document.getElementById('screet-text');
    secretText.style.display = 'none';
    filedText.value = ' ';
});