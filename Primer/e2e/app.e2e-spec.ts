import { PrimerPage } from './app.po';

describe('primer App', () => {
  let page: PrimerPage;

  beforeEach(() => {
    page = new PrimerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
