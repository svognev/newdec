import React from 'react';
import Preview from "components/common/Preview";

const TestSection = (props) => {
    const { previewProps } = props;
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <Preview {...previewProps}></Preview>
        </div>
    );
};

export default TestSection;