import { EVM_DEV_PRIVATE_KEYS } from '../constants'

export const getEvmPrivateKeyHex = (path: string) => {
  const name = path.slice(2).toLowerCase()
  if (Object.prototype.hasOwnProperty.call(EVM_DEV_PRIVATE_KEYS, name)) {
    return EVM_DEV_PRIVATE_KEYS[name as keyof typeof EVM_DEV_PRIVATE_KEYS]
  }
  return undefined
}
