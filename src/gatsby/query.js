module.exports.data = {
  associate: `{
    allContentfulAssociate {
        edges {
          node {
            firstName
            lastName
          }
        }
      }
    }`,
}
