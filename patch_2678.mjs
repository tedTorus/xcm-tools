import fs from 'fs';
let file = 'packages/sdk-core/src/transfer/fees/getDestXcmFee.ts';
let code = fs.readFileSync(file, 'utf8');
code = code.replace(
  'if (!(err instanceof InvalidCurrencyError) || !swapConfig) {',
  'if (!swapConfig) {'
);
fs.writeFileSync(file, code);
