//Step 1: remove all punctuations and spaces and lower case everything
//step 2: turn string into arrays of arrays of length 8
//step 3: create the coded message
function refactorStr(input) {
    input = input.toLowerCase();
    console.log(input);
    return input.replace(/[.,\/#!$%\^&\*;:{}=\-_`'~()" ]/g,"");
}

function toArray(input) {
    const array = input.split("");
    let output = [];
    for(let i = 0; i < array.length; i += 8) {
        let eight = [];
        for(let j = 0; j < 8; j++) {
            if(!array[i+j]) {
                break;
            } else {
                eight.push(array[i+j]);
            }
        }
        if(eight.length < 8) {
            output.push(eight);
            break;
        } else {
            output.push(eight);
        }
    }
    return output;
}

function toString(input) {
    let str = [];
    let output = "";
    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < input.length; j++) {
            if(!input[j][i]) {
                break;
            } else {
                str.push(input[j][i]);
            }
        }
    }
    for(let i = 0; i < str.length; i++) {
        output = output.concat(str[i]);
        if(output.length % 5 === 0) {
            output = output.concat(" ");
        }
    }
    return output;
}

function cypher(e) {
    e.preventDefault();
    const input = document.querySelector("input").value;
    return toString(toArray(refactorStr(input)));
}

window.addEventListener("load", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const input = document.querySelector("input").value;
        const output = document.createElement("p");
        output.append(cypher(e));
        document.querySelector("body").append(output);
    });
})