import { container } from 'tsyringe';
import './client/Home.scss';
import { ServerLanguageService } from '../../services/logic/server/languageService';
import { AppConfiguration } from '../../common/constants/appConfiguration';
import { Fragment } from 'react';
import { HomeServerState } from './server/Home.state';
import Home from './client/Home';

export default async function Page({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}>) {
  const { slug } = await params;
  console.log(slug);
  const languageService = container.resolve(ServerLanguageService);
  languageService.getLanguageInParam(searchParams);

  const pageState = new HomeServerState();
  await pageState.init();

  return (
    <Fragment>
      <Home></Home>
      {AppConfiguration.APP_NAME} - Version: {AppConfiguration.APP_VERSION}
    </Fragment>
  );
}
