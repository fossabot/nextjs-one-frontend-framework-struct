import { ConstantValue as FWConstantValue } from 'one-frontend-framework';
/**
 * All constant value
 */
export class ConstantValue extends FWConstantValue {
    public static readonly pageSize = 10;
    public static readonly pageIndex = 1;
    public static readonly avatarDefault = '';
}

export class UrlParamKey {
    public static readonly page = 'page';
    public static readonly size = 'size';
    public static readonly language = 'lang';
}