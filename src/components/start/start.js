import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionCreator } from '../../store/actions';
import { uniqueCardsArray } from '../../store/reducer';
import './start.css';

function Start() {
    const closedCards = useSelector(state => state.closedCards);
    const dispatch = useDispatch();
    return (
        <>
            {
                closedCards.length === uniqueCardsArray.length &&
                <div className="congratulations"> Congratulations you win !</div>
            }
            <div className="welcome-circle"
                onClick={() => {
                    dispatch(ActionCreator.setScore(0));
                    dispatch(ActionCreator.setOpenedCards([]));
                    dispatch(ActionCreator.resetClosedCards());
                    dispatch(ActionCreator.resetCards());
                }}>
                <Link to="/game">
                    <h1 className="welcome-circle__text">
                        Start
                    </h1>
                </Link>
            </div>

        </>


    );
}

export default Start;