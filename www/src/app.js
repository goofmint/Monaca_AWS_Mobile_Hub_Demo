import Amplify, { Auth, Storage, API, Analytics } from 'aws-amplify';
import aws_exports from './aws-exports.js';
Amplify.configure(aws_exports);

console.log(Auth);
ons.ready(function() {
  window.Auth = Auth;
  window.Storage = Storage;
  window.Analytics = Analytics;
  console.log(API)
  window.API = API;
});
