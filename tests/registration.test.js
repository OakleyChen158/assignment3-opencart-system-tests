import { Selector } from 'testcafe';
import {
  REGISTER_URL,
  completeRegistrationForm,
  createUniqueUser,
  registration,
  registrationSuccessMessage,
} from './helpers/account.js';

fixture('T-A01 - F1 User Registration').page(REGISTER_URL);

test('A01-S1 - Register with valid details', async t => {
  const user = createUniqueUser('valid-registration');

  await completeRegistrationForm(t, user);

  await t
    .expect(registrationSuccessMessage.exists)
    .ok('The registration success message should be displayed')
    .expect(t.eval(() => window.location.href))
    .contains('route=account/success')
    .takeScreenshot('A01-S1-valid-registration.png');
});

test('A01-S2 - Reject registration with empty required fields', async t => {
  await t.click(registration.continueButton);

  const firstNameError = Selector('.text-danger').withText(
    'First Name must be between 1 and 32 characters!',
  );
  const emailError = Selector('.text-danger').withText(
    'E-Mail Address does not appear to be valid!',
  );

  await t
    .expect(firstNameError.exists)
    .ok('A missing first name should be rejected')
    .expect(emailError.exists)
    .ok('A missing email should be rejected')
    .takeScreenshot('A01-S2-empty-required-fields.png');
});

test('A01-S3 - Reject registration when password confirmation differs', async t => {
  const user = createUniqueUser('password-mismatch');

  await completeRegistrationForm(t, user, {
    confirmPassword: 'DifferentPassword!2026',
  });

  const confirmationError = Selector('.text-danger').withText(
    'Password confirmation does not match password!',
  );

  await t
    .expect(confirmationError.exists)
    .ok('Mismatched passwords should be rejected')
    .takeScreenshot('A01-S3-password-mismatch.png');
});
