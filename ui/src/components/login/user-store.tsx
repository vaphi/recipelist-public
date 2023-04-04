import { Auth0ContextInterface, User } from '@auth0/auth0-react';
import { createGalactic } from 'galactic-state';

export const [userAuth] = createGalactic('');
export const [userIsAuthenticate] = createGalactic(false);