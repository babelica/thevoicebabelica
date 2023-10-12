const singersList = document.getElementById("singers-list");
const skippedList = document.getElementById("skipped-list");
const singerNameInput = document.getElementById("singer-name");

function addSinger() {

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.className = "remove-button";
    removeButton.onclick = function() {
        singersList.removeChild(listItem);
    };
    listItem.appendChild(removeButton);
}

}

function skipSinger() {
    const currentSinger = singersList.firstChild;
    if (currentSinger) {
        singersList.removeChild(currentSinger);
        const skippedItem = document.createElement("li");
        skippedItem.textContent = currentSinger.textContent;
        skippedList.appendChild(skippedItem);
    } else {
        alert("Não há cantores na lista para pular.");
    }
}
