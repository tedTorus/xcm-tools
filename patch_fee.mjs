import fs from 'fs';

const filePath = 'packages/sdk-core/src/transfer/fees/getDestXcmFee.ts';
let code = fs.readFileSync(filePath, 'utf8');

code = code.replace(
`    return {
      fee,
      feeType: 'paymentInfo',
      sufficient,
      asset: currentAsset
    }`,
`    return {
      fee,
      feeType: 'paymentInfo',
      sufficient,
      asset: api.findNativeAssetInfo(destination) ?? currentAsset
    }`
);

code = code.replace(
`    return {
      fee,
      feeType: 'paymentInfo',
      dryRunError: dryRunResult.dryRunError,
      sufficient: false,
      asset: currentAsset
    }`,
`    return {
      fee,
      feeType: 'paymentInfo',
      dryRunError: dryRunResult.dryRunError,
      sufficient: false,
      asset: api.findNativeAssetInfo(destination) ?? currentAsset
    }`
);

fs.writeFileSync(filePath, code);
console.log("[+] packages/sdk-core/src/transfer/fees/getDestXcmFee.ts 修复成功！");
