import { NSpecPage } from './app.po';

describe('n-spec App', function() {
  let page: NSpecPage;

  beforeEach(() => {
    page = new NSpecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
