import React from 'react';
import PersistentDrawerLeft from '../common/components/PersistentDrawerLeft';
import SpacingGrid from '../common/components/SpacingGrid';
import About from '../common/components/About';

export default function Landing() {

    return (
        <>
            <PersistentDrawerLeft />
            <SpacingGrid />
            <About />
        </>
    );
}
