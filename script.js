const singersList = document.getElementById("singers-list");
const skippedList = document.getElementById("skipped-list");
const singerNameInput = document.getElementById("singer-name");

function skipSinger() {
    const currentSinger = singersList.firstChild;
    if (currentSinger) {
        const singerName = currentSinger.textContent.trim();
        singersList.removeChild(currentSinger);
        const skippedItem = document.createElement("li");
        skippedItem.textContent = singerName;
        skippedList.appendChild(skippedItem);
    } else {
        alert("Não há cantores na lista para pular.");
    }
}

}


function skipSinger() {
    const currentSinger = singersList.firstChild;
    if (currentSinger) {
        const singerName = currentSinger.textContent.trim();
        singersList.removeChild(currentSinger);
        const skippedItem = document.createElement("li");
        skippedItem.textContent = singerName;
        skippedList.appendChild(skippedItem);
    } else {
        alert("Não há cantores na lista para pular.");
    }
}
