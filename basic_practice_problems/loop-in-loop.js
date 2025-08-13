// Loop in Loop Practice..

let loop = () => {
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            console.log(`I = ${i}, J = ${j}`)
        }
    }    
}

// loop()



// i = 0 => j < i is false, so inner loop won't run first time
let secondLoop = () => {
    // Outer Loop
    for(let i = 0; i < 3; i++){
        // inner Loop runs until j < i
        for(let j = 0; j < i; j++){
            console.log(`I = ${i}, J = ${j}`)
        }
    }
}

// secondLoop()


let thirdLoop = () => {
    for(let i = 0; i < 5; i++){
        for(let j = 0; j <= i; j++){
            console.log(`I = ${i}, J = ${j}`)
        }
    }
}


// thirdLoop()


let fourthLoop = () => {
    for(let i = 0; i < 3; i++){
        for(let j = i; j > 0; j--){
            console.log(`I = ${i}, J = ${j}`)
        }
    }
}


// fourthLoop()


let fifthLoop = () => {
    for(let i = 5; i > 0; i--){
        for(let j = 0; j < i; j++){
            console.log(`I = ${i}, J = ${j}`)
        }
    }
}

fifthLoop()