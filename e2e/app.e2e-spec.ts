import { WebConfigPage } from './app.po';

describe('web-config App', () => {
  let page: WebConfigPage;

  beforeEach(() => {
    page = new WebConfigPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
