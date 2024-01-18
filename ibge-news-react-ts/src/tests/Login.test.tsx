import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../App';
import renderWithContext from '../utils/renderWithContext';

describe('testa elementoes e funcionalidades da página de login', () => {
  test('testa elementos na página de login', async () => {
    renderWithContext(<App />, '/login');
    const figura = screen.getByAltText('ilustration');
    const title = screen.getByText('Login');
    const nameInput = screen.getByTestId('user-name');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    expect(figura).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    await userEvent.type(nameInput, 'Icaro');
    expect(button).toBeDisabled();
    await userEvent.type(emailInput, 'mail@mail.com');
    expect(button).toBeDisabled();
    await userEvent.type(passwordInput, '1234567');
    expect(button).toBeEnabled();
    await userEvent.clear(nameInput);
    await userEvent.type(passwordInput, '123456');
    expect(button).toBeDisabled();
  });
});
