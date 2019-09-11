import React from 'react';

import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import CustomInput from '../../common/CustomInput';
import Button from '@material-ui/core/Button';

import NewGroupDialog from '../NewGroupDialog';
class NamesSection extends React.Component {
    state = {
        isOpen: false,
        newGroups: [],
    }
    
    handleClick = () => {
        this.setState(({ isOpen }) => {
            return {
                isOpen: !isOpen
            };
        })
    }

    onSave = newGroup => {
        this.setState({ 
            newGroups: [newGroup, ...this.state.newGroups] 
        });
    }
    
    render() {
        const { newGroups } = this.state;
        const options = newGroups.map(group => {
            return (
                <option value={group} key={group}>
                    {group}
                </option>
            );
        });

        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
                <span>Key</span>
                <TextField variant="outlined" margin="dense" />
    
                <span>Group</span>
                <div>
                    <NativeSelect input={ <CustomInput /> } value={newGroups[0] || null} >
                        <option value={null}>...</option>
                        {options.length > 0 && options}
                        <option value="0">Text</option>
                        <option value="1">Heading</option>
                        <option value="2">Heading Heading Heading Heading</option>
                    </NativeSelect>
                    <Button color="primary" className="textButton" onClick={this.handleClick}>+New</Button>
                </div>
    
                <span>Active</span>
                <div>
                    <Checkbox color="primary" />
                </div>
                <span>Style name (English)</span>
                <TextField variant="outlined" margin="dense" />
    
                <span>Style name (German)</span>
                <TextField variant="outlined" margin="dense" />
    
                <span>Style name (Russian)</span>
                <TextField variant="outlined" margin="dense" />
    
                <span>Style name (French)</span>
                <TextField variant="outlined" margin="dense" />
    
                <NewGroupDialog 
                    isOpen={this.state.isOpen}
                    onClose={() => {
                        this.setState({ isOpen: false });
                    }}
                    onSave={this.onSave}
                />
            </div>
        );
    }
}

export default NamesSection;