/*For each of the exercises below, assume you are starting with the following programming object.

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
Write the command to add the language "Go" to the end of the languages array.
Change the difficulty to the value of 7.
Using the delete keyword, write the command to remove the jokes key from the programming object.
Write the command to add a new key called isFun and a value of true to the programming object.
Using a loop, iterate through the languages array and console.log all of the languages.
Using a loop, console.log all of the keys in the programming object.
Using a loop, console.log all of the values in the programming object.*/

       
    let programming = {
        languages: ["JavaScript", "Python", "Ruby"],
        isChallenging: true,
        isRewarding: true,
        difficulty: 8,
        jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
    };

    programming.languages.push("go");
    console.log(programming.languages);

    programming.difficulty = 7;
    console.log(programming)

    delete programming.jokes;
    console.log(programming);

    programming["isFun"] = true;
    console.log(programming)

    for(let i of programming.languages){
        console.log("languages-> "  + i);
    }
    for(keys in programming){
    console.log(`keys-> ${keys}`);
   }


    for(keys in programming){
        console.log(`values ->${programming[keys]}`)
    }