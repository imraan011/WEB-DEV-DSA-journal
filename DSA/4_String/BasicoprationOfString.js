let s = " My Name Is Ishtikhar Khan"

console.log(s.length);
console.log(s.slice(-10 , -2)); // can be nagetive index
console.log(s.substring(2,6)); //no negetive index // start and end 
console.log(s.substr(4,6)); // start and length upto youneed
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.concat(" Fuck Ye Hai Ka"));
console.log(s.trim());
console.log(s.indexOf("Is"));
console.log(s.lastIndexOf("Ishtikhar")); ///search from the last index
console.log(s.includes("Khan"));
console.log(s.startsWith(" "));
console.log(s.endsWith("an"));
console.log(s.replace("ame" , "aam")); ///replase the first occurance
console.log(s.split(" "));
console.log(s.replaceAll(" " , "."));
console.log(s.charAt(4));
console.log(s.charCodeAt(0));