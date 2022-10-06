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
        <div style={{width: "100%", height: "200px", marginBottom: "20px", borderRadius: "6px", overflow: "hidden"}}><iframe style={{width: "100%", height: "200px"}} frameborder="no" scrolling="no" seamless title="Play this episode in your browser" src={post.frontmatter.captivate_link}></iframe></div>
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
              <Link to={post.frontmatter.amazon_music} itemProp="url">
                Amazon Music
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link to={post.frontmatter.apple_podcasts} itemProp="url">
                Apple Podcasts
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link to={post.frontmatter.google_podcasts} itemProp="url">
                Google Podcasts
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link to={post.frontmatter.overcast} itemProp="url">
                Overcast
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link to={post.frontmatter.podcast_addict} itemProp="url">
                Podcast Addict
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link to={post.frontmatter.spotify} itemProp="url">
                Spotify
              </Link>
            </li>
            <li>•</li>
            <li>
              <Link to={post.frontmatter.youtube} itemProp="url">
                YouTube
              </Link>
            </li>
            <li>•</li>
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
        captivate_link
        amazon_music
        apple_podcasts
        google_podcasts
        overcast
        podcast_addict
        spotify
        youtube
        archive
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