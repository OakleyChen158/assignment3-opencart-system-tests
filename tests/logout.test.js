import { Selector } from 'testcafe';
import {
  ACCOUNT_URL,
  LOGIN_URL,
  LOGOUT_URL,
  createUniqueUser,
  logoutSuccessMessage,
  registerUser,
} from './helpers/account.js';

fixture('T-A03 - F3 User Logout').page(ACCOUNT_URL);

test('A03-S1 - Log out from the My Account menu', async t => {
  const user = createUniqueUser('menu-logout');

  await registerUser(t, user);

  const myAccountMenu = Selector('#top-links a[title="My Account"]');
  const logoutLink = Selector('#top-links a').withAttribute(
    'href',
    /route=account\/logout/,
  );

  await t
    .click(myAccountMenu)
    .click(logoutLink)
    .expect(logoutSuccessMessage.exists)
    .ok('The logout success message should be displayed')
    .takeScreenshot('A03-S1-menu-logout.png');
});

test('A03-S2 - Log out through the logout URL', async t => {
  const user = createUniqueUser('direct-logout');

  await registerUser(t, user);
  await t.navigateTo(LOGOUT_URL);

  await t
    .expect(logoutSuccessMessage.exists)
    .ok('The logout success message should be displayed')
    .expect(t.eval(() => window.location.href))
    .contains('route=account/logout')
    .takeScreenshot('A03-S2-direct-logout.png');
});

test('A03-S3 - Require login after logout when opening My Account', async t => {
  const user = createUniqueUser('protected-page');

  await registerUser(t, user);
  await t.navigateTo(LOGOUT_URL).navigateTo(ACCOUNT_URL);

  await t
    .expect(Selector('#input-email').exists)
    .ok('The login form should be displayed')
    .expect(t.eval(() => window.location.href))
    .contains('route=account/login')
    .takeScreenshot('A03-S3-protected-page-after-logout.png');
});
