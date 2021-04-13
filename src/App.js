import './index.css';
import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';

// components
import FullPageLoading from './component/loading/FullPageLoading';

// components - Home
const HomeMain = lazy(() => import('./component/home/HomeMain'));

const theme = unstable_createMuiStrictModeTheme();

const AppContainer = styled.div`
    animation: fadein 1.5s;
    -moz-animation: fadein 1.5s; /* Firefox */
    -webkit-animation: fadein 1.5s; /* Safari and Chrome */
    -o-animation: fadein 1.5s; /* Opera */
    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`;

function App() {
    return (
        <ThemeProvider theme = {theme}>
            <BrowserRouter>
                <Suspense fallback={<FullPageLoading></FullPageLoading>}>
                    <AppContainer>
                        <Switch>
                            {/* Home */}
                            <Route exact path='/' component={HomeMain}></Route>
                        </Switch>
                    </AppContainer>
                </Suspense>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
