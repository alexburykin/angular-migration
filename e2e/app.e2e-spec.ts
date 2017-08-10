import { MbaPage } from './app.po';

describe('mba App', () => {
  let page: MbaPage;

  beforeEach(() => {
    page = new MbaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
