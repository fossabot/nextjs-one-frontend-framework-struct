export interface LanguageText {
  appName: string;
  label: Label;
  message: Message;
  errorMessage: ErrorMessage;
}

export interface ErrorMessage {
  internalServerError: string;
  requiredField: string;
  wrongEmailFormat: string;
  pictureError: string;
}

export interface Label {
  hi: string;
  error: string;
  enter: string;
  warning: string;
  success: string;
  create: string;
  edit: string;
  delete: string;
  list: string;
  first: string;
  last: string;
  next: string;
  previous: string;
  show: string;
  records: string;
  pageOf: string;
  status: string;
  search: string;
  save: string;
  information: string;
  active: string;
  inactive: string;
  select: string;
  order: string;
  favorite: string;
  version: string;
  back: string;
  continue: string;
  finish: string;
  cancel: string;
  preview: string;
  upload: string;
}

export interface Message {
  saveSuccess: string;
}
