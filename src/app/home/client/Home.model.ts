"use client";
import { BaseModel } from '../../../common/types/baseModel';

export class HomeModel extends BaseModel {
    public isValid(): boolean {
        const me = this;
        me.errors = [];
        if (me.errors.length > 0) {
            return false;
        }
        else return true;
    }
}