# eCommerce Contentful HeroBlog
A [GatsbyJS](https://www.gatsbyjs.org/) blog starter. <br /><br />
[![GitHub tag](https://img.shields.io/github/tag/billp72/ecommerce-blog-contentful-starter.svg)](https://github.com/billp72/ecommerce-blog-contentful-starter)
[![GitHub stars](https://img.shields.io/github/stars/billp72/ecommerce-blog-contentful-starter.svg)](https://github.com/billp72/gatsby-starter-personal-blog/stargazers)
[![GitHub license](https://img.shields.io/github/license/billp72/ecommerce-blog-contentful-starter.svg)](https://github.com/billp72/ecommerce-blog-contentful-starter/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![GitHub contributors](https://img.shields.io/github/contributors/billp72/ecommerce-blog-contentful-starter.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

See the starter in action » [demo website](https://5e73f9cfd087db0008030415--ecommerce-blog.netlify.com/) <br />For more information visit » [netcreative/coronavirus-sanitary-store](https://www.netcreative.org/coronavirus-sanitary-store/)

Ready to use and easily customizable after install.
The inspiration for eCommerce Hero plus blog was from [dev.greglobinski.com/gatsby-starter-hero-blog](https://dev.greglobinski.com/gatsby-starter-hero-blog/)
  <br />
## Features:
- eCommercer store managed content using `contenful` checkout features using `Snipcart` and `Stripe`
- Easy editable content in **Markdown** files (posts, pages and parts)
- **CSS** with `styled-jsx` and `PostCSS`
- **SEO** (sitemap generation, robot.txt, meta and OpenGraph Tags)
- **Social** sharing (Twitter, Facebook, Google, LinkedIn)
- **Comments** (Facebook)
- **Images** lazy loading and `webp` support (gatsby-image)
- Post **categories** (category based post list)
- Full text **searching** (Algolia)
- **Contact** form (Netlify form handling)
- modal (displays for first-time visitors using cookies)
- Form elements and validation with `ant-design`
- 100% **PWA** (manifest.webmanifest, offline support, favicons)
- Google **Analytics**
- App **favicons** generator (node script)
- Easy customizable base **styles** via `theme` object generated from `yaml` file (fonts, colors, sizes)
- React **v.16.3** (gatsby-plugin-react-next)
- **Components** lazy loading (social sharing)
- **ESLint** (google config)
- Webpack `BundleAnalyzerPlugin`
- **Gravatar** image (optional) instead local Avatar/Lo
## Prerequisites

If you do not have Gatsby Cli installed yet, do it first.

```text
npm install --global gatsby-cli
```
## Getting started

Install the starter using Gatsby Cli `gatsby new` command.

```text
gatsby new [NEW_SITE_DIRECTORY_FOR_YOUR_BLOG] https://github.com/billp72/ecommerce-blog-contentful-starter.git
```
Go into the newly created directory and run

```text
gatsby develop
```

to hot-serve your website on http://localhost:8000 or

```text
gatsby build
```

to create static site ready to host (/public).

Before running or building, create a .env file with these fields and associated keys (you will also need to add these fields to your host as environment vars):

```javascript
GOOGLE_ANALYTICS_ID=
FB_APP_ID=
ALGOLIA_APP_ID=
ALGOLIA_SEARCH_ONLY_API_KEY=
ALGOLIA_ADMIN_API_KEY=
ALGOLIA_INDEX_NAME=CONTENT
CONTENTFUL_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
SNIPCART_API=
STRIPE_SECRET_KEY=
```
## In `contentful`, create fields:

```javascript
id
productName
productSlug
shortDescription
price
storeCategory
discountPrice
tags
rating
displayBadge
mainImage {}
otherImages {}
```

To activate `ALGOLIA`, uncomment both the plugin and the query inside **gatsby-config.js**. Also, and inside **src/pages/search.js**, uncomment the below line
```javascript
<Search algolia={algolia} theme={theme} />
```
inside commponents/Menu/Menu.js, uncomment search link in the array so it appears in the menu

## Instructions & tutorials
- [How to setup and add new content to eComBlog using contentful](https://www.contentful.com/)
- How to install, setup and add new content to a eComBlog starter **coming soon**
- Setup `Algolia` account for your GatsbyJS eComblog **coming soon**
- Setup `Snipcart` and `Stripe` **coming soon**
- ask any questions @ [netcreative/coronavirus-sanitary-store/](https://www.netcreative.org/coronavirus-sanitary-store/)
- More articles at [netcreative with Bill](https://netcreative.org)
## Windows users

You should take a look at this: [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)

## Authors

- Bill Pope [@billp72](https://github.com/billp72)

## Contributing

- Fork the repo
- Create your feature branch (git checkout -b feature/fooBar)
- Commit your changes (git commit -m 'Add some fooBar')
- Push to the branch (git push origin feature/fooBar)
- Create a new Pull Request

## Licence

MIT License

Copyright (c) 2017 gatsbyjs <br />Copyright (c) 2018 greg lobinski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.