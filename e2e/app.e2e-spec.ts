import { NgmSelectPage } from './app.po';

describe('ngm-select App', () => {
  let page: NgmSelectPage;

  beforeEach(() => {
    page = new NgmSelectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
