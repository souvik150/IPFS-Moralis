const Moralis = require("moralis").default;
const fs = require("fs");
require("dotenv").config();

const fileUploads = [
  {
    path: "sih.jpg",
    content: fs.readFileSync("./sih.jpg", { encoding: "base64" }),
  },
];

async function uploadToIpfs() {
  await Moralis.start({
    apiKey: process.env.MORALIS_API_KEY,
  });

  const res = await Moralis.EvmApi.ipfs.uploadFolder({
    abi: fileUploads,
  });

  console.log(res);
}

uploadToIpfs();
