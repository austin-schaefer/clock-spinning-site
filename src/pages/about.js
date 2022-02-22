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
            <p>Clock Spinning is a podcast about Magic's history, from Onslaught to Future Sight. Join Austin and Connor on a deep dive into this strange, transformative era in Magic’s history, and come along for the ride as they try to review <a href="https://scryfall.com/search?q=%28b%3Aons+OR+e%3A8ed+OR+b%3Amrd+OR+b%3Achk+OR+e%3A9ed+OR+b%3Arav+OR+e%3Acsp+OR+b%3Atsp%29&unique=cards&as=grid&order=name">almost 4,000 cards</a> down to a fun and interesting cube.</p>

            <p>Listen to the show on your favorite podcast player:</p>
            
            <ul>
              <li><a href="https://podcasts.apple.com/us/podcast/clock-spinning/id1611106302">Apple Podcasts</a></li>
              <li>Google Podcasts</li>
              <li>Overcast</li>
              <li><a href="https://open.spotify.com/show/6L8vr81Ddni51Z25LiyeVi">Spotify</a></li>
              <li><a href="https://www.stitcher.com/podcast/clock-spinning">Stitcher</a></li>
              <li>Or, <a href="https://www.mtgcast.com/podcasts/clock-spinning">listen on the web on MTGCast</a></li>
            </ul>

            <p>You can find the full cube at <a href="https://cubecobra.com/cube/overview/clockspinning">cubecobra.com/cube/overview/clockspinning</a>. We'd love if you give it a draft and send us your feedback, or if you have memories to share of any of our upcoming cards send us an email and we'll share them on the show. </p>

            <p>The best way to get in touch is email. You can reach either of us at clock[dot]spinning[dot]podcast[at]gmail[dot].com.</p>
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
          mtgcasts
          overcast
          stitcher
          spotify
        }
      }
    }
  }
`