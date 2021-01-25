import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display PokeList on navbar', async () => {
    await page.navigateTo();
    expect(await page.getNavText()).toEqual('PokeList');
  });

  it('should be rigth url', async () => {

    await page.navigateTo();
    await page.getGenerationButton().click();

    expect(await browser.getCurrentUrl()).toEqual('http://localhost:4200/geracao/1');
  });

  it('should display Generation I', async () => {

    await page.navigateTo();
    await page.getGenerationButton().click();

    expect(await page.getGenerationTitle()).toEqual('Generation I');
  });

  it('should display pokemon name', async () => {
    await page.navigateTo();
    await page.getGenerationButton().click();
    await page.getPokemonCard().click();
    expect(await page.getPokemonTitle()).toEqual('ABRA');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
