import { ServerComponentState } from '../../../common/types/componentState';

export class HomeServerState extends ServerComponentState {
    public async init(): Promise<void> {
        console.log('Init Home Server');
    }
}