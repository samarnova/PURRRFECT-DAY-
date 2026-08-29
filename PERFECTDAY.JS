function addInput() {
    let input = document.getElementById("userInput").value;

    if (input.trim() === "") {
        alert("Please write something first!");
        return;
    }

    document.getElementById("output").innerHTML +=
        "<p>" + input + "</p>";

    document.getElementById("userInput").value = "";
}
