/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazinearr = magazine.split('');
    for(let i = 0; i<ransomNote.length;i++){
        if(!magazinearr.includes(ransomNote[i])) return false;
        const index = magazinearr.indexOf(ransomNote[i]);
        magazinearr.splice(index,1);
    }
    return true;
}