import { container } from 'tsyringe';
import './Home.scss';
import { LanguageService } from '../../services/logic/languageService';
import { AppConfiguration } from '../../common/constants/appConfiguration';
import { HomeState } from './Home.state';

export default async function Home({
  params,
  searchParams,
}: Readonly<{
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}>) {
  const { slug } = await params;
  console.log(slug);
  const languageService = container.resolve(LanguageService);
  languageService.getLanguageInParam(searchParams);
  
  const pageState = new HomeState();
  await pageState.init();

  return (
    <div className="home-view">
      I&apos;m new nextJS
      <br></br>
      {AppConfiguration.APP_NAME} - Version: {AppConfiguration.APP_VERSION}
    </div>
  );
}
