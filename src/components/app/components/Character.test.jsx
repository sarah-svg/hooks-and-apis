import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('character conponent', () => {
  afterEach(() => cleanup());

  it('renders the character conatinor', () => {
    const { asFragment } = render(<Character />);
    expect(asFragment()).toMatchSnapshot();

  });
});
