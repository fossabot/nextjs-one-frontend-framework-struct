"use client";
import 'reflect-metadata';
import { useEffect, useState } from 'react';
import { HomeClientState } from './Home.state';

export function HomeHook() {
    const [componentState, setcomponentState] = useState(new HomeClientState());

    async function loadData(): Promise<void> {
        const pageState: HomeClientState = componentState.copy();
        await pageState.init();
        setcomponentState(pageState);
    }

    useEffect(() => {
        // userEffect implement here
        loadData();
    }, []);
    return {
        componentState
    };
}