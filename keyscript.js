// created on 9/7/22
// USAGE: Open any web browser and copy and paste this program into the console and run it
// Would you Like to Generate your Own Key Phrase?
let isExecuted = confirm('Would you Like to Generate your Own Key Phrase?');
// prompts ok & cancel
console.log(isExecuted); // OK = true, Cancel = false
if (isExecuted === true) {
    var Key1 = Math.floor(Math.random() * 10000);
    var Key2 = Math.floor(Math.random() * 10000);
    var Key3 = Math.floor(Math.random() * 10000);
    var Key4 = Math.floor(Math.random() * 10000);
    const yourKey = (`${Key1}-${Key2}-${Key3}-${Key4}`);
        console.log(`Your randomized Key Phrase is ${yourKey}.`);
    } else if (isExecuted === false) {
        console.log('You did not Generate a Key Phrase');
    }
