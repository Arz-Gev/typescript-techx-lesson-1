//  THE TASK

// Create a TypeScript program that calculates the area of a rectangle using type annotations
// Write a function that takes a variable number of arguments 
// (using rest parameters) and returns their sum
// Create an enum for days of the week and print the current day


// MY SOLUTIOINS


// TASK 1

function rectangleArea( height: number = 0, widht: number = 0 ) :number {
    return height * widht
}


// TASK 2

let arr:number[] = [1,2,7]

function sumOfArguments([...input]: number[]):number{
   
   let sum: number = input.reduce((sum, e)=>{
        return sum+e
    },0)

    return sum
}

console.log(sumOfArguments(arr));


// TASK 3

let date:number = new Date().getDay()

enum dayOfWeek {
 Sunday,
 Monday, 
 Tuesday, 
 Wednesday, 
 Thursday, 
 Friday, 
 Saturday
}

console.log(dayOfWeek[date])
