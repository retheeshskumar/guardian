import { IVault } from '../vault.interface';
import { DataBaseHelper } from '@guardian/common';
import { WalletAccount } from '@entity/wallet-account';

/**
 * Database vault
 */
export class Database implements IVault {

    /**
     * Init vault
     */
    async init() {
        return this;
    }
    /**
     * Get key from vault
     * @param token
     * @param type
     * @param key
     */
    async getKey(token: string, type: string, key: string): Promise<string> {
        const item = await new DataBaseHelper(WalletAccount).findOne({ token, type: type + '|' + key });
        return item.key
    }

    /**
     * Set key to vault
     * @param token
     * @param type
     * @param key
     * @param value
     */
    async setKey(token: string, type: string, key: string, value: string): Promise<void> {
        const walletAcc = new DataBaseHelper(WalletAccount).create({
            token,
            type: type + '|' + key,
            key: value
        });
        await new DataBaseHelper(WalletAccount).save(walletAcc);
    }
}
