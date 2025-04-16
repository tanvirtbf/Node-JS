import { readFile, writeFile } from "fs/promises";
import crypto from "crypto";
import path from "path";
import fs from "fs/promises";
import express from "express";

const router = express.Router();

const DATA_FILE = path.join("data", "links.json");

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

router.get('/report', (req, res) => {
  const student = [
    {name: 'Tanvir', grade: '12th', favSubject: 'Mathematics'},
    {name: 'Sadia', grade: '10th', favSubject: 'Physics'},
    {name: 'Maymuna', grade: '11th', favSubject: 'Chemistry'},
    {name: 'Humaira', grade: '8th', favSubject: 'English'}
  ]
  res.render('report', { student })
})

router.get("/", async (req, res) => {
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
    return res.send(content);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error!");
  }
});

router.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;
    const links = await loadLinks();

    if (!links[shortCode]) return res.status(404).send("404 error occured");

    return res.redirect(links[shortCode]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error!");
  }
});

router.post("/", async (req, res) => {
  const { url, shortCode } = req.body;

  const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

  const links = await loadLinks();

  if (links[finalShortCode]) {
    return res
      .status(400)
      .send("Short code already exists. Please choose another");
  }

  links[finalShortCode] = url;
  await saveLinks(links);
  return res.redirect("/");
});

//   export default router;
export const shortenerRoutes = router;
