import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html'], ['list'],['allure-playwright']],
  use: {
    baseURL: 'https://parabank.parasoft.com',
    headless: true,
    screenshot: 'on',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //     name: 'firefox',
    //     use: { browserName: 'firefox' }
    //   },
    //   {
    //     name: 'webkit',
    //     use: { browserName: 'webkit' }
    //   }
  ],
};

export default config;