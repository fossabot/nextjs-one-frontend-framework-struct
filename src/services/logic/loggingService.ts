import 'reflect-metadata';
import { singleton } from 'tsyringe';
import { AbstractLogggingService } from 'one-frontend-framework';

export interface ServerError {
    code: string;
    title: string;
    message: string;
    type: string;
}

@singleton()
export class LogggingService extends AbstractLogggingService {
    /**
     * Log error
     * @param ex
     */
    public logError(ex: unknown): void {
        console.log(ex);
    }
}