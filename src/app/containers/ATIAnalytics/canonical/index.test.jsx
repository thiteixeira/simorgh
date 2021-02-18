import React from 'react';
import { render } from '@testing-library/react';
import CanonicalATIAnalytics from '.';

describe('Canonical ATI Analytics', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockPageviewParams = 'key=value&key2=value2&x8=[simorgh]';

  it('should render a noscript image for non-JS users', () => {
    const { container } = render(
      <CanonicalATIAnalytics pageviewParams={mockPageviewParams} />,
    );
    expect(container.querySelector('noscript')).toBeInTheDocument();
  });
});
