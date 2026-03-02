const { onRequest } = require('firebase-functions/v2/https');
const fs = require('fs');
const path = require('path');
const analyzeHandler = require('./analyze');

// When running in the Firebase emulator, secrets declared in the `secrets`
// array are not always injected into process.env.  Load them manually from
// .secret.local (same file format the CLAUDE.md tells developers to create).
if (process.env.FUNCTIONS_EMULATOR === 'true') {
    const secretFile = path.join(__dirname, '.secret.local');
    if (fs.existsSync(secretFile)) {
        const lines = fs.readFileSync(secretFile, 'utf8').split('\n');
        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith('#')) continue;
            const idx = trimmed.indexOf('=');
            if (idx > 0) {
                const key = trimmed.slice(0, idx).trim();
                const val = trimmed.slice(idx + 1).trim();
                if (!process.env[key]) {
                    process.env[key] = val;
                }
            }
        }
    }
}

// API proxy for Claude — rewrites from /api/analyze hit this function
exports.analyze = onRequest(
    { cors: true, secrets: ['ANTHROPIC_API_KEY'] },
    analyzeHandler
);

// Health-check endpoint — rewrites from /api/hello hit this function
exports.hello = onRequest({ cors: true }, (req, res) => {
    res.status(200).json({ ok: true });
});
