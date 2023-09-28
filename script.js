const token_containers = document.getElementsByClassName("columnBlocks");
const createBtn = document.getElementsByClassName("createBtn");
const addIssueBtn = document.getElementsByClassName("addIssue");
console.log(addIssueBtn);
for(let i=0; i<token_containers.length; i++){
    token_containers[i].addEventListener("dragover", handleDragOver)
}
for(let i=0; i<createBtn.length; i++){
    // createBtn[i] is a single button
    createBtn[i].addEventListener("click", ShowTextAreaDiv);
    addIssueBtn[i].addEventListener("click", createIssueCard)
}

function ShowTextAreaDiv(event){
    //Approach 2 we toggle the text area element in div on button click
    const cardInitiateDiv = event.target.previousElementSibling;
    cardInitiateDiv.classList.toggle("hide");
    cardInitiateDiv.children[0].focus();// focus directly to text area so user can input 
}

function createIssueCard(event){
    const currentCardContainer = event.target.parentNode.previousElementSibling;
    const currentTextArea = event.target.previousElementSibling;
    const currentInitiateDiv = event.target.parentNode;
    let issueText = currentTextArea.value;
    const card = document.createElement("div");
    card.classList.add("card");
    card.draggable = "true";
    card.innerHTML = `
        <div>${issueText}</div>
        <button onclick="handleDelete(this)" ><span class="material-symbols-outlined">
        delete
        </span></button>
    `;
    currentCardContainer.appendChild(card);
    currentTextArea.value = "";
    currentInitiateDiv.classList.toggle("hide");

    // Add the dragstart event listener to the created card
    card.addEventListener("dragstart", handleDragStart);
    card.addEventListener("dragend", handleDragEnd);

}

function handleDelete(delBtnRef){
    delBtnRef.parentNode.remove();
}

function handleDragStart(event){
    // console.log(event.target);
    const draggedCard = event.target;
    console.log("drag started");
}

function handleDragEnd(event){
    const draggedCard = event.target;
    console.log("drag ended");

}

function handleDragOver(event){
    event.preventDefault();
    console.log("dragged over");
}