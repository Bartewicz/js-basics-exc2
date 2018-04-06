var randomNumber = parseInt(prompt("What's your number?", "0"), 10)

var guessTheNumber = randomNumber === 1 ? 'Your number is 1' :
    randomNumber === 2 ? 'Your number is 2' :
        randomNumber === 3 ? 'Your number is 3' :
            randomNumber === 4 ? 'Your number is 4' :
                randomNumber === 5 ? 'Your number is 5' :
                    randomNumber === 6 ? 'Your number is 6' :
                        randomNumber === 7 ? 'Your number is 7' :
                            randomNumber === 8 ? 'Your number is 8' :
                                randomNumber === 9 ? 'Your number is 9' :
                                    randomNumber === 10 ? 'Your number is 10' :
                                        'I dont know what your number is, man'

alert(guessTheNumber)

