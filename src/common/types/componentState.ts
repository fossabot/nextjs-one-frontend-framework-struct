import 'reflect-metadata';
import { container } from 'tsyringe';
import { AnyType, ComponentState as FWComponentState } from 'one-frontend-framework';
import { BaseInfoModel, BaseModel } from './baseModel';
import { ServerLanguageService } from '../../services/logic/server/languageService';
import { ObjectHelper } from '../utils/objectHelper';
import { LoadingService } from '../../services/logic/client/loadingService';
import { ClientLanguageService } from '../../services/logic/client/languageService';

export abstract class ServerComponentState extends FWComponentState {
    public languageService: ServerLanguageService = container.resolve(ServerLanguageService);
    /**
     * App on init
     */
    public abstract init(): Promise<void>;
}

export abstract class ClientComponentState extends FWComponentState {
    public languageService: ClientLanguageService = container.resolve(ClientLanguageService);
    public loadingService = container.resolve(LoadingService);

    /**
     * App on init
     */
    public abstract init(): Promise<void>;

    constructor() {
        super();
    }

    /**
     * Deep copy current state
     * @returns 
     */
    public copy<TObject>(): TObject {
        return ObjectHelper.deepCopy(this) as unknown as TObject;
    }
}

export abstract class ClientWithModelComponentState extends FWComponentState {
    public abstract model: BaseModel;
    public abstract modelPropName: string;

    constructor() {
        super();
    }

    /**
     * Hanlde form input changed
     * @param e || HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
     */
    public handleFormInputChanged(target: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | AnyType): void {
        const me = this;
        if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement) {
            const prop = target.name.replace(me.modelPropName + '.', '');
            const value = target.value;
            // validation here if need realtime validation
            me.model.errors = [];
            me.model[prop] = value;
        }
    }
}
/**
 * For modify views/components
 */
export abstract class ClientInformationComponentState<TDetail, TModel extends BaseInfoModel<TDetail>> extends ClientComponentState {
    public id = '';
    public get isEdit(): boolean {
        return this.id !== '';
    }
    public abstract model: TModel;
    public abstract modelPropName: string;

    public abstract createRequest<T>(): T;
    public abstract saveData(): void;
}