import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { userEvent } from '@testing-library/user-event';
import App from '../App';
import renderWithContext from '../utils/renderWithContext';
import { responseAPI } from './mocks/responseAPI';

const path = '/desafio-trybe-frontend-ibge-news-react-ts/login';

describe('Testa se a partir da rota raiz os elementos esperados são renderizados e se os redirecionamentos de rota tem o comportamento esperado', () => {
  beforeEach(async () => (
    vi.spyOn(global, 'fetch').mockResolvedValue(await Promise.resolve({
      ok: true,
      status: 200,
      json: async () => responseAPI,
    }) as Response)
  ));
  test('testa se na rota raiz possui os elementos esperados', async () => {
    renderWithContext(<App />);
    const logo = await screen.findByRole('img', { name: /logo/i });
    const home = await screen.findByTestId('nav-home');
    const user = await screen.findByTestId('nav-user');
    const inputSwitch = await screen.findByTestId('input-switch');
    const latestCard = await screen.findByTestId('card-38378');
    const cardTitle = await screen.findByTestId('card-title-38378');
    const cardText = await screen.findByTestId('card-text-38378');
    const cardDate = await screen.findByTestId('card-date-38378');
    const link = await screen.findByTestId('know-more-38378');
    const favorite = await screen.findByTestId('favorite-38378');
    const sortCards = await screen.findByRole('list');
    const allCards = await screen.findAllByRole('article');
    const buttonMoreCards = await screen.findByTestId('more-news');
    const linkedin = await screen.findByTestId('linkedin');
    const github = await screen.findByTestId('github');

    expect(logo).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(inputSwitch).toBeInTheDocument();
    expect(latestCard).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle).toHaveTextContent('6ª edição do Seminário IBGE de Portas...');
    expect(cardText).toBeInTheDocument();
    expect(cardText).toHaveTextContent('Citando a missão do IBGE, a gerente...');
    expect(link).toBeInTheDocument();
    expect(favorite).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
    expect(sortCards).toBeInTheDocument();
    expect(allCards).toHaveLength(10);
    expect(buttonMoreCards).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();
    expect(github).toBeInTheDocument();
  });
  test('testa se ao clicar no botão de login é redirecionado para página de login', async () => {
    renderWithContext(<App />);
    const user = await screen.findByTestId('nav-user');
    userEvent.click(user);
    const login = await screen.findByTestId('login-title');
    expect(login).toBeInTheDocument();
  });
  test('testa se ao clicar no botão de notícias a partir da página de login se é redirecionado para página de notícias', async () => {
    renderWithContext(<App />, path);
    const home = await screen.findByTestId('nav-home');
    userEvent.click(home);
    const logo = await screen.findByAltText('ibge-logo');
    expect(logo).toBeInTheDocument();
  });
  test('testa se ao clicar no botão de logar a partir da página de login se é redirecionado para página de usuário', async () => {
    renderWithContext(<App />, path);
    const nameInput = screen.getByTestId('user-name');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    await userEvent.type(nameInput, 'Icaro');
    await userEvent.type(emailInput, 'mail@mail.com');
    await userEvent.type(passwordInput, '1234567');
    userEvent.click(button);
    const descricao = await screen.findByText('Você ainda não favoritou uma notícia.');
    const name = await screen.findByText('Olá, Icaro!');

    expect(descricao).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
  test('testa se ao clicar no botão de deslogar a partir da página de login se é redirecionado para página de notícias', async () => {
    renderWithContext(<App />, path);
    const logout = await screen.findByRole('button');
    expect(logout).toBeInTheDocument();

    await userEvent.click(logout);
    const logo = await screen.findByAltText('ibge-logo');
    expect(logo).toBeInTheDocument();
  });
});
