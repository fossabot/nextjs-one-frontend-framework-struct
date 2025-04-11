import 'reflect-metadata';
import { container } from 'tsyringe';
import { ServerLanguageService } from '../../services/logic/server/languageService';
import { LogggingService } from '../../services/logic/loggingService';
import { ClientLanguageService } from '../../services/logic/client/languageService';

/**
 * For error system throwing
 */
export class SystemError {
    public code = 0;
    public message = '';
}

/**
 * Base service
 */
export class BaseServerService {
    protected readonly languageService: ServerLanguageService = container.resolve(ServerLanguageService);
    protected readonly loggingService: LogggingService = container.resolve(LogggingService);
}

/**
 * Base service
 */
export class BaseClientService {
    protected readonly languageService: ClientLanguageService = container.resolve(ClientLanguageService);
    protected readonly loggingService: LogggingService = container.resolve(LogggingService);
}