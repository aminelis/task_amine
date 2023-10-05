function LongestWordWithMostVowels(sentence) {
    // Split the sentence into words and remove non-English letters
    const words = sentence.split(/\s+/).map(word => word.replace(/[^a-zA-Z]/g, ''));
    
    let longestWord = '';
    let maxWrdLength = 0;
    let maxVwlCount = 0;
    
    // Iterate through the words
    for (const word of words) {
      // Calculate the length of the word and the count of vowels
      const wordLength = word.length;
      const vowelCount = (word.match(/[aeiouAEIOU]/g) || []).length;
  
      // Check if this word is longer or has more vowels
      if (wordLength > maxWrdLength || (wordLength === maxWrdLength && vowelCount > maxVwlCount)) {
        longestWord = word;
        maxWrdLength = wordLength;
        maxVwlCount = vowelCount;
      }
    }
  
    return longestWord;
  }
  
  const inputSentence = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
  const result = LongestWordWithMostVowels(inputSentence);
  console.log(result); // Output: "experience"
  