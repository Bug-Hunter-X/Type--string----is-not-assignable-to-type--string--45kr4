function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User"];
console.log(greeter(user[0])); // Solution 1: Accessing the first element of the array

// Solution 2:  If you need to handle multiple names you could modify the greeter function to accept an array
function greeterMultiple(people: string[]): string {
  return "Hello, " + people.join(', ');
}

console.log(greeterMultiple(user));