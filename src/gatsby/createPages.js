const config = require('../../gatsby-config')
const query = require('./query')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const basePath = config.siteMetadata.basePath || '/'

  //   create associates pages
  const associatesQuery = await graphql(query.data.associate)
  const associates = associatesQuery.data.allContentfulAssociate.edges
  associates.forEach((associate, i) => {
      console.log(associate);
  })
}
