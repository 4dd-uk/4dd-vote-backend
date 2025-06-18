const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./votes.db');

db.run(`CREATE TABLE IF NOT EXISTS votes (
  id TEXT PRIMARY KEY,
  provider TEXT,
  timestamp INTEGER
)`);

function recordVote(id, provider) {
  const stmt = db.prepare('INSERT OR IGNORE INTO votes (id, provider, timestamp) VALUES (?, ?, ?)');
  stmt.run(id, provider, Date.now());
  stmt.finalize();
}

function getVoteCount() {
  return new Promise((resolve) => {
    db.get('SELECT COUNT(*) as count FROM votes', (err, row) => {
      resolve(row.count);
    });
  });
}

module.exports = { recordVote, getVoteCount };