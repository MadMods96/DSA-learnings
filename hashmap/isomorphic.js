/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let Smap = {};
    let Tmap = {};
    
    for(let i = 0; i<s.length; i++){
        if(!(s[i] in Smap) && !(t[i] in Tmap)){
            Smap[s[i]] = t[i];
            Tmap[t[i]] = true;
        }
        if(t[i] != Smap[s[i]]){
            return false;
        }
    }
    return true
};
//isomorphic means if we given a,b,c and x,y,z then here a is refrenced to z and so on if there is a next occurence of a then we will match with it's
refrence if it is same then continue or else we will return false.
