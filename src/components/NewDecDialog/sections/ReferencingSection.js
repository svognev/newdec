import React from 'react';

import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import Button from '@material-ui/core/Button';

const ReferencingSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li><span>Reference group</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li>
                        <NativeSelect input={ <CustomInput /> }>
                            <option value={null}>none</option>
                            <option value="0">Reference group 1</option>
                            <option value="1">Reference group 2</option>
                        </NativeSelect>
                        <Button color="primary" className="paragraphDecorators-dialog__text-button">+New</Button>
                    </li>
                    <li></li>
                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default ReferencingSection;