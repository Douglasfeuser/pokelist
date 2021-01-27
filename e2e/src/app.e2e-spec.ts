import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {

    page = new AppPage();

    // implicit and page load timeouts
    browser.manage().timeouts().pageLoadTimeout(30000);
    browser.manage().timeouts().implicitlyWait(20000);

  });

  it('should display PokeList on navbar', async () => {
    await page.navigateTo();
    expect(await page.getNavText()).toEqual('PokeList');
  });

  it('should display menu gerações on navbar', async () => {
    await page.navigateTo();
    expect(await page.getNavMenuGeracoesText()).toEqual('Gerações');
  });

  it('should display menu gerações on navbar', async () => {
    await page.navigateTo();
    expect(await page.getNavMenuGames()).toEqual('Jogos');
  });

  it('should be rigth url', async () => {

    await page.navigateTo();
    await page.getNavMenuGeracoes().click();

    browser.waitForAngular();
    browser.driver.sleep(4000);
    await page.getGenerationButton().click();

    expect(await browser.getCurrentUrl()).toContain('geracao/1');
  });

  it('should display Generation I', async () => {

    await page.navigateTo();
    await page.getNavMenuGeracoes().click();
    await page.getGenerationButton().click();

    expect(await page.getGenerationTitle()).toEqual('Generation I');
  });

  it('should display Red', async () => {

    await page.navigateTo();

    browser.driver.sleep(6000);

    await page.getGameButton().click();

    expect(await page.getGameTitle()).toContain('red');
  });

  it('should display pokemon name by generation page', async () => {
    await page.navigateTo();

    await page.getNavMenuGeracoes().click();
    await page.getGenerationButton().click();

    browser.driver.sleep(1000);
    browser.waitForAngular();
    browser.driver.sleep(10000);

    await page.getPokemonCard().click();

    expect(await page.getPokemonTitle()).toEqual('Abra');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
