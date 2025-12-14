const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const chokidar = require("chokidar");

const DAY_FILE = "day_counter.txt";
const COMMIT_FILE = "commit_counter.txt";
const DATE_FILE = "last_date.txt";

// Get today's date
function getToday() {
  return new Date().toISOString().split("T")[0];
}

// Read counter
function readCounter(file) {
  if (!fs.existsSync(file)) return 0;
  return parseInt(fs.readFileSync(file, "utf8")) || 0;
}

// Write counter
function writeCounter(file, value) {
  fs.writeFileSync(file, value.toString());
}

// Get first-level folder under test
function getTopLevelFolder(filePath) {
  const relativePath = path.relative(process.cwd(), filePath);
  const parts = relativePath.split(path.sep);

  // Return first folder after test root
  if (parts.length > 0) {
    return parts[0];
  }
  return null;
}

// Update counters
function updateCounters() {
  const today = getToday();
  const lastDate = fs.existsSync(DATE_FILE)
    ? fs.readFileSync(DATE_FILE, "utf8")
    : "";

  let day = readCounter(DAY_FILE);
  let commit = readCounter(COMMIT_FILE);

  // Check if new day
  if (today !== lastDate) {
    day++;
    commit = 1;
    console.log(`\n📅 New Day! Day ${day}`);
  } else {
    commit++;
  }

  writeCounter(DAY_FILE, day);
  writeCounter(COMMIT_FILE, commit);
  fs.writeFileSync(DATE_FILE, today);

  return { day, commit };
}

// Perform commit
function performCommit(folder) {
  try {
    // Check for changes in the folder
    const status = execSync(`git status --porcelain ${folder}`, {
      encoding: "utf8",
    });

    if (!status.trim()) {
      console.log("⚠️  No changes detected");
      return;
    }

    // Update counters
    const { day, commit } = updateCounters();
    const message = `Day ${day} | Commit ${commit}`;

    // Git operations
    console.log(`\n📁 Committing folder: ${folder}`);
    execSync(`git add "${folder}"`);
    execSync(`git commit -m "${message}"`);
    execSync("git push origin main");

    console.log(`✅ ${message} - Pushed successfully!\n`);
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

// Debounce timer
let commitTimer = null;
let lastChangedFolder = null;

function scheduleCommit(folder) {
  lastChangedFolder = folder;

  if (commitTimer) {
    clearTimeout(commitTimer);
  }

  console.log(`💾 File saved in: ${folder} (waiting 2s...)`);

  commitTimer = setTimeout(() => {
    performCommit(lastChangedFolder);
    commitTimer = null;
    lastChangedFolder = null;
  }, 2000);
}

// Start watcher
console.log("🚀 Auto-Commit System Started");
console.log("👀 Watching all folders in test/");
console.log("💡 Press Ctrl+S to save and auto-commit");
console.log("🛑 Press Ctrl+C to stop\n");

const watcher = chokidar.watch(".", {
  ignored: [
    /(^|[\/\\])\../,
    "node_modules/**",
    ".git/**",
    "auto-commit.js",
    "package*.json",
    "day_counter.txt",
    "commit_counter.txt",
    "last_date.txt",
  ],
  persistent: true,
  ignoreInitial: true,
});

watcher.on("change", (filePath) => {
  const topFolder = getTopLevelFolder(filePath);

  if (topFolder) {
    scheduleCommit(topFolder);
  }
});

watcher.on("add", (filePath) => {
  const topFolder = getTopLevelFolder(filePath);

  if (topFolder) {
    scheduleCommit(topFolder);
  }
});

// Handle exit
process.on("SIGINT", () => {
  console.log("\n\n🛑 Stopping watcher...");
  watcher.close();
  console.log("✅ Goodbye!\n");
  process.exit(0);
});
