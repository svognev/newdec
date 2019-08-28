import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const QuickSelectSection = (props) => {
    return (
        <form className="paragraphDecorators-dialog__form">
            <ul className="paragraphDecorators-dialog__field-list">
                <div className="paragraphDecorators-dialog__col">
                    <li>
                        <span>Quick select group</span>
                        <Link className="paragraphDecorators-dialog__link">
                            Edit
                        </Link>
                    </li>
                </div>
                <div className="paragraphDecorators-dialog__col">
                    <li>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Headings"
                            labelPlacement="end"
                        />
                    </li>
                    <li>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="List 123"
                            labelPlacement="end"
                        />
                    </li>
                    <li>
                        <FormControlLabel
                            control={<Checkbox color="primary" />}
                            label="Other Stuff"
                            labelPlacement="end"
                        />
                    </li>
                </div>
                <div className="paragraphDecorators-dialog__col ">
                </div>
            </ul>
                
        </form>
    );
}

export default QuickSelectSection;