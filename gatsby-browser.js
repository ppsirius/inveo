export { default as wrapRootElement } from './src/state/reduxWrapper';

// const { registerLinkResolver } = require('gatsby-source-prismic-graphql');
// const { linkResolver } = require('./src/utils/linkResolver');

// registerLinkResolver(linkResolver);


export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}