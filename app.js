// Hello, future software developer! In this exercise, you will practice an array method: **`map`**. 🥳

// You are provided with an array of users where each user has **`firstName`**, **`lastName`**, and **`points`**.

// Your task is to iterate over this array using the **`map`** method and return a new array with new 
// properties **`fullName`** and **`membershipStatus`**, where **`fullName`** is a combination of
//  **`firstName`** and **`lastName`**, and **`membershipStatus`** is **`Premium`** if the user's 
//  points are more than 100, and **`Standard`** otherwise. Print the new array.

const users = [
    { firstName: "Alice", lastName: "Johnson", points: 120 },
    { firstName: "Bob", lastName: "Smith", points: 99 },
    { firstName: "Charlie", lastName: "Brown", points: 180 }
];

const newUsers = users.map(function (user) {                //create variable for new array, newUsers
    return {
        fullName: `${user.firstName} ${user.lastName}`,     //fullName is the first and last name
        membershipStatus: user.points > 100 ? "Premium" : "Standard"  //if points are greater than 100, membershipStatus is Premium, otherise Standard
    };
});

console.log(newUsers);    //print the new array

// 0: {fullName: 'Alice Johnson', membershipStatus: 'Premium'}
// 1: {fullName: 'Bob Smith', membershipStatus: 'Standard'}
// 2: {fullName: 'Charlie Brown', membershipStatus: 'Premium'}