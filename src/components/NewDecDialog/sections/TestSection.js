import React from 'react';
import Preview from "components/common/Preview";

const TestSection = (props) => {
    const { previewProps } = props;
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <Preview {...previewProps} />
        </div>
    );
};

export default TestSection;