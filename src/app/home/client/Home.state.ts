"use client";
import { ClientComponentState } from '../../../common/types/componentState';
import { HomeModel } from './Home.model';

export class HomeClientState extends ClientComponentState {
    public model = new HomeModel();

    public async init(): Promise<void> {
        console.log('Init Home Client');
        const me = this;
        if (!me.languageService.text) {
            await me.languageService.initLanguage();
        }
        me.isReady = true;
    }
}