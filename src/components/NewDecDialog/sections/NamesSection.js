import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const NamesSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col paragraphDecorators-dialog__col_right-aligned">
                    <li><span>Key</span></li>
                    <li><span>Active</span></li>
                    <li>
                    </li>
                    <li><span>Language 1 (English)</span></li>
                    <li><span>Language 2 (German)</span></li>
                    <li><span>Language 3 (Russian)</span></li>
                    <li><span>Language 4 (French)</span></li>

                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><Checkbox color="primary" /></li>
                    <li className="paragraphDecorators-dialog__subtitle"><h4>Style name</h4></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                </div>
                <div className="paragraphDecorators-dialog__col ">
                    <li></li>
                    <li></li>
                    <li className="paragraphDecorators-dialog__subtitle"><h4>Group name</h4></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                    <li><TextField variant="outlined" margin="dense" /></li>
                </div>
            </ul>
                
        </form>
    );
}

export default NamesSection;