/**
 * Generates a unique name from keywords
 * @param {string[]} keywords - Array of keywords
 * @param {number} [maxLength=50] - Maximum length of the generated name
 * @returns {string} Generated unique name
 */
function generateName(keywords, maxLength = 50) {
    if (!Array.isArray(keywords) || keywords.length === 0) {
      throw new Error('You must provide a non-empty array of keywords');
    }
  
    const shuffled = [...keywords].sort(() => 0.5 - Math.random());
    
    let name = shuffled.join('');
    name = name.slice(0, maxLength);
    name = name.charAt(0).toUpperCase() + name.slice(1);
  
    return name;
  }
  
  module.exports = generateName;