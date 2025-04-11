import 'reflect-metadata';
import { container } from 'tsyringe';
import { LanguageService } from '../../services/logic/languageService';
import { LogggingService } from '../../services/logic/loggingService';

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
export class BaseService {
    protected readonly languageService: LanguageService = container.resolve(LanguageService);
    protected readonly loggingService: LogggingService = container.resolve(LogggingService);
}