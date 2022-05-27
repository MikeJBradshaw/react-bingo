import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Box } from 'grommet';
import { DISPLAY } from '../reducers/app';
import { updateBoard } from '../actions/app';
import type { ConnectedProps} from 'react-redux';
import type { RootState} from '../store';


const connector = connect(
    ({ app: { board }}: RootState) => ({ board }),
    { updateBoard }
);


interface CardOwnProps {
    id: number;
}


const Card: FunctionComponent<ConnectedProps<typeof connector> & CardOwnProps> = ({ board, updateBoard, id }) => (
    <Box
        id={`${id}`}
        className="bingo-card"
        style={board[id] ? { background: 'darkgreen' } : { }}
        onClick={() => updateBoard(id)}
    >{DISPLAY[id]}</Box>
)


export default connector(Card);
