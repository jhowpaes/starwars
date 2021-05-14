import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';

import Header from '../../components/Header';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  }
});

describe('Header component', () => {
  it('should be able to render an header', () => {
    const { getByTestId } = render(
      <Header title="Test" />
    );

    expect(getByTestId('cpHeader')).toBeTruthy();
  });

  it('should contain a button go back', () => {
    const { getByTestId } = render(
      <Header title="Test" />
    );

    expect(getByTestId('btnHeader')).toBeTruthy();
  });
});