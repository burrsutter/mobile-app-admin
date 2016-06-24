import { RhKeynoteDemoAdminPage } from './app.po';

describe('rh-keynote-demo-admin App', function() {
  let page: RhKeynoteDemoAdminPage;

  beforeEach(() => {
    page = new RhKeynoteDemoAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
