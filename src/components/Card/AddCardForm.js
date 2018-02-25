import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import hash from 'string-hash';
import moment from 'moment';
import { addCard } from '../../actions/cardActions';
import {hideCardModal} from '../../actions/modalActions';
import './cardForm.scss';
class AddCardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: this.props.open || false,
            description:"",
            estimate: "",
            complete: false,
            priority: 1,
            progress: 0,
            formInvalid: false
        }
    }
    componentWillReceiveProps(newProps) {
        if(this.props.open !== newProps.open) {
            this.setState({
                show: newProps.open, 
                description: '', 
                estimate: '', 
                priority:1 ,
                formInvalid: false
            });
        }
    }
    handleInput = (event)=> {
        const field = event.target.name;
        const newState = {[field]: event.target.value};
        this.setState({[field]: event.target.value});
    }
    handleSubmit = (event)=> {
        if(this.state.description == "" || this.state.estimate == "") {
            event.preventDefault();
            this.setState({formInvalid: true});
            return;
        }
        this.setState({formInvalid: false});
        this.props.onAddCard({id: this.props.categoryId, card: {
            "id": hash(this.state.description),
            "category_id": this.props.categoryId,
            "description": this.state.description,
            "created_at": moment().format('DD MMM, YYYY HH:mm:ss'),
            "completed_at": "",
            "complete": this.state.complete,
            "estimate": this.state.estimate,
            "priority": parseInt(this.state.priority, 10) || 1,
            "progress": this.state.progress,
            "team": {
                "id": 987,
                "name": "KickAssTeam"
            },
            "assignee": {
                "id": 123,
                "name": "Sirajul Muneer C B",
                "avatar": "https://pbs.twimg.com/profile_images/482422347157094400/YpdekjL8_400x400.jpeg"
            }
        }});
        this.onCloseModal();
        event.preventDefault();
    }
    onCloseModal = ()=> {
        this.props.onCloseModal(this.props.categoryId);
    }
    componentDidMount() {
        // this.input && this.input.focus();
    }
    componentDidUpdate() {
        // this.input && this.input.focus();
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
                open={this.state.show} 
                onClose={this.onCloseModal} 
                little>
                <h2 className="card-form-title">Add Card</h2>                
                <form className="add-card-form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <label>*Card Description:</label>
                    <input ref={(element)=> {this.input = element}} type="text" name="description" value={this.state.description} placeholder="Provide category name" onChange={this.handleInput}/>
                </div>
                <div className="form-row">
                    <label>*Estimate:</label>
                    <input type="text" name="estimate" value={this.state.estimate} placeholder="Provide estimate" onChange={this.handleInput}/>
                </div>
                <div className="form-row">
                    <label>Priority:</label>
                    <input type="text" name="priority" value={this.state.priority} placeholder="Provide task priority" onChange={this.handleInput}/>
                </div>
                {this.state.formInvalid && <div className="form-row">
                    <span className="warning">*Please fill the required fields</span>
                </div>}
                <div className="form-row submit">
                    <input type="submit" value="Add Card"/>
                </div>
                </form>
            </Modal>
    
        )
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
      onAddCard: (payload) => dispatch(addCard(payload)),
      onCloseModal: (categoryId)=> dispatch(hideCardModal(categoryId))
    };
  };
  

export default connect(
    null, mapDispatchToProps)(AddCardForm);