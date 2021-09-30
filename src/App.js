import React from 'react';
import Header from './Header';
import Projects from './Projects';
function App() {
    const isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const [light, setLight] = React.useState(isLight)

    window.matchMedia('(prefers-color-scheme: light)').onchange = (e) => {
        if (e.matches) {
            setLight(true)
        } else {
            setLight(false)
        }
    }
    return (
        <>
            <Header light={light} />
            <Projects light={light} />
        </>
    )
}

export default App;