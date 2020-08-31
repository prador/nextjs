// // -- Prismic API endpoint
// // Determines which repository to query and fetch data from
// // Configure your site's access point here
// export const apiEndpoint = 'https://nextest3.cdn.prismic.io/api/v2'

// // -- Access Token if the repository is not public
// // Generate a token in your dashboard and configure it here if your repository is private
// export const accessToken = 'MC5YMDFpeEJJQUFOWUpaalVa.77-9Cu-_vTLvv73vv73vv73vv70P77-977-977-9f--_vR0KCO-_ve-_ve-_vWpp77-9BX3vv71CETUK77-977-9'

// // -- Link resolution rules
// // Manages the url links to internal Prismic documents
// export const linkResolver = (doc) => {
//   if (doc.type === 'page') {
//     return `/${doc.uid}`
//   }
//   return '/'
// }

// // Additional helper function for Next/Link component
// export const hrefResolver = (doc) => {
//   if (doc.type === 'page') {
//     return '/[uid]'
//   }
//   return '/'
// }


import Prismic from "prismic-javascript"

// Prismic API endpoint
export const apiEndpoint = 'https://nextest3.cdn.prismic.io/api/v2'

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5YMDFpeEJJQUFOWUpaalVa.77-9Cu-_vTLvv73vv73vv73vv70P77-977-977-9f--_vR0KCO-_ve-_ve-_vWpp77-9BX3vv71CETUK77-977-9'

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken })
