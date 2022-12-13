var stringHandsOn=function() {

    var str="     Hey you are doing good, keep it up     ";
    
    console.log(`The given string is:- ${str}`);
            
    console.log(`The length of the given string is:- ${str.length}`);
     
    var trim = str.trim();
    console.log(`After removing extra spaces:- ${trim}`);
    
    console.log(`Total deleted spaces are: ${str.length-trim.length}`);
    
    
    console.log(`First char is "${trim.charAt(0)}" and Last char is "${trim.charAt(trim.length-1)}"`);
    
    var wordsInSentence = trim.split(" ");
    console.log(`count of total words available string ${ wordsInSentence.length}`);
    
    
    console.log(`index of word "good" is ${trim.indexOf("good")}`);
    
    console.log(`substring staring from index 22 is- ${trim.substring(22,trim.length-1)}`);
    
    console.log(`slice staring from index 22 is- ${trim.slice(22,trim.length-1)}`);
    
    console.log(`is string ends with word "up"-  ${trim.endsWith("up")}`);
    
    console.log(`is string sart with word "hey"-  ${trim.startsWith("hey")}`);
    }
    stringHandsOn();