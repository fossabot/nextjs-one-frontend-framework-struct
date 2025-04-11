import { UIHelper as FWUIHelper } from 'one-frontend-framework';

export class UIHelper extends FWUIHelper {
}

declare global {
    interface Window {
        zoom: (event: MouseEvent) => void;
    }
}