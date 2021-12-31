const express = require("express");
const router = express.Router();

const sharp = require("sharp");
console.log("started");

const conversion = async (type, width = 400, height = 400, g) => {
  console.log(g);
  const num = Math.floor(Math.random() * 5 + 1);

  const data = await sharp(`${type}/${num}.jpg`)
    .resize(width, height)
    .grayscale(g)
    .toBuffer();
  //   console.log(data);
  return data;
};

router.get("/", async (req, res) => {
  res.send(result);
});
router.get("/flower", async (req, res) => {
  let g = req.query.g === undefined ? false : !req.query.g;

  let w = !req.query.w ? 400 : req.query.w;
  let h = !req.query.h ? 400 : req.query.h;
  res.header("Content-Type", "image/jpeg");
  const result = await conversion("flowers", Number(w), Number(h), g);
  res.send(result);
});
router.get("/furnitures", async (req, res) => {
  let g = req.query.g === undefined ? false : !req.query.g;

  let w = !req.query.w ? 400 : req.query.w;
  let h = !req.query.h ? 400 : req.query.h;

  res.header("Content-Type", "image/jpeg");
  const result = await conversion("furnitures", Number(w), Number(h), g);
  res.send(result);
});

router.get("/houses", async (req, res) => {
  let g = req.query.g === undefined ? false : !req.query.g;

  let w = !req.query.w ? 400 : req.query.w;
  let h = !req.query.h ? 400 : req.query.h;

  res.header("Content-Type", "image/jpeg");
  const result = await conversion("houses", Number(w), Number(h), g);
  res.send(result);
});
router.get("/computer", async (req, res) => {
  let g = req.query.g === undefined ? false : !req.query.g;
  let w = !req.query.w ? 400 : req.query.w;
  let h = !req.query.h ? 400 : req.query.h;

  res.header("Content-Type", "image/jpeg");
  const result = await conversion("computer", Number(w), Number(h), g);
  res.send(result);
});
module.exports = router;
