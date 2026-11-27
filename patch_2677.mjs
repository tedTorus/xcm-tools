import fs from 'fs';
let file = 'packages/sdk-core/src/transfer/fees/getXcmFeeOnce.ts';
let code = fs.readFileSync(file, 'utf8');
code = code.replace(
  'currentAsset: { ...resolvedHopAsset, amount: asset.amount },',
  'currentAsset: { ...resolvedHopAsset, amount: hasPassedExchange && swapConfig ? swapConfig.amountOut : asset.amount },'
);
code = code.replace(
  'currentAsset: { ...asset, amount: asset.amount },',
  'currentAsset: { ...asset, amount: swapConfig ? swapConfig.amountOut : asset.amount },'
);
fs.writeFileSync(file, code);
