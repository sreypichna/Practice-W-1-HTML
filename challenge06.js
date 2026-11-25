function challenge_6(arr) {
    if (arr.length === 0) {
        return "There is not vote yet";
    }
    let countA = 0;
    let countB = 0;
    let countC = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'A') {
            countA++;
        } else if (arr[i] == 'B') {
            countB++;
        } else if (arr[i] == 'C') {
            countC++;
        }

    }

    max_count = Math.max(countA, countB, countC);
    winners = [];

    if (countA === max_count) {
        winners.push("A");
    }
    if (countB === max_count) {
        winners.push("B");
    }
    if (countC === max_count) {
        winners.push("C");
    }

    if (winners.length === 1) {
        return winners[0] + " is the winner";
    }
    if (winners.length === 2) {
        return winners[0] + " and " + winners[1] + " are both winners";
    }
    return "A, B and C are all winners";
}
console.log(challenge_6(['A', 'B', 'A', 'C', 'A']));