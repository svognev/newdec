import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const WordExportSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Style name in WORD</span></li>
                    <li><span>Soft return</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col paragraphDecorators-dialog__col_growing">
                    <li><TextField className="paragraphDecorators-dialog_long-text-field" variant="outlined" margin="dense" /></li>
                    <li><Checkbox color="primary" /></li>
                </div>
            </ul>
                
        </form>
    );
}

export default WordExportSection;