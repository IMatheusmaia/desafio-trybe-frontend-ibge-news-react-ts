import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import App from '../App';
import renderWithContext from '../utils/renderWithContext';
import { responseAPI } from './mocks/responseAPI';

describe('Testa as funcionalidades da página de usuário', () => {
  beforeEach(async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue(await Promise.resolve({
      ok: true,
      status: 200,
      json: async () => responseAPI,
    }) as Response);
  });

  test('testa se ao clicar para favoritar uma notícia se é salvo no painel do usuário', async () => {
    renderWithContext(<App />, '/desafio-trybe-frontend-ibge-news-react-ts');

    const favBtn = await screen.findByTestId('favorite-38378');
    expect(favBtn).toBeInTheDocument();
    await userEvent.click(favBtn);

    const userBtn = await screen.findByTestId('nav-user');
    await userEvent.click(userBtn);

    const userNameInput = await screen.findByTestId('user-name');
    const userEmailInput = await screen.findByTestId('email-input');
    const userPasswordInput = await screen.findByTestId('password-input');
    const userBtnSubmit = await screen.findByTestId('login-submit-btn');

    await userEvent.type(userNameInput, 'Icaro');
    await userEvent.type(userEmailInput, 'mail@mail.com');
    await userEvent.type(userPasswordInput, '1234567');
    await userEvent.click(userBtnSubmit);

    const titleNotice = await screen.findByTestId('card-title-38378');
    const textNotice = await screen.findByTestId('card-text-38378');
    const dateNotice = await screen.findByTestId('card-date-38378');

    expect(titleNotice).toBeInTheDocument();
    expect(textNotice).toBeInTheDocument();
    expect(dateNotice).toBeInTheDocument();
  });
  test('testa se ao clicar em remover favirito a mensagem de nenhum favirito é exibida', async () => {
    renderWithContext(<App />, '/desafio-trybe-frontend-ibge-news-react-ts/user');
    const removeBtn = await screen.findByTestId('remove-38378');
    expect(removeBtn).toBeInTheDocument();
    await userEvent.click(removeBtn);
    const mensage = await screen.getByText('Você ainda não favoritou uma notícia.');
    expect(mensage).toBeInTheDocument();
  });
});
