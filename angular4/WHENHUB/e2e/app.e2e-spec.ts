import { WhenHubPage } from './app.po';

describe('when-hub App', () => {
  let page: WhenHubPage;

  beforeEach(() => {
    page = new WhenHubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
