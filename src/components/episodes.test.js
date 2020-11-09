import React from 'react';
import {render, screen} from '@testing-library/react';
import Episodes from './Episodes'

test('renders to the screen', () => {
    render(<Episodes episodes={[]}/>)
})

test('rerenders correct information', () =>{
    const {rerender} = render(<Episodes episodes={[]}/>)

    let episodeObjects = screen.queryAllByTestId('episode')
    expect(episodeObjects).toStrictEqual([])

    rerender(<Episodes episodes={[]}/>)
    expect(episodeObjects).toHaveLength(0)
})