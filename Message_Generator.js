//You are the doing a great job.
//No matter what adversities come your way, strive to be the best you can be.
//If at first you don't succeed, try and try again.
//Treat the ones you love the way you would want to be treated.
//Nothing is more impotant than family, cherish them and love them without compromise.

//You are
//Your Mum is
//Your boss is

//a stupid idiot who
//an amazing person who
//a sexy person who

//likes to run around naked.
//wets the bed every night.
//couldn't organise a piss up in a brewery.

messageOne = ["You are ", "Your Mum is ", "Your boss is ", "Your dog is ", "Your head is ", "Your brother is "]
messageTwo = ["idiotic and ", "amazing but ", "sexy and ", "ugly af and ", "stupid and ", "the best and "]
messageThree = ["likes to run around naked.", "wets the bed every night.", "couldn't organise a piss up in a brewery.", "has got the biggest ears in the world.", "has got a tiny penis", "also a sandwich short of a picnic"]
randomNumberOne = Math.floor(Math.random() * 6);
randomNumberTwo = Math.floor(Math.random() * 6);
randomNumberThree = Math.floor(Math.random() * 6);




    function lineOne() {

        if (randomNumberOne === 0) {
            return messageOne[0]
        } else if (randomNumberOne === 1) {
            return messageOne[1]
        } else if (randomNumberOne === 2) {
            return messageOne[2]
        } else if (randomNumberOne === 3) {
            return messageOne[3]
        } else if (randomNumberOne === 4) {
            return messageOne[4]
        } else if (randomNumberOne === 5) {
            return messageOne[5]
        } else {
            return messageOne[6] 
        }
    }

    function lineTwo() {

        if (randomNumberOne === 0) {
            return messageTwo[0]
        } else if (randomNumberTwo === 1) {
            return messageTwo[1]
        } else if (randomNumberTwo === 2) {
            return messageTwo[2]
        } else if (randomNumberTwo === 3) {
            return messageTwo[3]
        } else if (randomNumberTwo === 4) {
            return messageTwo[4]
        } else if (randomNumberTwo === 5) {
            return messageTwo[5]
        } else {
            return messageTwo[6] 
        }
    }


    function lineThree() {

        if (randomNumberThree === 0) {
            return messageThree[0]
        } else if (randomNumberThree === 1) {
            return messageThree[1]
        } else if (randomNumberThree === 2) {
            return messageThree[2]
        } else if (randomNumberThree === 3) {
            return messageThree[3]
        } else if (randomNumberThree === 4) {
            return messageThree[4]
        } else if (randomNumberThree === 5) {
            return messageThree[5]
        } else {
            return messageThree[6] 
        }
    }

//randomMessage()
    console.log(lineOne() + lineTwo() + lineThree());
