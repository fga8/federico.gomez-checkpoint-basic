import { AppPage } from './app.po';

describe('federico.gomez-checkpoint-basic App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to gl!');
  });
});
