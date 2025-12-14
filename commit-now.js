const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

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

// Get first-level folder from current file path
function getTopLevelFolder(filePath) {
  if (!filePath) return null;

  const relativePath = path.relative(process.cwd(), filePath);
  const parts = relativePath.split(path.sep);

  if (parts.length > 0 && parts[0] !== "." && parts[0] !== "..") {
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

  if (today !== lastDate) {
    day++;
    commit = 1;
  } else {
    commit++;
  }

  writeCounter(DAY_FILE, day);
  writeCounter(COMMIT_FILE, commit);
  fs.writeFileSync(DATE_FILE, today);

  return { day, commit };
}

// Main commit function
function performCommit() {
  try {
    // Get file path from command line argument
    const filePath = process.argv[2];

    if (!filePath) {
      console.log("❌ No file path provided");
      process.exit(1);
    }

    const folder = getTopLevelFolder(filePath);

    if (!folder) {
      console.log("❌ Could not detect folder");
      process.exit(1);
    }

    // Check for changes
    const status = execSync(`git status --porcelain "${folder}"`, {
      encoding: "utf8",
    });

    if (!status.trim()) {
      console.log("⚠️  No changes to commit");
      process.exit(0);
    }

    // Update counters
    const { day, commit } = updateCounters();
    const message = `Day ${day} | Commit ${commit}`;

    // Git operations
    console.log(`📁 Committing: ${folder}`);
    execSync(`git add "${folder}"`);
    execSync(`git commit -m "${message}"`);
    execSync("git push origin main");

    console.log(`✅ ${message}`);
  } catch (err) {
    console.log("❌ Error:", err.message);
    process.exit(1);
  }
}

performCommit();
