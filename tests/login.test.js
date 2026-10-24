import { Selector } from 'testcafe';
import {
  ACCOUNT_URL,
  LOGIN_URL,
  createUniqueUser,
  logoutUser,
  registerUser,
  submitLogin,
  warningAlert,
} from './helpers/account.js';

fixture('T-A02 - F2 User Login').page(LOGIN_URL);

test('A02-S1 - Log in with valid credentials', async t => {
  const user = createUniqueUser('valid-login');

  await registerUser(t, user);
  await logoutUser(t);
  await submitLogin(t, user.email, user.password);

  await t
    .expect(Selector('#content h2').withText('My Account').exists)
    .ok('The My Account page should be displayed')
    .expect(t.eval(() => window.location.href))
    .contains('route=account/account')
    .takeScreenshot('A02-S1-valid-login.png');
});

test('A02-S2 - Reject login with an incorrect password', async t => {
  const user = createUniqueUser('wrong-password');

  await registerUser(t, user);
  await logoutUser(t);
  await submitLogin(t, user.email, 'IncorrectPassword!2026');

  await t
    .expect(warningAlert.innerText)
    .contains('Warning: No match for E-Mail Address and/or Password.')
    .takeScreenshot('A02-S2-wrong-password.png');
});

test('A02-S3 - Reject login with an unregistered email', async t => {
  const unknownUser = createUniqueUser('not-registered');

  await submitLogin(t, unknownUser.email, unknownUser.password);

  await t
    .expect(warningAlert.innerText)
    .contains('Warning: No match for E-Mail Address and/or Password.')
    .expect(t.eval(() => window.location.href))
    .contains('route=account/login')
    .takeScreenshot('A02-S3-unregistered-email.png');
});
