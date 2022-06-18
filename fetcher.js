const request = require('request');
const fs = require('fs');
const args = process.argv;

const conn = function (URL, PATH) {
  request(URL, (error, response, body) => {

    if (error) {
      console.log('error:', error); // Print the error if one occurred
    } else if (response.statusCode === 404) {
      console.log('statusCode:', response && response.statusCode); // Print the response status code if it is 404.
    }

    const content = body;

    fs.writeFile(PATH, content, err => {

      if (err) {
        console.error(err);
      }
      // File written successfully
    });
    // Print downloaded resource size and local path on your machine
    console.log(`Downloaded and saved ${body.length} bytes to ${PATH}`)

  });
}

conn(args[2], args[3])