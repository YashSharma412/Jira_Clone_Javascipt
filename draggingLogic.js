const token_containers = document.getElementsByClassName("columnBlocks");
const detailsObj = { cardRef: null, homeContainerId: "",};


function handleDragStart(event){
    detailsObj.cardRef = event.target;
    detailsObj.homeContainerId = event.target.parentNode.parentNode.id;
    // console.log("the dragged card is:", detailsObj.cardRef);
    // console.log("the home container is:",detailsObj.homeContainerId);
}

function handleOnDrop(event){
    // console.log(event.target.id);
    const  dropContainer = event.target.closest("div.columnBlocks");
    // console.log(dropContainer.id);
    if(dropContainer.id === detailsObj.homeContainerId){
        alert("card dropped in its own container");
        return;
    }
    const cardList = dropContainer.children[1]
    // cardList.appendChild(detailsObj.cardRef);
    cardList.insertBefore(detailsObj.cardRef, cardList.firstChild);

}

for(let i=0; i<token_containers.length; i++){
    token_containers[i].addEventListener("dragover", (dragOverEvent)=>{
        dragOverEvent.preventDefault();
    });
    token_containers[i].addEventListener("drop", handleOnDrop);

}