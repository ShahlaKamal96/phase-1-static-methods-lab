class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^\w-\s']/gi, '');
  }

  static titleize(str) {
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !exceptions.includes(words[i].toLowerCase())) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    }
    return words.join(" ");
  }

}
