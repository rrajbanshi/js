/*Convert the following callback-based program to a Promise-based program:

function upload(url, successCallback, failureCallback) {
  setTimeout(() => {
    // script to download the picture here
    console.log(`Uploading the picture ${url} ...`);
    !url ? failureCallback(url) : successCallback(url);
  }, 1000);
}

function process(picture) {
  console.log(`Processing the picture ${picture}`);
}

let URL = "https://www.javascripttutorial.net/pic.jpg";

upload(URL, process, (url) => console.log(`The URL ${url} is not valid`));
upload('', process, (url) => console.log(`The URL ${url} is not valid`));*/

