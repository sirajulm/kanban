import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DateGroup from '../DateGroup';
import Card from '../../components/Card';
import AddButton from '../AddButton';
import DragHandle from '../DragHandle';
import FilterList, {FilterItem} from '../Filter';
import { getCards, addCard } from '../../actions/cardActions';
import { VISIBILITY_FILTERS } from '../../constants/actionTypes';
import './style.scss'

class Category extends React.Component{
    
    onAddCard = (event)=> {
        this.props.dispatch(addCard({id: this.props.id, card: {
            "id": "fff",
            "category_id": this.props.id,
            "description": "Create New designs in KAT for Boards, Cards, Details, Timelines and Graphs",
            "created_at": "10 JAN 2018 00:00:00",
            "completed_at": "",
            "complete": false,
            "estimate": "2h",
            "priority": 3,
            "progress": 100,
            "team": {
                "id": 987,
                "name": "KickAssTeam"
            },
            "assignee": {
                "id": 123,
                "name": "Sirajul Muneer C B",
                "profile_pic": "https://pbs.twimg.com/profile_images/482422347157094400/YpdekjL8_400x400.jpeg"
            }
        }}));
    }

    componentDidMount() {
        this.props.dispatch(getCards(this.props.id));
    }
    render() {
        const {id, title, cards} = this.props;
        return (
            <div className="category">
                <div className="category-header">
                    <div className="category-title">{title}</div>
                    <DragHandle/>
                    <div className="more-button">
                        <img src="/src/public/img/more.png"/>
                    </div>
                </div>            
                <div className="card-container">
                <DateGroup date="10 JAN 2018">
                    {
                        cards && cards[id] && cards[id].filter((card, index) => {
                            if(this.props.filter === 'SHOW_COMPLETED') {
                                return card.complete;
                            } else if(this.props.filter === 'SHOW_INCOMPLETE') {
                                return !card.complete;
                            } else {
                                return true;
                            }
                        }).map((card, index) => {
                            return (<Card key={index}
                                team={card.team.name}
                                progress={card.progress}
                                isComplete={true}/>
                            )
                        })
                    }
                </DateGroup>
                {/* <DateGroup date="10 JAN 2018">
                    {
                        cards && cards[id] && cards[id].map((card, index) => {
                            return (<Card key={index}
                                team={card.team.name}
                                progress={card.progress}
                                isComplete={true}/>
                            )
                        })
                    }
                </DateGroup> */}
                </div>
                <AddButton onAction={this.onAddCard}/>
                <FilterList>
                    <FilterItem category={this.props.id} dispatch={this.props.dispatch} filter={VISIBILITY_FILTERS.SHOW_INCOMPLETE} title="Incomplete" active={(VISIBILITY_FILTERS.SHOW_INCOMPLETE === this.props.filter)}/>
                    <FilterItem category={this.props.id} dispatch={this.props.dispatch} filter={VISIBILITY_FILTERS.SHOW_COMPLETED}title="Complete" active={(VISIBILITY_FILTERS.SHOW_COMPLETED === this.props.filter)}/>
                    <FilterItem category={this.props.id} dispatch={this.props.dispatch} filter={VISIBILITY_FILTERS.SHOW_ALL} title="All" active={(VISIBILITY_FILTERS.SHOW_ALL === this.props.filter)}/>
                </FilterList>
            </div>
        )
    }
    
}

Category.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    filter: PropTypes.string,
    cards: PropTypes.object,
}

 
const mapStateToProps = ({ cards }) => ({
    cards
  });
  
  export default connect(
    mapStateToProps)(Category);