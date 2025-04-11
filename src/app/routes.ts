import { Redirect } from 'next/dist/lib/load-custom-routes';

const appRoutes = [
    // Basic redirect
    {
        source: '/',
        destination: '/home',
        permanent: true,
    } as Redirect,
    // Wildcard path matching
    // {
    //     source: '/blog/:slug',
    //     destination: '/news/:slug',
    //     permanent: true,
    // } as Redirect,
] as Redirect[];

export default appRoutes;