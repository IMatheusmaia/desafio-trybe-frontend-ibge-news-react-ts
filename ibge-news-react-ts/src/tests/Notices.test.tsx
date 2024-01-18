import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import App from '../App';
import renderWithContext from '../utils/renderWithContext';
import { responseAPI } from './mocks/responseAPI';

describe('Testa as funcionalidades da página de noticias', () => {
  beforeEach(async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(await Promise.resolve({
      ok: true,
      status: 200,
      json: async () => responseAPI,
    }) as Response);
  });

  test('testa se ao clicar em mais notícias se é exibido as notícias', async () => {
    renderWithContext(<App />, '/desafio-trybe-frontend-ibge-news-react-ts');
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(10);

    const buttonMoreCards = await screen.findByTestId('more-news');
    await userEvent.click(buttonMoreCards);
    const cardsAfterClick = await screen.findAllByRole('article');
    expect(cardsAfterClick.length).toBe(12);
  });

  test('testa se ao clicar no botão de favoritar um botão de desfavoritar é renderizado', async () => {
    renderWithContext(<App />, '/desafio-trybe-frontend-ibge-news-react-ts');

    const favBtn = await screen.findByTestId('favorite-38378');

    expect(favBtn).toBeInTheDocument();

    await userEvent.click(favBtn);

    const removeBtn = await screen.findByTestId('remove-38378');
    expect(removeBtn).toBeInTheDocument();
    await userEvent.click(removeBtn);
    expect(favBtn).toBeInTheDocument();
  });
});
