To fix this, you must review your Firebase Realtime Database or Firestore security rules and adjust them to grant the necessary access to your application. Ensure the rules are correctly written and allow the operations your application performs.  Test and iterate. 

Example of a properly configured Firestore rule:

```javascript
// Firestore security rules
// Allow read access to all documents in the collection 'products' for authenticated users
match /databases/{database}/documents { 
  match /products/{document=**} {
    allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
  }
}
```

Remember to deploy your updated security rules to your Firebase project after making any changes.