const { app, port } = require("./server/index");

// pull database from ./database/index.js
require("./database");

// Start the server
app.listen(port, () => {
  console.log(`Server running at ${port}...`);
});