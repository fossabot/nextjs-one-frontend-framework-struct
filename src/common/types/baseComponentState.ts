import { ComponentState } from 'one-frontend-framework';

export abstract class BaseComponentState extends ComponentState {
    /**
     * App on mounted
     */
    abstract onMounted(): void;
}