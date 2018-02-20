import { ThemeAppPage } from './app.po';

describe('theme-app App', () => {
  let page: ThemeAppPage;

  beforeEach(() => {
    page = new ThemeAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
