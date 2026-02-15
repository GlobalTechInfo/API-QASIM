const API = require('../dist/index.cjs');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

const api = new API({
  apiKey: 'qasim-dev',
  fullResponse: false,
  timeout: 30000
});

async function runTest(name, testFn) {
  totalTests++;
  try {
    await testFn();
    console.log(`${colors.green}✓ PASS${colors.reset} ${name}`);
    passedTests++;
  } catch (error) {
    console.log(`${colors.red}✗ FAIL${colors.reset} ${name}`);
    console.log(`  ${colors.red}Error: ${error.message}${colors.reset}`);
    failedTests++;
  }
}

function validateResponse(response) {
  if (!response) throw new Error('Response is null');
  if (typeof response === 'string' && response.startsWith('data:image')) return true;
  throw new Error(`Invalid response: ${typeof response}`);
}

function createTestImage() {
  const testImagePath = path.join(__dirname, 'test.jpg');
  const redSquare = Buffer.from([
    0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
    0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
    0x00, 0x03, 0x02, 0x02, 0x02, 0x02, 0x02, 0x03, 0x02, 0x02, 0x02, 0x03,
    0x03, 0x03, 0x03, 0x04, 0x06, 0x04, 0x04, 0x04, 0x04, 0x04, 0x08, 0x06,
    0x06, 0x05, 0x06, 0x09, 0x08, 0x0A, 0x0A, 0x09, 0x08, 0x09, 0x09, 0x0A,
    0x0C, 0x0F, 0x0C, 0x0A, 0x0B, 0x0E, 0x0B, 0x09, 0x09, 0x0D, 0x11, 0x0D,
    0x0E, 0x0F, 0x10, 0x10, 0x11, 0x10, 0x0A, 0x0C, 0x12, 0x13, 0x12, 0x10,
    0x13, 0x0F, 0x10, 0x10, 0x10, 0xFF, 0xC9, 0x00, 0x0B, 0x08, 0x00, 0x01,
    0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0xFF, 0xCC, 0x00, 0x06, 0x00, 0x10,
    0x10, 0x05, 0xFF, 0xDA, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00, 0x3F, 0x00,
    0xD2, 0xCF, 0x20, 0xFF, 0xD9
  ]);
  fs.writeFileSync(testImagePath, redSquare);
  return testImagePath;
}

function createFormData(filePath) {
  const formData = new FormData();
  const fileBuffer = fs.readFileSync(filePath);
  
  // Append buffer directly with filename
  formData.append('file', fileBuffer, {
    filename: path.basename(filePath),
    contentType: 'image/jpeg'
  });
  
  return formData;
}

async function runAllTests() {
  console.log(`\n${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}              POST ENDPOINTS TEST SUITE                  ${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}\n`);

  const testImagePath = createTestImage();
  console.log(`Using test image: ${testImagePath}\n`);

  console.log(`${colors.bright}${colors.blue}━━━ IMAGE EFFECTS ━━━${colors.reset}\n`);
  
  await runTest('Grayscale', async () => {
    const formData = createFormData(testImagePath);
    const response = await api.Grayscale(formData);
    validateResponse(response);
  });

  await runTest('Sepia', async () => {
    const formData = createFormData(testImagePath);
    const response = await api.Sepia(formData);
    validateResponse(response);
  });

  await runTest('Blur', async () => {
    const formData = createFormData(testImagePath);
    const response = await api.Blur(formData, { radius: 5 });
    validateResponse(response);
  });

  await runTest('Invert', async () => {
    const formData = createFormData(testImagePath);
    const response = await api.Invert(formData);
    validateResponse(response);
  });

  console.log(`\n${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`  Total: ${totalTests} | ${colors.green}Pass: ${passedTests}${colors.reset} | ${colors.red}Fail: ${failedTests}${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}\n`);

  if (failedTests > 0) process.exit(1);
}

runAllTests().catch(console.error);
