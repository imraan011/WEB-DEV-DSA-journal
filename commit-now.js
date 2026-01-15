const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const readline = require("readline");

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
  if (!filePath || !fs.existsSync(filePath)) {
    console.log("❌ Invalid file path");
    return null;
  }

  // Get absolute paths
  const absoluteFilePath = path.resolve(filePath);
  const rootPath = process.cwd();

  // Get relative path from root
  let relativePath = path.relative(rootPath, absoluteFilePath);

  // Normalize path separators for Windows
  relativePath = relativePath.replace(/\\/g, "/");

  const parts = relativePath.split("/");

  // Return first folder
  if (parts.length > 0 && parts[0] && parts[0] !== "." && parts[0] !== "..") {
    return parts[0];
  }

  return null;
}

// Update counters
function updateCounters() {
  const today = getToday();
  const lastDate = fs.existsSync(DATE_FILE)
    ? fs.readFileSync(DATE_FILE, "utf8").trim()
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

// Get custom message from user
function getCustomMessage() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Enter commit message (or press Enter to skip): ", (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

// Main commit function
async function performCommit() {
  try {
    // Get file path from command line argument
    const filePath = process.argv[2];

    if (!filePath) {
      console.log("❌ No file path provided");
      process.exit(1);
    }

    console.log(`File: ${filePath}`);

    const folder = getTopLevelFolder(filePath);

    if (!folder) {
      console.log("❌ Could not detect folder");
      process.exit(1);
    }

    console.log(`Detected folder: ${folder}`);

    // Check for any changes in the entire repo first
    const allStatus = execSync(`git status --porcelain`, { encoding: "utf8" });

    if (!allStatus.trim()) {
      console.log("⚠️  No changes in repository");
      process.exit(0);
    }

    // Add the folder
    console.log(`Adding folder: ${folder}`);
    execSync(`git add "${folder}"`);

    // Check if anything was staged
    const stagedStatus = execSync(`git diff --cached --name-only`, {
      encoding: "utf8",
    });

    if (!stagedStatus.trim()) {
      console.log("⚠️  No changes to commit in this folder");
      process.exit(0);
    }

    // Update counters
    const { day, commit } = updateCounters();

    // Get custom message
    const customMsg = await getCustomMessage();

    // Build commit message
    let message = `Day ${day} | Commit ${commit}`;
    if (customMsg) {
      message += ` - ${customMsg}`;
    }

    // Commit
    console.log(`📁 Committing folder: ${folder}`);
    execSync(`git commit -m "${message}"`);

    // Push
    console.log(`Pushing to GitHub...`);
    execSync("git push origin main");

    console.log(`✅ ${message}`);
  } catch (err) {
    console.log("❌ Error:", err.message);
    process.exit(1);
  }
}

performCommit();
