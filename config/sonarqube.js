var scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: process.env.SONAR_HOST || 'http://localhost:9000',

    options: {
      'sonar.projectVersion': '1.1.0',

      'sonar.sources': 'app',

      'sonar.tests': 'test'
    }
  },

  () => {
    // callback is required
  }
);
