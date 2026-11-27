import fs from 'fs';
let file = 'packages/sdk-pjs/src/PolkadotJsApi.ts';
let code = fs.readFileSync(file, 'utf8');
code = code.replace(
  'const actualWeight = resultJson.ok.executionResult.used',
  'const actualWeight = resultJson.ok.executionResult.complete?.used ?? resultJson.ok.executionResult.used'
);
fs.writeFileSync(file, code);
