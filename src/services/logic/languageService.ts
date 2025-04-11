import 'reflect-metadata';
import en from '../../language/en.json';
import vi from '../../language/vi.json';
import { LanguageCode } from 'one-frontend-framework';
import { LanguageText } from '../../common/types/languageText';
import { Lifecycle, scoped } from 'tsyringe';
import { UrlParamKey } from '../../common/constants/constantValue';

@scoped(Lifecycle.ContainerScoped)
export class LanguageService {
    public text: LanguageText = {} as LanguageText;
    public currentLanguage: string = LanguageCode.VI;

    /**
     * Get current language in query params
     * @param searchParams 
     */
    public async getLanguageInParam(searchParams: Promise<{ [key: string]: string | string[] | undefined }>): Promise<void> {
        const me = this;
        const searchParamsData = await searchParams;
        if (searchParamsData) {
            const language = searchParamsData[UrlParamKey.language];
            if (language) {
                me.currentLanguage = (language as string).toLowerCase();
            }
        }
        me.getLanguageText(me.currentLanguage);
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
}