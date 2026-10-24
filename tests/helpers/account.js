import { Selector } from 'testcafe';

export const BASE_URL = 'https://opencart.abstracta.us/';
export const REGISTER_URL = `${BASE_URL}index.php?route=account/register`;
export const LOGIN_URL = `${BASE_URL}index.php?route=account/login`;
export const LOGOUT_URL = `${BASE_URL}index.php?route=account/logout`;
export const ACCOUNT_URL = `${BASE_URL}index.php?route=account/account`;

export const registration = {
  firstName: Selector('#input-firstname'),
  lastName: Selector('#input-lastname'),
  email: Selector('#input-email'),
  telephone: Selector('#input-telephone'),
  password: Selector('#input-password'),
  confirmPassword: Selector('#input-confirm'),
  privacyPolicy: Selector('input[name="agree"]'),
  continueButton: Selector('input[type="submit"][value="Continue"]'),
};

export const login = {
  email: Selector('#input-email'),
  password: Selector('#input-password'),
  loginButton: Selector('input[type="submit"][value="Login"]'),
};

export const successHeading = Selector('#content h1');
export const registrationSuccessMessage = Selector('#content').withText(
  'Congratulations! Your new account has been successfully created!',
);
export const logoutSuccessMessage = Selector('#content').withText(
  'You have been logged off your account.',
);
export const warningAlert = Selector('.alert-danger');

export function createUniqueUser(prefix = 'uts-a3') {
  const uniquePart = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

  return {
    firstName: 'UTS',
    lastName: 'Tester',
    email: `${prefix}-${uniquePart}@example.com`,
    telephone: '0400000000',
    password: 'A3TestPassword!2026',
  };
}

export async function completeRegistrationForm(t, user, options = {}) {
  const confirmationPassword =
    options.confirmPassword === undefined ? user.password : options.confirmPassword;
  const acceptPrivacyPolicy =
    options.acceptPrivacyPolicy === undefined ? true : options.acceptPrivacyPolicy;

  await t
    .typeText(registration.firstName, user.firstName)
    .typeText(registration.lastName, user.lastName)
    .typeText(registration.email, user.email)
    .typeText(registration.telephone, user.telephone)
    .typeText(registration.password, user.password)
    .typeText(registration.confirmPassword, confirmationPassword);

  if (acceptPrivacyPolicy) {
    await t.click(registration.privacyPolicy);
  }

  await t.click(registration.continueButton);
}

export async function registerUser(t, user) {
  await t.navigateTo(REGISTER_URL);
  await completeRegistrationForm(t, user);
  await t
    .expect(registrationSuccessMessage.exists)
    .ok('The registration success message should be displayed');
}

export async function logoutUser(t) {
  await t.navigateTo(LOGOUT_URL);
  await t
    .expect(logoutSuccessMessage.exists)
    .ok('The logout success message should be displayed');
}

export async function submitLogin(t, email, password) {
  await t
    .navigateTo(LOGIN_URL)
    .typeText(login.email, email)
    .typeText(login.password, password)
    .click(login.loginButton);
}
