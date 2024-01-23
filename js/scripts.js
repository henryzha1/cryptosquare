//Step 1: remove all punctuations and spaces and lower case everything
//step 2: turn string into arrays of arrays of length 5
//step 3: create the coded message
function refactorStr(input) {
    input = input.toLowerCase();

}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const input = document.querySelector("input").value;
        refactorStr(input);
    });
})