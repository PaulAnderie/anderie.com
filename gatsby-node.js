/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-google-docs",
            options: {
                // Mandatory
                // --------
                foldersIds: ["1S3ItQE_V_5N6vMrsqa6SfF-ca1bjGqjV"], // folders Ids can be found in Google Drive URLs
                config: {
                    api_key: "AIzaSyDKQ1ccBZi8AzQthFXmEAcgD03BoC-PZ9Y",
                    client_id: "425919240626-cc6ru6484cuo9igm5vomm3q0euqbn163.apps.googleusercontent.com",
                    client_secret: "uLb8n9Slpws-uM3jZcBnGp3o",
                    // Optional
                    // --------
                    token_path: "google-docs-token.json",
                },
                // Optional
                // --------
                fields: ["createdTime"], // https://developers.google.com/drive/api/v3/reference/files#resource
                fieldsMapper: {createdTime: "date", name: "title"}, // To rename fields
                fieldsDefault: {draft: false}, // To add default fields values
            },
        },
        // Use gatsby-transformer-remark to modify the generated markdown
        // Not mandatary, but recommanded to be compliant with gatsby remark ecosystem
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [],
            },
        },
    ],
}

exports.onCreateNode = ({node, actions}) => {
    // You need to enable `gatsby-transformer-remark` to transform `GoogleDocs` type to `MarkdownRemark` type.
    if (node.internal.type === `MarkdownRemark`) {
        const customSlug = node.frontmatter.slug // If you add extra data `slug` with description field
        actions.createNodeField({
            name: `slug`,
            node,
            value: customSlug || node.frontmatter.path,
        })
    }
}

const path = require("path")

// You need to enable `gatsby-transformer-remark` to query `allMarkdownRemark`.
// If you don't use it, query `allGoogleDocs`
exports.createPages = async ({graphql, actions}) =>
    graphql(
        `
            {
                allMarkdownRemark(
                    sort: {fields: [frontmatter___date], order: DESC}
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `
    ).then(result => {
        if (result.errors) {
            throw result.errors
        }
        result.data.allMarkdownRemark.edges.forEach((post, index) => {
            actions.createPage({
                path: post.node.fields.slug,
                component: path.resolve(`./src/templates/post.js`),
                context: {
                    slug: post.node.fields.slug,
                },
            })
        })
    })
