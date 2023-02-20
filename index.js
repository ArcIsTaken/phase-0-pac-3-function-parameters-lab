//1 parameter function
function introduction(name){
    return (`Hi, my name is ${name}.`);
}
console.log(introduction("Riley"));

// 2 parameter function
function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
console.log(introductionWithLanguage("Riley","JavaScript"));

//optional parameter
function introductionWithLanguageOptional (name, language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
console.log(introductionWithLanguageOptional("riley"));