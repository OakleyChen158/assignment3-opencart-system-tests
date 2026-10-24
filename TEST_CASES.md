# Test Cases and Scenarios

Target website: https://opencart.abstracta.us/

## T-A01 F1 User Registration

| Scenario ID | Scenario | Expected result |
| --- | --- | --- |
| A01-S1 | Register with unique valid details and accept the privacy policy | The account is created and the success page is displayed |
| A01-S2 | Submit the registration form with required fields empty | The account is not created and required-field validation messages are displayed |
| A01-S3 | Enter different password and confirmation values | The account is not created and a password confirmation error is displayed |

## T-A02 F2 User Login

| Scenario ID | Scenario | Expected result |
| --- | --- | --- |
| A02-S1 | Log in with a registered email and correct password | The My Account page is displayed |
| A02-S2 | Log in with a registered email and incorrect password | Login is rejected and a warning is displayed |
| A02-S3 | Log in with an email that has not been registered | Login is rejected and a warning is displayed |

## T-A03 F3 User Logout

| Scenario ID | Scenario | Expected result |
| --- | --- | --- |
| A03-S1 | Log out through the My Account menu | The Account Logout page is displayed |
| A03-S2 | Log out through the logout URL | The Account Logout page is displayed and the session ends |
| A03-S3 | Open My Account after logging out | The user is redirected to the login page |

## Test data policy

- Tests use generated `example.com` email addresses.
- Names and phone numbers are synthetic.
- No real personal data or personal passwords are used.
- Positive login and logout scenarios provision disposable accounts as test preconditions.
