/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  s = s.split(' ')

  if (pattern.length !== s.length) return false;
  if (new Set(pattern).size !== new Set(s).size) return false;

  let map = new Map()
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])) {
      map.set(pattern[i], s[i])
    }
    if (s[i] !== map.get(pattern[i])) return false;
  }
  return true;

};