import Amplify, { Auth, Analytics } from 'aws-amplify';
import aws_exports from './aws-exports.js';
Amplify.configure(aws_exports);

ons.ready(function() {
  window.Auth = Auth;
});
