import { DemasteelPage } from './app.po';

describe('demasteel App', function() {
  let page: DemasteelPage;

  beforeEach(() => {
    page = new DemasteelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
