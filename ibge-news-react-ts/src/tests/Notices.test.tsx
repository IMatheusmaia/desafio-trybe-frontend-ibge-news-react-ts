import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import App from '../App';
import renderWithContext from '../utils/renderWithContext';
import { responseAPI } from './mocks/responseAPI';

describe('Testa as funcionalidades da página de noticias', () => {
  test('testa se ao clicar em mais notícias se é exibido as notícias', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(await Promise.resolve({
      ok: true,
      status: 200,
      json: async () => responseAPI,
    }) as Response);

    renderWithContext(<App />, '/');
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(10);

    const buttonMoreCards = await screen.findByTestId('more-news');
    await userEvent.click(buttonMoreCards);
    const cardsAfterClick = await screen.findAllByRole('article');
    expect(cardsAfterClick.length).toBe(12);
  });
});
