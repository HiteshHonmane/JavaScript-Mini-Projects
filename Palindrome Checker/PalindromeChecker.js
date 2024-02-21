
// Palindrome Checker:
// Build a function that checks whether a given string is a palindrome (reads the same backward as forward). Use if-else statements to display whether the input string is a palindrome or not.

let a = 'rohor'

function PalindromeChecker(str){

    reversedstr = str.split('').reverse().join('')

    return reversedstr == str

}
if (PalindromeChecker(a)){
    console.log(`${a} is a palidrome`)

}else{
    console.log(`${a} is not palidrome`)
}
