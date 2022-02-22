import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <episodeLinks>
          <hr/>
          <p>
            <i>
              Check out this episode in your podcast player:
            </i>
          </p>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              <Link to={post.frontmatter.apple_podcasts} itemProp="url">
                Apple Podcasts
              </Link>
            </li>
            <li>
              <Link to={post.frontmatter.google_podcasts} itemProp="url">
                Google Podcasts
              </Link>
            </li>
            <li>
              <Link to={post.frontmatter.mtgcast} itemProp="url">
                MTGCast
              </Link>
            </li>
            <li>
              <Link to={post.frontmatter.overcast} itemProp="url">
                Overcast
              </Link>
            </li>
            <li>
              <Link to={post.frontmatter.spotify} itemProp="url">
                Spotify
              </Link>
            </li>
            <li>
              <Link to={post.frontmatter.stitcher} itemProp="url">
                Stitcher
              </Link>
            </li>
            <li>
              <Link to={post.frontmatter.archive} itemProp="url">
                Archive.org
              </Link>
            </li>
          </ul>
          <hr/>
        </episodeLinks>
        <blogPostBody>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </blogPostBody>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        description
        apple_podcasts
        google_podcasts
        mtgcast
        overcast
        stitcher
        spotify
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
