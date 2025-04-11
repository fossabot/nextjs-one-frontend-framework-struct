"use client";
import React from 'react';
import './Home.scss';
import { HomeHook } from './Home.hook';
import LanguageHook from '../../../common/hooks/languageHook';
import NotReady from '../../../common/components/notReady/NotReady';
import { LanguageCode } from 'one-frontend-framework';

function Home(): React.JSX.Element {
    const language = LanguageHook();
    const elHook = HomeHook();
    if (elHook.componentState.isReady) {
        return (
            <div className="home-client-view">
                {language.text.label.hi}
                <button
                    className="bg-amber-200"
                    onClick={() => {
                        elHook.componentState.languageService.changeLanguage(LanguageCode.VI);
                    }}
                >
                    Tiếng Việt
                </button>
                <button
                    className="bg-emerald-200"
                    onClick={() => {
                        elHook.componentState.languageService.changeLanguage(LanguageCode.EN);
                    }}
                >
                    English
                </button>
            </div>
        );
    }
    else {
        return (
            <NotReady></NotReady>
        );
    }
}

export default Home;