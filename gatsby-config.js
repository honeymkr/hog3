module.exports = {
  siteMetadata: {
    title: 'Hand Of Gravity Coaching',
    author: 'Jason Faulkner',
    description: 'Visionary coaching your startup, business or project.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/hand-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-141803328-3"
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '515816039186932',
      },
    },  
    'gatsby-plugin-sass',
  ],
}
