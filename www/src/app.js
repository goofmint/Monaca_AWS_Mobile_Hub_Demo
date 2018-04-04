import Amplify, { Auth, Storage } from 'aws-amplify';
import aws_exports from './aws-exports.js';
Amplify.configure(aws_exports);

ons.ready(function() {
  window.Auth = Auth;
  console.log(Auth);
  console.log(Storage)
  window.Storage = Storage;
});
