import React from 'react';

import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInputShort from '../../common/CustomInputShort';

const TocSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                <li><span>ToC indentation</span></li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li>                    
                        <NativeSelect input={ <CustomInputShort /> }>
                            <option value={null}>...</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </NativeSelect>
                    </li>
                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default TocSection;