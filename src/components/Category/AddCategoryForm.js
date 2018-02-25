import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import hash from 'string-hash';
import { addCategory } from '../../actions/categoryActions';

window.hash = hash;
class AddCategoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.open,
            title:""
        }
    }
    handleInput = (event)=> {
        this.setState({title: event.target.value});
    }
    handleSubmit = (event)=> {
        this.props.onAddCategory({category: {
            "id": hash(this.state.title),
            "title": this.state.title,
            "filter": "SHOW_ALL"
          }})
        event.preventDefault();
    }
    onCloseModal = ()=> {
        this.setState({show: false});
    }
    render() {
        return (
            <Modal open={this.state.show} onClose={this.onCloseModal} little>
              <form onSubmit={this.handleSubmit}>
                  <label>Category Name:</label>
                  <input type="text" value={this.state.title} placeholder="Provide category name..." onChange={this.handleInput}/>
              </form>
            </Modal>
    
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
      onAddCategory: (category) => dispatch(addCategory(category))
    };
  };
  

export default connect(
    null, mapDispatchToProps)(AddCategoryForm);