export const facebook = {
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_ID,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'name', 'displayName', 'picture', 'email']
};

export const google = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_ID,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
};
