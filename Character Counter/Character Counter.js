//Create a program that takes a string as input and uses a function to count the number of occurrences of each character. Display the results using if-else statements.

let input = "Hitesh"

function CharacterCounter() {
  
    let charOccurance = {}

    for(let i = 0; i<inputStr.length ;i++){
        let currentChar = inputStr[i];

        if (charOccurance[currentChar]) {
            charOccurance[currentChar]++;
        }else{
            charOccurance[currentChar]=1;
        }
    }

    for(let char in charOccurance){
        if(charOccurance[char]==1){
            console.log(`Character '${char}' occurs 1 time.`);
        }else{
            console.log(`Character "${char}" occurs "${charOccurance[char]} times"`)
        }
    }
}



let inputStr= "Hiteshhonmane"
CharacterCounter(inputStr);
