// const promiseOne = new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     console.log("promiseOne is resolved one");
//     reslove();
//   }, 3000);
// });
// promiseOne.then(function () {
//   console.log("promiseOne is resolved");
// });


//  const one =new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("promiseTwo is resolved");
//     resolve(); // Correct spelling
//   }, 2000);
// });
// one.then(function(){
//     console.log("hello is am consumed");
// })


// new Promise((resolve,reject)=>{
//     setTimeout( function(){
//         console.log("Hello World")
//         resolve()
//     }, 1000)
// }).then(()=>{
//     console.log("Tohid");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({Username:"tohid", password:"1234"})
//     },1000)
// }).then((user)=>{
//     console.log(user);
    
// })

// using then and catch
const four= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
            resolve({username:"Tohid", password:"1234"})
        }
        else{
            reject("something went wrong");
        }
    },1000)
})
four.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log("error occured");
}).finally(()=>{
    console.log("The promise is resolved");
})


// using async and await

const five= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Tohid", password:"1234"})
        }
        else{
            reject("something went wrong");
        }
    },1000)
})
async function  getUser()
{
    try {
        const response = await five;
        console.log(response);
    } catch (error) {
        console.log("error occured");
        
    }
    
}
getUser();

