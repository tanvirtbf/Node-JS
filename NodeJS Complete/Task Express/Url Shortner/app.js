import express from 'express'
import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';
import fs from 'fs/promises'
import path from 'path'

const app = express()

const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join("data", "links.json");

// app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

app.get("/", async (req, res) => {
  try {
    const file = await fs.readFile(path.join("views", "index.html"));
    const links = await loadLinks();

    const content = file.toString().replaceAll(
      "{{ shortened-urls }}",
      Object.entries(links)
        .map(
          ([shortCode, url]) =>
            `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> -> ${url} </li>`
        )
        .join("")
    );
    return res.send(content)
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error!");
  }
});

app.get("/:shortCode", async (req, res) => {
  try {
    const {shortCode} = req.params
    const links = await loadLinks();

    if(!links[shortCode]) return res.status(404).send('404 error occured')

    return res.redirect(links[shortCode])
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error!");
  }
});


app.post('/', async (req, res) => {
  try {
    const { url, shortCode } = req.body;
    const links = loadLinks()
    const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
    if(links[finalShortCode]){
      return res.send('ShortCode are already Exists!')
    }
    links[finalShortCode] = url
    await saveLinks(links)
    return res.redirect('/')
  } catch (error) {
    res.status(404).send('Form Not Saved Successfully!')
  }
})


app.listen(PORT, () => {
  console.log(`PORT Running in http://localhost:${PORT}/`);
})

























































// import { readFile, writeFile } from "fs/promises";
// import crypto from "crypto";
// import path from "path";
// import fs from "fs/promises";
// import express from "express";

// const app = express();

// const PORT = process.env.PORT || 3000;
// const DATA_FILE = path.join("data", "links.json");

// app.use(express.static("public"));


// const loadLinks = async () => {
//   try {
//     const data = await readFile(DATA_FILE, "utf-8");
//     return JSON.parse(data);
//   } catch (error) {
//     if (error.code === "ENOENT") {
//       await writeFile(DATA_FILE, JSON.stringify({}));
//       return {};
//     }
//     throw error;
//   }
// };

// const saveLinks = async (links) => {
//   await writeFile(DATA_FILE, JSON.stringify(links));
// };

// app.get("/", async (req, res) => {
//   try {
//     const file = await fs.readFile(path.join("views", "index.html"));
//     const links = await loadLinks();

//     const content = file.toString().replaceAll(
//       "{{ shortened-urls }}",
//       Object.entries(links)
//         .map(
//           ([shortCode, url]) =>
//             `<li><a href="/${shortCode}" target="_blank">${req.host}/${shortCode}</a> -> ${url} </li>`
//         )
//         .join("")
//     );
//     return res.send(content)
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Internal Server Error!");
//   }
// });

// app.get("/:shortCode", async (req, res) => {
//   try {
//     const {shortCode} = req.params
//     const links = await loadLinks();

//     if(!links[shortCode]) return res.status(404).send('404 error occured')

//     return res.redirect(links[shortCode])
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send("Internal Server Error!");
//   }
// });

// app.post("/", async (req, res) => {
//   const { url, shortCode } = req.body;

//   const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

//   const links = await loadLinks();

//   if (links[finalShortCode]) {
//     return res
//       .status(400)
//       .send("Short code already exists. Please choose another");
//   }

//   links[finalShortCode] = url;
//   await saveLinks(links);
//   return res.redirect('/')
// });


// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
