function challenge4(text, char) {
    count = 0;
    for (i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(challenge4("aaa bb a", 'a'));
