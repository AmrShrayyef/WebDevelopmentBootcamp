function whoPaying(names) {
    let numberOfPeople = names.length; // How many names in my array
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople); // Select a random person from that list
    let randomPerson = names[randomPersonPosition]; // Pick a random person
    return randomPerson + " is paying!";
}

// Example usage:
let namesArray = ["Amr", "Ali", "Sara", "Noor", "Omar"]; // List of names
let result = whoPaying(namesArray); // Call the function
console.log(result); // Display the result