const singersList = document.getElementById("singers-list");
const skippedList = document.getElementById("skipped-list");
const singerNameInput = document.getElementById("singer-name");

function addSinger() {
    const singerName = singerNameInput.value;
    if (singerName) {
        const listItem = document.createElement("li");
        listItem.textContent = singerName;
        singersList.appendChild(listItem);
        singerNameInput.value = "";

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
        const singerName = currentSinger.textContent.replace(/X$/, '');
        const skippedItem = document.createElement("li");
        skippedItem.textContent = singerName;
        skippedList.appendChild(skippedItem);
    } else {
        alert("Não há cantores na lista para pular.");
    }
}
