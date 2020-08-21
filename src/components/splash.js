/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react";
// import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

const TemplateWrapper = () => {
    return (
        <StaticQuery
            query={graphql`
       query SplashQuery {
          datoCmsHome {
        copyright
          }
        }
      `}
            render={data => (
                <div className="splash">
                        <h1 className="xxl">Hi, I'm Adam Jacques.</h1>
                    <div className="splash__copyright">
                        {data.datoCmsHome.copyright}
                    </div>
                    </div>
            )}
        />
    );
};


export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
