import 'reflect-metadata';
import { container, singleton } from 'tsyringe';
import { LanguageCode, StorageKey } from 'one-frontend-framework';
import { StorageService } from './storageService';
import { LanguageText } from '../../../types/languageText';
import en from '../../../language/en.json';
import vi from '../../../language/vi.json';
import { GlobalEventValue } from '../../../common/constants/eventValue';

@singleton()
export class ClientLanguageService {
    public readonly storeService = container.resolve(StorageService);
    public text!: LanguageText;
    public readonly defaultLanguage = LanguageCode.VI;

    /**
     * Init language
     */
    public async initLanguage(): Promise<void> {
        const me = this;
        let currentLanguage = await this.storeService.getObject<string>(StorageKey.language);
        if (!currentLanguage) {
            currentLanguage = me.defaultLanguage;
        }
        me.dispatchLanguageChanged(currentLanguage);
    }

    /**
     * Change language
     * @param languageCode 
     */
    public changeLanguage(languageCode: string): void {
        const me = this;
        me.dispatchLanguageChanged(languageCode);
    }

    /**
     * Set language to store
     * @param value 
     */
    public setLanguage(value: string) {
        const me = this;
        me.storeService.saveObject<string>(StorageKey.language, value);
        me.getLanguageText(value);
    }

    /**
     * Get language text from json
     * @param value 
     */
    public getLanguageText(value: string): void {
        const me = this;
        if (value == LanguageCode.EN) {
            me.text = en as unknown as LanguageText;
        }
        else {
            me.text = vi as unknown as LanguageText;
        }
    }

    /**
     * Dispatch change language
     * @param currentLanguage 
     */
    public dispatchLanguageChanged(currentLanguage: string): void {
        const event = new CustomEvent<string>(GlobalEventValue.languageChanged, { detail: currentLanguage });
        window.dispatchEvent(event);
    }
}