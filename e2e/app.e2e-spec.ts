import { UiRouterTutorialPage } from './app.po';

describe('ui-router-tutorial App', function() {
  let page: UiRouterTutorialPage;

  beforeEach(() => {
    page = new UiRouterTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
