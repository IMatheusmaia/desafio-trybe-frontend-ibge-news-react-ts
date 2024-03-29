import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProviderContext from '../context/ProviderContext';

function renderWithContext(component:
React.JSX.Element, initialPath = '/desafio-trybe-frontend-ibge-news-react-ts') {
  return render(
    <MemoryRouter initialEntries={ [initialPath] }>
      <ProviderContext>
        {component}
      </ProviderContext>
    </MemoryRouter>,
  );
}
export default renderWithContext;
