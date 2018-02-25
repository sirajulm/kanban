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
            "progress": 0,
            "team": {
                "id": 987,
                "name": "KickAssTeam"
            },
            "assignee": {
                "id": 123,
                "name": "Sirajul Muneer C B",
                "avatar": "https://pbs.twimg.com/profile_images/482422347157094400/YpdekjL8_400x400.jpeg"
            }
        }}));
    }

    componentDidMount() {
        this.props.dispatch(getCards(this.props.id));
    }
    render() {    
        const {id, title, cards} = this.props;

        const cardGroups =[];
        cards && cards[id] && cards[id].forEach(card => {
            const key = card.completed_at || "incomplete";
            let cardGroupIndex = cards[id].length;
            let cardGroup = cardGroups.filter((cardGroup, index)=> {
                if(cardGroup.date === key) {
                    cardGroupIndex = index;
                    return true;
                }
                return false;
            });

            cardGroup = (cardGroup.length) ? cardGroup[0] : {
                date: key,
                cards: []
            };

            cardGroup.cards.push(card);
            cardGroups.splice(cardGroupIndex, 1, cardGroup);
        });

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
                {
                    cardGroups && cardGroups.map((groupItem)=> {
                        return <DateGroup key={groupItem.date} date={groupItem.date}>
                        {
                            groupItem.cards && groupItem.cards.filter((card, index) => {
                                if(this.props.filter === 'SHOW_COMPLETED') {
                                    return card.complete;
                                } else if(this.props.filter === 'SHOW_INCOMPLETE') {
                                    return !card.complete;
                                } else {
                                    return true;
                                }
                            }).map((card, index) => {
                                return (<Card key={index} {...card}/>
                                )
                            })
                        }
                    </DateGroup>
                    })
                }
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