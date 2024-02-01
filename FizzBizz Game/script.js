//Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz." For numbers which are multiples of both three and five, print "FizzBuzz." Use loops, if-else statements, and operators to achieve this.


function FizzBuzz() {
    //Using For loop for print numbers till 100.
    for(let i = 1; i<=100; i++){
       
        //usuing If else ladder For multiple conditiondions.
       if(i % 3 == 0 && i% 5==0){
        console.log("FizzBizz")
       }
        else if(i%3== 0){
            console.log("Fizz")

        }
        else if(i%5==0){
            console.log("Bizz")
        }
        else{
            console.log(i)
        }
    }
    
}
FizzBuzz();
