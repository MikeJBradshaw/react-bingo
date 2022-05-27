import { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Box, Grid, Text } from 'grommet';
import type { ConnectedProps} from 'react-redux';
import type { RootState} from './store';
import './App.css';
import Card from './components/Card';


const connector = connect(({ app: { board, winner} }: RootState) => ({ board, winner }));


const App: FunctionComponent<ConnectedProps<typeof connector>> = ({ board, winner }) => {
    return (
        <Grid
            rows={['auto', 'auto']}
            columns={['auto']}
            gap="xsmall"
            areas={[
                { name: 'header', start: [0, 0], end: [1, 0] },
                { name: 'main', start: [0, 1], end: [1, 1] },
            ]}
        >
            <Box gridArea="header" background="brand" pad="5px">
                <Box direction="row" />
                <Box direction="row" justify="center"><Text size="xlarge" weight={250}>Cringe Bingo</Text></Box>
                <Box direction="row" />
            </Box>
            <Box gridArea="main" className="board-box" pad="10px">
                <Box direction="row">
                    <Card id={0} /><Card id={1} /><Card id={2} /><Card id={3} /><Card id={4} />
                </Box>
                <Box direction="row">
                    <Card id={5} /><Card id={6} /><Card id={7} /><Card id={8} /><Card id={9} />
                </Box>
                <Box direction="row">
                    <Card id={10} /><Card id={11} /><Card id={12} /><Card id={13} /><Card id={14} />
                </Box>
                <Box direction="row">
                    <Card id={15} /><Card id={16} /><Card id={17} /><Card id={18} /><Card id={19} />
                </Box>
                <Box direction="row">
                    <Card id={20} /><Card id={21} /><Card id={22} /><Card id={23} /><Card id={24} />
                </Box>
                <Box direction="column" pad="25">
                    {winner && <Box direction="row" justify="center"><h1>No one really wins with cringe bingo...but technically you are the "winner"</h1></Box>}
                </Box>
            </Box>
        </Grid>
    );
}

export default connector(App);
