import { PracticaPage } from './app.po';

describe('practica App', () => {
  let page: PracticaPage;

  beforeEach(() => {
    page = new PracticaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
