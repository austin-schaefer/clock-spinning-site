/**
 * Player component for podcast
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PlaylistPlayer = () => {

  return (
    <div style={{ width: "100%", height: "600px", marginBottom: "20px", borderRadius: "6px", overflow: "hidden"}}><iframe style={{width: "100%", height: "600px"}} frameborder="no" scrolling="no" seamless src="https://player.captivate.fm/show/8a9f0a72-c8ca-478e-a051-4119c3309fcf/"></iframe></div>
  )
}

export default PlaylistPlayer
