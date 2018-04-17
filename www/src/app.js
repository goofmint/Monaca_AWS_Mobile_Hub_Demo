import Amplify, { Auth, Storage, API } from 'aws-amplify';
import aws_exports from './aws-exports.js';
Amplify.configure(aws_exports);

ons.ready(function() {
  window.Auth = Auth;
  window.Storage = Storage;
  console.log(API)
  window.API = API;
});
