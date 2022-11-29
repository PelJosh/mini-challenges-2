function removeDuplicates(obj) {
  let chars = ['A','B','B','C','A','C','A','B'];
  let duplicateChars = [];
  chars.forEach((c) => {
    if(!duplicateChars.includes(c)) {
      duplicateChars.push(c);
    }
  })
}

module.exports = removeDuplicates;
