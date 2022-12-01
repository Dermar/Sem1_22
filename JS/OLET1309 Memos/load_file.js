var displayBox = document.getElementById("display_box");
var inputChooseFile = document.getElementById("input_choose_file");
var btnLoadFile = document.getElementById("btn_load_file");

// Make sure that the display box never exceeds 140 words
displayBox.addEventListener("input", checkLength);
function checkLength() {
    var text = displayBox.value;
    if (text.split(" ").length > 140){
        alert("Memo has exceeded 140 words. No more words allowed.");
        displayBox.value = text.split(" ", 140).join(" "); 
    }
     
}

btnLoadFile.addEventListener("click", loadChosenFile);
function loadChosenFile() {
    var chosenFile = inputChooseFile.files[0];
    if (chosenFile["name"].split(".").at(-1) != "memo") {
        alert("Invalid Memo File!");
        return;
    }

    var reader = new FileReader();
    reader.onload = function(e) {
        // Check if the file is a plain text file by checking that each letter is ASCII
        for (var i = 0; i < reader.result.length; i++){
            if (!/^[\u0000-\u007f]*$/.test(reader.result.split("")[i]) == true){
                alert("Chosen file is not plain text.");
                return;
            }
        }
        // Alert the user if the file is longer than 140 words
        if (reader.result.split(" ").length > 140){
            alert("File longer than 140 words! Please choose a new file.");
            return;
        }
        
        // Otherwise display the file
        displayBox.value = e.target.result;
    };
    reader.readAsText(chosenFile);
}

// NOT WORKING: Allow the user to save their loaded file (adapted from YouTube tutorial at: https://www.youtube.com/watch?v=8EcBJV0sOSU&list=WL&index=27&t=195s)
var saveOGFile = document.getElementById("update_file");
saveOGFile = addEventListener("click", async function(){
    let stream = await chosenFile.createWritable();
    await stream.write(displayBox.value);
    await stream.close();
    alert("Changes saved");
});

// Allow the user to create a new file
let fileHandle;
var createFile = document.getElementById("create_file");
createFile.addEventListener("click", button);
async function button() {
    const memo =  {
        types: [{
        description: 'Memo file',
        accept: {'text/plain': ['.memo']},
        }],
    };

    fileHandle = await window.showSaveFilePicker(memo);

    if (fileHandle["name"].split(".").at(-1) != "memo") {
        alert("Invalid Memo File!");
        return;
    }
}

// Allow the user to save their new file (adapted from YouTube tutorial at: https://www.youtube.com/watch?v=8EcBJV0sOSU&list=WL&index=27&t=195s)
var saveFile = document.getElementById("save_file");
saveFile.addEventListener("click", async function(){
    // Save the box's text to a given file
    let stream = await fileHandle.createWritable();
    await stream.write(displayBox.value);
    await stream.close();
    alert("Changes saved");
});