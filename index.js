//const gifts = ["teddy bear", "drone", "doll"];

/*function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);

    }

    return gifts;
}

<!-- wrapGifts(gifts);*/

const gifters = ['Lisa', 'Kaitlin', 'Jan'];
const occasion = 'surprise';


function writeCards(gifters, occasion) {
    let messages = [];
    for (let i = 0; i < gifters.length; i++) {
        messages.push(`Thank you, ${gifters[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages


}


function countDown(n) {
    while (n > -1) {
        console.log(n);
        n--;

    }

}

