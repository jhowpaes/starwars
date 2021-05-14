import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import PeopleListing from '../../pages/PeopleListing';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  }
});

const onPressMock = jest.fn();

describe('People Listing Page', () => {
  it('should contains loading button', () => {
    const { getByTestId } = render(<PeopleListing />);

    expect(getByTestId('btnLoading')).toBeTruthy();
  });

  it('should should have the flatList', () => {
    const { getByTestId } = render(<PeopleListing />);

    expect(getByTestId('flPeople')).toBeTruthy();
  });
});