import React from "react";

import NativeSelect from "@material-ui/core/NativeSelect";
import CustomInputShort from "components/common/CustomInputShort";

const TocSection = ({ tocIndentation, changeTocIndentation }) => {
    return (
        <div className="dialogGrid dialogGrid_2cols">
            <span>ToC indentation</span>
            <div>
                <NativeSelect
                    value={tocIndentation}
                    onChange={changeTocIndentation} 
                    input={ <CustomInputShort /> }
                >
                    <option value="">...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </NativeSelect>
            </div>                    
        </div>
    );
}

export default TocSection;