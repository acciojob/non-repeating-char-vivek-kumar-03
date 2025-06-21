function firstNonRepeatedChar(str) {
    // Create an object to store character counts
    const charCount = {};
    
    // First pass: count occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Second pass: find the first character with count 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    // If no non-repeating character found
    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));