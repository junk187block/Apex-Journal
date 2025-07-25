import express from "express";
import path from "path";

const app = express();
const port = 3000;

// Serve static files from the "dist/public" directory
app.use(express.static(path.join(import.meta.dirname, "../dist/public")));

// For any other request, serve the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "../dist/public/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
