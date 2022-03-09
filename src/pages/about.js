import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PlaylistPlayer from "../components/playlistPlayer"

const AboutPage = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About Clock Spinning podcast" />
            <article
              className="about-page"
            >
              <p>Clock Spinning is a podcast about the history of Magic: the Gathering, as told card-by-card through <a href="https://mtg.fandom.com/wiki/Cube_Draft">cube</a>. Join Austin and Connor on a deep dive into the vault of Magic history, and come along for the ride as they build cubes that capture all the feels of some of Magic’s most fun and iconic sets.</p>

              <p>Currently we're building a cube for the original Kamigawa block. Our list on <a href="https://cubecobra.com/cube/overview/clock-spinning-chk">Cube Cobra</a> gets updated as each episode goes live, so you can follow along as we rate cards and evolve the list. We'd love if you give it a draft and send us your feedback, or if you have memories to share of any of our upcoming cards send us an email and we'll share them on the show.</p>

              <p>The best way to get in touch is email. You can reach either of us at clock[dot]spinning[dot]podcast[at]gmail[dot].com.</p>
            <h4>Listen to the show</h4>
            <p>The easiest way to listen is to subscribe in your favorite podcast app:</p>

              <ul>
                <li><a href="https://music.amazon.com/podcasts/8d6a2f78-e757-471f-aa2c-47afe84c72db">Amazon Music</a></li>
                <li><a href="https://podcasts.apple.com/us/podcast/clock-spinning/id1611106302">Apple Podcasts</a></li>
                <li><a href="https://www.audible.com/pd/B09V45D7T5?qid=1646805039">Audible</a></li>
                <li><a href="https://podcasts.google.com/feed/aHR0cHM6Ly93d3cubXRnY2FzdC5jb20vcG9kY2FzdHMvY2xvY2stc3Bpbm5pbmcvZmVlZA">Google Podcasts</a></li>
                <li><a href="https://overcast.fm/itunes1611106302/clock-spinning">Overcast</a></li>
                <li><a href="https://pca.st/udbk5xu5">Pocket Casts</a></li>
                <li><a href="https://open.spotify.com/show/6L8vr81Ddni51Z25LiyeVi">Spotify</a></li>
                <li><a href="https://www.stitcher.com/podcast/clock-spinning">Stitcher</a></li>
                <li>Other players: Subscribe via <a href="https://feeds.captivate.fm/clock-spinning/">RSS feed</a></li>
              </ul>
            <p>Or, if you want to get a taste, you can listen right here on the web:</p>
            <PlaylistPlayer />
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
          amazon_music
          google_podcasts
          overcast
          stitcher
          spotify
          archive
        }
      }
    }
  }
`