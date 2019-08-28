import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';

const FramesSection = (props) => {
    const { 
        leftBorder, 
        rightBorder, 
        topBorder, 
        bottomBorder, 
        changeLeftBorder,
        changeRightBorder,
        changeTopBorder,
        changeBottomBorder,
     } = props;

     const previewStyle = {
         borderLeft: leftBorder ? "1px solid #dc004e" : "1px solid white",
         borderRight: rightBorder ? "1px solid #dc004e" : "1px solid white",
         borderTop: topBorder ? "1px solid #dc004e" : "1px solid white",
         borderBottom: bottomBorder ? "1px solid #dc004e" : "1px solid white",
     }

    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <div className="paragraphDecorators-dialog__border-directions">
                        <div className="top-row">
                            <span className="paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__top-direction-span">Top</span>
                        </div>
                        <div className="center-row">
                            <span className="paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__left-direction-span">Left</span>
                            <div className="center-square">
                                <div className="center-cell">
                                </div>
                                <div className="center-cell center-cell-top">
                                    <li>
                                        <Checkbox 
                                            className="checkbox-top" 
                                            checked={topBorder}  
                                            onChange={changeTopBorder}
                                            color="primary" 
                                        />
                                    </li>
                                </div>
                                <div className="center-cell">
                                </div>
                                <div className="center-cell center-cell-left">
                                    <li>
                                        <Checkbox 
                                            className="checkbox-left" 
                                            checked={leftBorder}  
                                            onChange={changeLeftBorder}
                                            color="primary" 
                                        />
                                    </li>
                                </div>
                                <div className="center-cell">
                                    <div className="preview" style={previewStyle}>
                                        <span>Text</span>
                                    </div>
                                </div>
                                <div className="center-cell center-cell-right">
                                    <li>
                                        <Checkbox 
                                            className="checkbox-right" 
                                            checked={rightBorder}  
                                            onChange={changeRightBorder}
                                            color="primary" 
                                        />
                                    </li>
                                </div>
                                <div className="center-cell">
                                </div>
                                <div className="center-cell center-cell-bottom">
                                    <li>
                                        <Checkbox 
                                            className="checkbox-bottom" 
                                            checked={bottomBorder}  
                                            onChange={changeBottomBorder}
                                            color="primary" 
                                        />
                                    </li>
                                </div>
                                <div className="center-cell">
                                </div>
                            </div>
                            <span className="paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__right-direction-span">Right</span>
                        </div>
                        <div className="bottom-row">
                            <span className="paragraphDecorators-dialog__direction-span paragraphDecorators-dialog__bottom-direction-span">Bottom</span>
                        </div>
                    </div>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Frame color name</span></li>
                    <li><span>Frame color HEX</span></li>
                    <li><span>Frame thickness</span></li>
                    <li><span>Connect to previous</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="paragraphDecorators-dialog__number-input" 
                            InputProps={{
                                startAdornment: <InputAdornment position="start">#</InputAdornment>,
                              }}
                         />                                            
                    </li>
                    <li>
                        <TextField 
                            variant="outlined" 
                            margin="dense" 
                            className="paragraphDecorators-dialog__number-input" 
                         />                                            
                        <InputAdornment variant="filled" position="end">pt</InputAdornment>
                    </li>
                    <li><Checkbox color="primary" /></li>
                </div>
            </ul>
        </form>
    );
}

export default FramesSection;