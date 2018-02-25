import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import DateGroup from '../DateGroup';
import Card from '../../components/Card';
import AddButton from '../AddButton';
import DragHandle from '../DragHandle';
import FilterList, {FilterItem} from '../Filter';
import TaskFilter from '../TaskFilter';
import { getCards, addCard } from '../../actions/cardActions';
import { showCardModal } from '../../actions/modalActions';
import { VISIBILITY_FILTERS } from '../../constants/actionTypes';
import './style.scss'

class Category extends React.Component{
    
    onAddCard = (event)=> {
        this.props.dispatch(showCardModal(this.props.id));
    }

    componentDidMount() {
        this.props.dispatch(getCards(this.props.id));
    }
    render() {    
        const {id, title, cards} = this.props;

        const cardGroups =[];
        cards && cards[id] && cards[id].forEach(card => {
            const key = moment(card.completed_at).isValid() ? moment(card.completed_at).format('DD MMM YYYY') : moment().format('DD MMM YYYY');
            let cardGroupIndex = cards[id].length;
            let cardGroup = cardGroups.filter((cardGroup, index)=> {
                if(moment(cardGroup.date).format('DD MMM YYYY') === key) {
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
            cardGroups.sort((a, b) => {
                return  moment(b.date) - moment(a.date);
            })
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
                {
                    (cards && cards[id] && cards[id].length > 1) && 
                    <TaskFilter/>
                }
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    filter: PropTypes.string,
    cards: PropTypes.object,
}

 
const mapStateToProps = ({ cards }) => ({
    cards
  });
  
  export default connect(
    mapStateToProps)(Category);