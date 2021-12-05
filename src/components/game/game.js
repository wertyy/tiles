
import { useEffect, useRef } from 'react';
import { uniqueCardsArray } from '../../store/reducer';
import Stats from '../stats/stats';

import { useDispatch, useSelector } from 'react-redux';

import { ActionCreator } from '../../store/actions';

import './game.css';
import { Redirect } from 'react-router';

export default function Game() {
    const tiles = useSelector(state => state.allCards);
    const openedTiles = useSelector(state => state.openCards);
    const closedCards = useSelector(state => state.closedCards);
    const dispatch = useDispatch();

    const timer = useRef(null);

    const checkSameness = () => {
        const [first, second] = openedTiles;
        if (tiles[first].type === tiles[second].type) {
            dispatch(ActionCreator.addClosedCards(tiles[first].type));
        }
        dispatch(ActionCreator.setOpenedCards([]));
        clearTimeout(timer.current);
    }

    useEffect(() => {
        if (openedTiles.length === 2) {
            timer.current = setTimeout(checkSameness, 1000);
        }
        return () => {
            clearTimeout(timer.current);
        };
    }, [openedTiles]);


    const getClassName = (isOpened, isClosed) => {
        if (isClosed) {
            return 'tiles__tile--correct';
        } else if (isOpened) {
            return 'tiles__tile--front';
        } else {
            return 'tiles__tile--back';
        }
    };



    return (
        <>
            {uniqueCardsArray.length === closedCards.length && <Redirect to="/start" />}
            <div className="tiles-header">
                <p> Choose two cards with same content consequtively to make them vanish </p>
            </div>
            <ul className="tiles">
                {tiles.map((tile, i) => {
                    const isOpened = openedTiles.includes(i);
                    const isClosed = closedCards.includes(tile.type);


                    return (
                        <li key={i}
                            className={`tiles__tile ${getClassName(isOpened, isClosed)}`}
                            style={isOpened ? { backgroundColor: tile.color } : {}}
                            onClick={() => {
                                if (openedTiles.length === 1) {
                                    dispatch(ActionCreator.setOpenedCards([...openedTiles, i]));
                                    dispatch(ActionCreator.incScore());
                                } else {
                                    if (openedTiles.length === 2) {
                                        checkSameness();
                                    }
                                    dispatch(ActionCreator.setOpenedCards([i]));
                                }

                            }}
                        >
                        </li>
                    )
                })}
            </ul>
            <Stats />
        </>
    )
};