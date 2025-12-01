const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = {
  small: 400,
  medium: 800,
  large: 1200,
  xlarge: 1800
};

const densities = [1, 2];

const inputDir = "./images-original";
const outputDir = "./images";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

Object.keys(sizes).forEach(size => {
  if (!fs.existsSync(`${outputDir}/${size}`))
    fs.mkdirSync(`${outputDir}/${size}`);
});

fs.readdirSync(inputDir).forEach(file => {
  densities.forEach(density => {
    Object.entries(sizes).forEach(([name, width]) => {
      const outputPath = `${outputDir}/${name}/${path.parse(file).name}-${density}x.jpg`;

      sharp(`${inputDir}/${file}`)
        .resize(width * density)
        .jpeg({ quality: 80 })
        .toFile(outputPath)
        .then(() =>
          console.log(`✔ ${outputPath} creado`)
        )
        .catch(err => console.error(err));
    });
  });
});
