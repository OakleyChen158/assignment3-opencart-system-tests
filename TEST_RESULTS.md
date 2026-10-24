# Automated Test Run

- Date: 25 October 2026 (Australia/Sydney)
- Target: https://opencart.abstracta.us/
- Framework: TestCafe 3.7.6
- Browser: Google Chrome 156.0.8078.47 (headless)
- Environment: GitHub Codespaces, Ubuntu 24.04
- Result: **9 passed, 0 failed**
- Duration: 1 minute 22 seconds

## Scenario results

| Test Case | Scenario | Result |
| --- | --- | --- |
| T-A01 User Registration | A01-S1 Register with valid details | Pass |
| T-A01 User Registration | A01-S2 Reject empty required fields | Pass |
| T-A01 User Registration | A01-S3 Reject password confirmation mismatch | Pass |
| T-A02 User Login | A02-S1 Log in with valid credentials | Pass |
| T-A02 User Login | A02-S2 Reject an incorrect password | Pass |
| T-A02 User Login | A02-S3 Reject an unregistered email | Pass |
| T-A03 User Logout | A03-S1 Log out through the My Account menu | Pass |
| T-A03 User Logout | A03-S2 Log out through the logout URL | Pass |
| T-A03 User Logout | A03-S3 Require login after logout | Pass |

Screenshots and the machine-readable JSON report are generated under `artifacts/` when the suite is run. They are intentionally excluded from Git because they are run-specific evidence.
