import React from 'react';

import TextField from '@material-ui/core/TextField';

const ShortCutSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Windows</span></li>
                    <li><span>Mac</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default ShortCutSection;