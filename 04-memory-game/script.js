function shuffleArray(arr) {
    for (let i = 0; i < 2000; i++) {
        const originalIndex = Math.floor(Math.random() * arr.length)
        const destIndex = Math.floor(Math.random() * arr.length);
        const temp = arr[originalIndex];
        arr[originalIndex] = arr[destIndex];
        arr[destIndex] = temp;
    }
}

function drawBoard(board) {
    // create an element dynamically in JavaScript
    for (let b of board) {
        const divElement = document.createElement('div');
        divElement.innerHTML = `<span>${b}</span>`;

        // We can store custom properties (attributes or keys)
        // in the dataset property of any element.
        // (dataset is object)
        divElement.dataset.number = b;
        // instead of divElement.innerHTML = '<span>' + b + '</span>';
        divElement.className = "box";
        const gameboard = document.querySelector("#gameboard");
        gameboard.appendChild(divElement);
    }


}

document.addEventListener("DOMContentLoaded", function () {
    const board = [];
    const revealedCards = [null, null];
    let correctGuesses = 0;
    for (let i = 1; i < 9; i++) {
        board.push(i);
        board.push(i);
    }
    shuffleArray(board);
    drawBoard(board);

    // document.querySelector will only return the first result
    // if there are multiple possible results. In our case
    // querySelectorAll -- it will return all the possible results
    // in an array
    const boxElements = document.querySelectorAll(".box");
    // for (let box of boxElements) {
    //     box.addEventListener("click", function () {
    //         alert("box is clicked!");
    //     })
    // }

    // forEach is called on the array
    // takes on argument, the current element from the array
    boxElements.forEach(function (box) {
        box.addEventListener("click", function (event) {

            if (revealedCards[0] && revealedCards[1]) {

                return;
            }

            // the event parameter is the one parameter
            // of any event handler
            // OR
            // console.log(box.dataset.number);

            // you can call querySelector on an element
            // it will only search within the children of that element
            event.target.querySelector('span').style.visibility = "visible";
            if (revealedCards[0] == null) {
                revealedCards[0] = event.target;
            } else {
                revealedCards[1] = event.target;
                if (revealedCards[0].dataset.number == revealedCards[1].dataset.number) {

                    revealedCards[0].style.backgroundColor = "lightgreen";
                    revealedCards[1].style.backgroundColor = "lightgreen";

                    // if correct answer, set no cards are revealed
                    // so the user can turn up two more cards
                    revealedCards[0] = null;
                    revealedCards[1] = null;
                    correctGuesses++;
                    if (correctGuesses == 8) {
                        alert("You won!");
                    }
                } else {
                    setTimeout(function () {
                        revealedCards.forEach(function (card) {
                            card.querySelector('span').style.visibility = "hidden";
                        });
                        revealedCards[0] = null;
                        revealedCards[1] = null;
                    }, 2000);
                }
            }
        })
    })

})