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
        groupSelect: "",
        newGroup: {},
    }
    
    handleClick = () => {
        this.setState(({ isOpen }) => {
            return {
                isOpen: !isOpen
            };
        })
    }

    onSave = newGroup => {
        this.setState({ newGroup });
    }

    changeGroupSelect = (newValue) => {
        this.setState({
            groupSelect: newValue,
        });
    }
    
    render() {
        const newGroup = this.state.newGroup.nameEN;
        const isEditMode = !!newGroup;
        const { groupSelect } = this.state;

        return (
            <div className="dialogGrid dialogGrid_2cols dialogGrid_rightAlignedLabels">
                <span>Key</span>
                <TextField variant="outlined" margin="dense" />
    
                <span>Group</span>
                <div>
                    <NativeSelect 
                        input={ <CustomInput /> } 
                        value={groupSelect} 
                        onChange={(e) => {
                            this.changeGroupSelect(e.target.value)
                        }} 
                    >
                        <option value="">...</option>
                        { isEditMode && <option className="highlightedOption" value={newGroup}>{newGroup}</option> }
                        <option value="0">Text</option>
                        <option value="1">Heading</option>
                        <option value="2">Heading Heading Heading Heading</option>
                    </NativeSelect>
                    {
                        !(isEditMode && groupSelect !== newGroup) &&
                        <Button color="primary" className="textButton" onClick={this.handleClick}>
                            { isEditMode ? "Edit new group" : "+New" }
                        </Button>
                     }
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
                    hideDialog={() => {
                        this.setState({ isOpen: false });
                    }}
                    onSave={this.onSave}
                    isEditMode={isEditMode}
                    currentGroup={this.state.newGroup}
                    changeGroupSelect={this.changeGroupSelect}
                />
            </div>
        );
    }
}

export default NamesSection;