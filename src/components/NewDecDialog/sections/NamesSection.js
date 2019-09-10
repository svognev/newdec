import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import Button from '@material-ui/core/Button';

const NamesSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col paragraphDecorators-dialog__col_right-aligned">
                    <li><span>Key</span></li>
                    <li><span>Group</span></li>
                    <li><span>Active</span></li>
                    <li><span>Style name (English)</span></li>
                    <li><span>Style name (German)</span></li>
                    <li><span>Style name (Russian)</span></li>
                    <li><span>Style name (French)</span></li>

                </div>
                <div className="paragraphDecorators-dialog__col paragraphDecorators-dialog__col_growing">
                    <li><TextField className="paragraphDecorators-dialog_long-text-field" variant="outlined" margin="dense" /></li>
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                            <option value={null}>...</option>
                            <option value="0">Text</option>
                            <option value="1">Heading</option>
                        </NativeSelect>
                        <Button color="primary" className="paragraphDecorators-dialog__text-button">+New</Button>
                    </li>
                    <li><Checkbox color="primary" /></li>
                    <li><TextField className="paragraphDecorators-dialog_long-text-field" variant="outlined" margin="dense" /></li>
                    <li><TextField className="paragraphDecorators-dialog_long-text-field" variant="outlined" margin="dense" /></li>
                    <li><TextField className="paragraphDecorators-dialog_long-text-field" variant="outlined" margin="dense" /></li>
                    <li><TextField className="paragraphDecorators-dialog_long-text-field" variant="outlined" margin="dense" /></li>
                </div>
            </ul>
                
        </form>
    );
}

export default NamesSection;