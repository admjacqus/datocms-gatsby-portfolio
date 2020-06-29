require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // apiToken: process.env.DATO_API_TOKEN,
        apiToken: '46fd2e97badd5e211acd27ca0c9147',
      },
    },
  ],
}
