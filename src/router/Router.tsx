import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from '../components/Layout/NavBar';
import About from '..//pages/about';
import PokemonContainer from '../containers/PokemonContainer';

const views = [
    { path: "/", element: <About /> },
    { path: "/pokemon", element: <PokemonContainer /> },

];

const App: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                {views.map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<NavBar>{element}</NavBar>}
                    />
                ))}
            </Routes>
        </HashRouter>
    );
};

export default App;
