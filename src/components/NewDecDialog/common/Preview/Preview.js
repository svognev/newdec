import React from "react";
import { connect } from "react-redux";

import ContentEditable from "../ContentEditable";
import { generatePreviewStyle } from "./generators";
import { setValue } from "../../actions";
import { selectAllEditableContent, getUnstyledText } from "../../helpers"

import "./style.css";

class Preview extends React.Component {
    onPreviewTextChange = e => {
        const { value } = e.target;
        if (value && value !== "<div></div>" && value !== "<br>") {
            this.props.changePreviewText(null, getUnstyledText(value));
        } else {
            this.props.changePreviewText(null, `<div><br></div>`);
        }
    };

    render() {
        const previewStyle = generatePreviewStyle(this.props.formState);
        const { previewText } = this.props;
    
        return (
            <div className="preview">
                <span className="preview-title">Preview</span>
                <div 
                    className="preview-content preview-content_withPointer" 
                    onClick={selectAllEditableContent("demonstrationElement")}
                >
                    <div className="demonstrationElement">
                        <ContentEditable
                            className={"demonstrationElement"+"-text"}
                            onChange={this.onPreviewTextChange} 
                            html={previewText}
                            style={previewStyle}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ decoratorDialog: { form }}) => {
    return { 
        formState: form,
        previewText: form.previewText,
    };
};

const mapDispatchToProps = dispatch => {
    return {       
        changePreviewText: setValue(dispatch)("previewText"),
    };
};
  
export default (connect(mapStateToProps, mapDispatchToProps)(Preview));