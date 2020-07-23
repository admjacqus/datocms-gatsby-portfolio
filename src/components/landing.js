/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
// import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

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

                <div className="landing_hi">
                        <h1 className="xxl">Hi, I'm Adam Jacques.</h1>

                    <div className="sidebar__copyright">
                        {data.datoCmsHome.copyright}
                    </div>
                    </div>

                <div className="landing_about">
                        <div className="landing_about_content">
                            <div
                                className="landing_about"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        data.datoCmsHome.introTextNode.childMarkdownRemark.html
                                }}
                            />
                            </div>
                </div>
                
                </div>
            )}
        />
    );
};


export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
