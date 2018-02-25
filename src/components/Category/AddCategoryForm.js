import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import hash from 'string-hash';
import { addCategory } from '../../actions/categoryActions';
import {hideCategoryModal} from '../../actions/modalActions';

import './categoryForm.scss';
class AddCategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.open || false,
            formInvalid: false,
            title:""
        }
    }
    componentWillReceiveProps(newProps) {
        if(this.props.open !== newProps.open) {
            this.setState({show: newProps.open, title: '', formInvalid: false});
        }
    }
    handleInput = (event)=> {
        this.setState({title: event.target.value});
    }
    handleSubmit = (event)=> {
        if(this.state.title == "") {
            event.preventDefault();
            this.setState({formInvalid: true});
            return;
        }
        this.setState({formInvalid: false});
        this.props.onAddCategory({category: {
            "id": hash(this.state.title),
            "title": this.state.title,
            "filter": "SHOW_ALL"
        }});
        this.onCloseModal();
        event.preventDefault();
    }
    onCloseModal = ()=> {
        this.props.onCloseModal();
    }
    componentDidMount() {
        this.input && this.input.focus();
    }
    componentDidUpdate() {
        this.input && this.input.focus();
    }
    render() {
        return (
            <Modal 
            styles={{
                modal: {
                    backgroundColor: '#B4BBC3',
                    borderRadius: 5
                }
            }} 
            open={this.state.show} onClose={this.onCloseModal} little>
                <h2 className="category-form-title">Add Category</h2>
                <form className="add-category-form" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <label>*Category Name:</label>
                        <input ref={(element)=> {this.input = element}} type="text" value={this.state.title} placeholder="Provide category name..." onChange={this.handleInput}/>
                    </div>
                    {this.state.formInvalid && <div className="form-row">
                    <span className="warning">*Please fill the required fields</span>
                </div>}
                    <div className="form-row submit">
                        <input type="submit" value="Add Category"/>
                    </div>
                </form>
            </Modal>
    
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
      onAddCategory: (category) => dispatch(addCategory(category)),
      onCloseModal: ()=> dispatch(hideCategoryModal())
    };
  };
  

export default connect(
    null, mapDispatchToProps)(AddCategoryForm);