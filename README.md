# Firebase Database Rules Misconfiguration

This repository demonstrates a common error in Firebase applications caused by improperly configured Realtime Database or Firestore security rules.

The `firebaseRulesBug.js` file shows code that attempts to access data that is prohibited by the database rules. The `firebaseRulesSolution.js` file shows the corrected code and how to properly configure rules to prevent errors.

## How to reproduce

1. Clone the repository.
2. Set up a Firebase project.
3. Configure your database rules (incorrectly, as shown in `firebaseRulesBug.js`).
4. Run `firebaseRulesBug.js` - it will fail due to the restrictive security rules.
5. Correct the rules and run `firebaseRulesSolution.js` - it should succeed.