import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Video from '../components/video'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Arrow from '../components/arrow'

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <div className="backArrow">
              <Link to="/#showcase">
        <Arrow></Arrow>
      </Link>
      </div>


      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        {data.datoCmsWork.video !== null && (
          <div className="sheet__video">
            <Video
              videoSrcURL={
                'https://player.vimeo.com/video/' +
                data.datoCmsWork.video.providerUid
              }
              videoTitle={data.datoCmsWork.video.title}
              videoWidth={data.datoCmsWork.video.width}
              videoHeight={data.datoCmsWork.video.height}
            />
          </div>
        )}
        {data.datoCmsWork.video === null && (
          <div className="sheet__gallery">
            <Img fluid={data.datoCmsWork.coverImage.fluid} />
          </div>
        )}
 
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__slider">
          <Slider infinite={true} slidesToShow={1} arrows>
            {data.datoCmsWork.gallery.map(({ fluid }) => (
              <img
                alt={data.datoCmsWork.title}
                key={fluid.src}
                src={fluid.src}
              />
            ))}
          </Slider>
        </div>

      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 960, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      video {
        url
        title
        provider
        providerUid
        thumbnailUrl
        width
        height
      }
    }
  }
`
