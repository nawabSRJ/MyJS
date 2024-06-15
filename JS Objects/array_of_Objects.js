const users = [
    {userId : 101, fname : "Srajan", gender : "male"},
    {userId : 102, fname : "Aaditya", gender : "male"},
    {userId : 103, fname : "Stuti", gender : "female"}
]
console.log(users)

// using loop to access individually
for(let user of users){
    // console.log(user)
    console.log(user.fname)
}