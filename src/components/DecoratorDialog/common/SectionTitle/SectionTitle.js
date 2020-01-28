import React from "react";

import "./style.css";

const SectionTitle = ({text, children}) => (
    <>
        <div className="sectionTitle">
            <span>{text || children}</span>
        </div>
        <div className="spaceHolder"/>
    </>
);

export default SectionTitle;