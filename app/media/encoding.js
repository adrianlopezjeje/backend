// Enconding functions

// Import modules
const child_process = require('child_process');

// Encode a input book cover file to a output destination
module.exports.normalize = (imageFileName, outputFileName) => {
  return new Promise((resolve, reject) => {
    const command = `ffmpeg -y -i ${imageFileName} ${outputFileName}`;

    // Transcode the input cover file
    child_process.exec(command, (err, stdout, stderr) => {
      if (err) {
        return reject(new Error(`Transcoding error. ${stderr}`));
      }
      resolve(outputFileName);
    });
  });
}