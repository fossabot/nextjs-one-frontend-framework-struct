import 'reflect-metadata';
import { container } from 'tsyringe';
import { useEffect, useState } from 'react';
import { ClientLanguageService } from '../../services/logic/client/languageService';
import { GlobalEventValue } from '../constants/eventValue';

/**
 * For transtate language globally
 * @returns 
 */
function LanguageHook() {
    const languageService = container.resolve(ClientLanguageService);
    const [text, setText] = useState(languageService.text);

    function changeLanguage(languageCode: string): void {
        languageService.changeLanguage(languageCode);
    }

    useEffect(() => {
        function onLanguageChanged(e: CustomEvent<string>): void {
            const value = e.detail;
            languageService.setLanguage(value);
            const languageText = languageService.text;
            setText(languageText);
        }
        window.addEventListener(GlobalEventValue.languageChanged, (e) => {
            onLanguageChanged(e as CustomEvent<string>);
        }, false);

        return () => {
            window.addEventListener(GlobalEventValue.languageChanged, (e) => { onLanguageChanged(e as CustomEvent<string>); }, false);
        };
    }, [languageService]);
    return {
        text,
        changeLanguage
    };
}

export default LanguageHook;