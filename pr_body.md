Fixes #2668

### Description
When `getDestXcmFee` falls back to `paymentInfo` (e.g., when the destination chain lacks dry-run support), it previously returned `asset: currentAsset`. This incorrectly labeled the destination chain's native fee token (e.g., CFG) as the transferred asset (e.g., USDC), leading to massive fiat value miscalculations (e.g., 0.059 CFG represented as 59 trillion USDC).

### Solution
- Replaced `asset: currentAsset` with `asset: api.findNativeAssetInfo(destination) ?? currentAsset` in the `paymentInfo` fallback branches.
- This ensures the fee is correctly attributed to the destination chain's native token, gracefully falling back to `currentAsset` if the native asset cannot be resolved.
