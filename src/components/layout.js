/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import '../styles/index.scss'

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const TemplateWrapper = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="container">
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />

          <div className="container__body">
            <div className="container__mobile-header">
              <div className="mobile-header">
                <div className="mobile-header__menu"></div>
                <div className="mobile-header__logo">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      )}
    />
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.object,
}

export default TemplateWrapper
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
