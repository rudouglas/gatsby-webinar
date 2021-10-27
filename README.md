<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
    <a href="https://www.trynewrelic.com/gatsby">
    <img alt="New Relic" src="https://newrelic.com/themes/custom/curio/assets/mediakit/NR_logo_Horizontal_Rev.png" width="80" />
  </a>
</p>
<h1 align="center">
  Gatsby ❤️ New Relic Webinar
</h1>

Using Gatsby to deliver large websites can speed up end users’ experiences. However, as those projects scale, many development teams are slowed down by long build times.

What if we could give developers more (easily accessible) visibility into the build process? Learn how the New Relic team built a plugin that provides instant observability into the entire Gatsby build process, exporting vital telemetry data from within the belly of the beast. With events, metrics, logs, and traces, we are able to contextualize and identify performance issues within our plugins, 3rd party APIs, and other parts of our website.

Follow along with us as we instrument a demo website with `gatsby-build-newrelic`

## Getting Started

1.  **Sign up for a [free New Relic One account](https://trynewrelic.com/gatsby)**

2.  Fork and Clone [this Repo](https://github.com/rudouglas/gatsby-webinar)

3.  Install Dependencies

``` 
npm install
```

## Installing the Plugin (Check out [this branch](https://github.com/rudouglas/gatsby-webinar/tree/2-instrumented) to see the final result)

4. Run `npm install gatsby-build-newrelic` to install our plugin

5. Add the code snippet to `gatsby-config.js` under `plugins: [ ...`

```javascript
 {
      resolve: "gatsby-build-newrelic",
      options: {
        NR_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
        NR_ACCOUNT_ID: process.env.NEW_RELIC_ACCOUNT_ID,
        SITE_NAME: process.env.SITE_NAME,
        customTags: {
          featureFlag: process.env.JANKY_SITE,
        }
      }
    },
```

6. Change the `npm build` command in `package.json` to 

```javascript
"build": "gatsby build --open-tracing-config-file ./node_modules/gatsby-build-newrelic/zipkin-local.js --graphql-tracing",
```
[✅ This is how we did it](https://github.com/rudouglas/gatsby-webinar/blob/2-instrumented/package.json#L52)


7. Set environmental Variables 
You will need two environmental variables `NEW RELIC INGEST LICENSE KEY` and `Account ID`. Head to [New Relic One](https://one.newrelic.com), click on the account dropdown menu on the top right, and select API KEYS

![image](https://user-images.githubusercontent.com/10321085/139111763-40105088-064b-41f2-b338-d8bbf362de75.png)

Then, head to `.env` and fill out the fields for 
```
NEW_RELIC_LICENSE_KEY=
NEW_RELIC_ACCOUNT_ID= 
SITE_NAME= <This can be anything>
```

8. You are all set to ✨ DEPLOY ✨
run `npm run build` locally to build and ship your data to New Relic One. 

## 🎨 Visualizing your builds
