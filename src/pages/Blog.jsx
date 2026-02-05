import React from 'react'
import './Blog.css'
import MagicBento from '../component/MagicBento'

export default function Blog() {
  return (
    <div className="blog-root">
      <div className="blog-center">
        <MagicBento
          textAutoHide={true}
          enableStars={false}
          enableSpotlight
          enableBorderGlow={true}
          enableTilt
          enableMagnetism={false}
          clickEffect
          spotlightRadius={590}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </div>
    </div>
  )
}
