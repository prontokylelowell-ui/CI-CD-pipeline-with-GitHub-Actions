const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '1.0.0'
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'CI/CD Demo App',
    message: 'Deployed automatically via GitHub Actions',
    commit: process.env.GITHUB_SHA || 'local',
    environment: process.env.NODE_ENV || 'development'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
