import fs from 'fs';
const testFile = 'packages/sdk-core/src/transfer/fees/getDestXcmFee.test.ts';
if (fs.existsSync(testFile)) {
    let code = fs.readFileSync(testFile, 'utf8');
    if (!code.includes('findNativeAssetInfo:')) {
        code = code.replace(/findAssetInfoOrThrow: vi\.fn\(\),/g, 'findAssetInfoOrThrow: vi.fn(),\n    findNativeAssetInfo: vi.fn().mockReturnValue({ symbol: "NATIVE" }),');
        fs.writeFileSync(testFile, code);
        console.log("[+] Mock patched successfully");
    }
}
