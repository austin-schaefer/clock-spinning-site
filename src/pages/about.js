import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About Clock Spinning podcast" />
            <article
              className="about-page"
            >
              <p>Clock Spinning is a podcast about the history of Magic: the Gathering, as told card-by-card through <a href="https://mtg.fandom.com/wiki/Cube_Draft">cube</a>. Join Austin and Connor on a deep dive into the vault of Magic history, and come along for the ride as they build cubes that capture all the feels of some of Magic’s most fun and iconic sets.</p>

              <p>Listen to the show on your favorite podcast player:</p>

              <ul>
                <li><a href="https://podcasts.apple.com/us/podcast/clock-spinning/id1611106302">Apple Podcasts</a></li>
                <li>Google Podcasts</li>
                <li><a href="https://overcast.fm/itunes1611106302/clock-spinning">Overcast</a></li>
                <li><a href="https://open.spotify.com/show/6L8vr81Ddni51Z25LiyeVi">Spotify</a></li>
                <li><a href="https://www.stitcher.com/podcast/clock-spinning">Stitcher</a></li>
                <li>Other players: Subscribe via <a href="https://www.mtgcast.com/podcasts/clock-spinning/feed">RSS feed</a></li>
                <li>Or, <a href="https://www.mtgcast.com/podcasts/clock-spinning">listen on the web on MTGCast</a></li>
              </ul>

              <p>Currently we're building a cube for the original Kamigawa block. Our list on <a href="https://cubecobra.com/cube/overview/clock-spinning-chk">Cube Cobra</a> gets updated as each episode goes live, so you can follow along as we rate cards and evolve the list. We'd love if you give it a draft and send us your feedback, or if you have memories to share of any of our upcoming cards send us an email and we'll share them on the show.</p>

              <p>The best way to get in touch is email. You can reach either of us at clock[dot]spinning[dot]podcast[at]gmail[dot].com.</p>
            </article>
        </Layout>
    )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
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
          archive
        }
      }
    }
  }
`