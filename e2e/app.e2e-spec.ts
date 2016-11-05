import { YomigoWidgetPage } from './app.po';

describe('yomigo-widget App', function() {
  let page: YomigoWidgetPage;

  beforeEach(() => {
    page = new YomigoWidgetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
