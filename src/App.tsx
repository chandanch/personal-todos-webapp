import React, { FC, ReactElement } from 'react';
import Digit from './Digit';

const App: FC = (): ReactElement => {
    return (
        <div>
            Personl Todos Manager <Digit />{' '}
        </div>
    );
};

export default App;
