import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Video from '../components/video'
import { graphql } from 'gatsby'
import { Link } from "gatsby";
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <Link to="/"><svg width="61px" height="30px" viewBox="0 0 61 30" version="1.1">
    <title>back arrow</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Pixel-Slate-Copy-3" transform="translate(-109.000000, -1487.000000)" stroke="#161418" stroke-width="2">
            <g id="back-arrow" transform="translate(110.000000, 1487.000000)">
              <line x1="59" y1="15" x2="0" y2="14.5" id="Path-2"></line>
              <path d="M0,14.3027344 C9.53515625,14.6315104 14.3027344,9.86393229 14.3027344,1.42108547e-14" id="Path-3"></path>
              <path d="M0,29.0527344 C9.53515625,29.3815104 14.3027344,24.6139323 14.3027344,14.75" id="Path-3-Copy" transform="translate(7.151367, 21.909321) scale(1, -1) translate(-7.151367, -21.909321) "></path>
            </g>
          </g>
        </g>
</svg>
</Link>

      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsWork.coverImage.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__slider">
          <Slider infinite={true} slidesToShow={2} arrows>
            {data.datoCmsWork.gallery.map(({ fluid }) => (
              <img
                alt={data.datoCmsWork.title}
                key={fluid.src}
                src={fluid.src}
              />
            ))}
          </Slider>
        </div>
        {
          data.datoCmsWork.video !== null &&
          <div className="sheet__video">
            <Video
              videoSrcURL={
                "https://player.vimeo.com/video/" +
                data.datoCmsWork.video.providerUid
              }
              videoTitle={data.datoCmsWork.video.title}
              videoWidth={data.datoCmsWork.video.width}
              videoHeight={data.datoCmsWork.video.height}
            />
          </div>
        }
      </div>
    </article>
  </Layout>
);

export const query = graphql`
         query WorkQuery($slug: String!) {
           datoCmsWork(slug: { eq: $slug }) {
             seoMetaTags {
               ...GatsbyDatoCmsSeoMetaTags
             }
             title
             excerpt
             gallery {
               fluid(
                 maxWidth: 200
                 imgixParams: { fm: "jpg", auto: "compress" }
               ) {
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
               fluid(
                 maxWidth: 600
                 imgixParams: { fm: "jpg", auto: "compress" }
               ) {
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
       `;
