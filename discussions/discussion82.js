/*
Convert the following callback-based program to a Promise-based program:

function upload(url) {
  console.log(`Uploading the picture ${url} ...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve(url);
      } else {
        reject(url);
      }
    }, 1000);
  });
}

let URL = "https://www.javascripttutorial.net/pic.jpg";

upload(URL)
  .then((url) => console.log(`Processing the picture ${url}`))
  .catch((url) => console.log(`The URL ${url} is not valid`));
*/

let URL = "https://www.javascripttutorial.net/pic.jpg";
let upload=(url, work)=>{
    console.log(`uploading the url ${url}`);
    return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(url){
            resolve(work(url));
        }
        else{
            reject(url);
        }
    },2000)
    })
}
async function process()
 {
 try{
    await upload(URL, (url) => {console.log(`processing the ${url}`)})
  }
 catch(error)
  {
    console.log("error in accessing the link", error);
  }

 }
process()