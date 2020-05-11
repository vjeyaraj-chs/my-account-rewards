// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const uriBase = '';

export const environment = {
  production: false,
  xApiKey: 'OHfwLZxs9Y58ZXFV4dmd4aAkyBt330JF2fFHRip8',
    apiUriPrefix: uriBase,  // '/api', // '/development/api',
    enumsApiPre: uriBase + '/public', // '/api/public/',  // '/services',
    claimApiPre: uriBase + '/public/claims',  // '/services', //'/api/public/',
    schedulingApiPre: uriBase + '/public/contracts/', // 'api/public/contracts/' '/services/scheduling'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
