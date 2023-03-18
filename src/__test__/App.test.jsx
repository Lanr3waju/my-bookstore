import * as React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it('renders App component', () => {
    const app = render(<App />);
    expect(app.getByText('Lanrewaju BOOKSTORE')).toBeInTheDocument();
    app.unmount();
  });
});