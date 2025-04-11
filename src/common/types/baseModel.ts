import 'reflect-metadata';
import { AbstractModel, ErrorModel as FWErrorModel } from 'one-frontend-framework';

/**
 * Model for showing error
 */
export interface ErrorModel extends FWErrorModel {
    property: string;
    error: string;
}

/**
 * Abstract for model
 */
export abstract class BaseModel extends AbstractModel<ErrorModel> {
}