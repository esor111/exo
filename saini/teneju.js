function isAnagram(str1, str2){
    if(str1.length != str2.length){
        return false
    }
    counter={}
    for(letter of str1){
    counter[letter]=(counter[letter] || 0)+1
    console.log(counter[letter])
    }
    }
    
    
    isAnagram('hello', 'llheo')
    