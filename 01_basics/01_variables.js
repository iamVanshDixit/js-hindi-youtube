const accountId = 144553
let accountEmail ="vansh@google.com"
var accountPassowrd="12345"
accountCity ="Jaipur"

let accountState;

//accountId =2//not allowed
accountEmail = "hc@c.com"
accountPassword = "456572"
accountCity ="nakur"

console.log(accountId);

/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*run->node 01_basics/01_variables.js*/ 