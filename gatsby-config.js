const config = require("./siteConfig")

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    ...config,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.title,
        short_name: config.title,
        start_url: config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: config.icon,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
  ],
}
