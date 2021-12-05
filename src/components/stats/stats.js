import { useSelector, useDispatch } from 'react-redux';
import { ActionCreator } from '../../store/actions';
import { uniqueCardsArray } from '../../store/reducer';
import './stats.css';

function Stats() {
    const score = useSelector(store => store.score);
    const dispatch = useDispatch();
    return (
        <div className="stats">
            <div className="stats__score current-score"> Moves: {score}</div>
            <button className="stats__button restart"
                onClick={() => {
                    dispatch(ActionCreator.setScore(0));
                    dispatch(ActionCreator.setOpenedCards([]));
                    dispatch(ActionCreator.resetClosedCards());
                    dispatch(ActionCreator.resetCards());
                }}
            > Restart</button>
        </div>
    )
}

export default Stats;