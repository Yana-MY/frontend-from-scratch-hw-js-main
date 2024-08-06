// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a,b,c) {
    if (a>b && a>c) {
        return a   
    } if (b>a && b>c) {
        return b
    }if (c>a && c>b) 
    return c
    }

console.log(findLargest(10,5,4));