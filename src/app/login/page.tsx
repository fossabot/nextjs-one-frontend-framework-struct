import { container } from 'tsyringe';
import { LanguageService } from '../../services/logic/languageService';
import { AppConfiguration } from '../../common/constants/appConfiguration';

export default async function Login({
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
  
  return (
    <div>
      I&apos;m new nextJS
      <br></br>
      {AppConfiguration.APP_NAME} - Version: {AppConfiguration.APP_VERSION}
    </div>
  );
}
