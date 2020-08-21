/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from 'react'
// import { Link } from "gatsby";
import { StaticQuery, graphql } from 'gatsby'

const TemplateWrapper = () => {
  return (
    <StaticQuery
      query={graphql`
        query LandingQuery {
          datoCmsHome {
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
        }
      `}
      render={data => (
        <div className="landing">
          <div className="landing__content">
            <div
              className="landing_about"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      )}
    />
  )
}

export default TemplateWrapper
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
