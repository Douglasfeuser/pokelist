import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async navigateToPage(url): Promise<unknown> {
    return browser.get(browser.baseUrl + url);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async getGenerationTitle(): Promise<string> {
    return element(by.css('.generation-title')).getText();
  }

  async getPokemonTitle(): Promise<string> {
    return element(by.css('.pokemon-title')).getText();
  }

  async getNavText(): Promise<string> {
    return element(by.css('[class="navbar-brand navbar-dark"]')).getText();
  }

  getGenerationButton() {
    return element(by.css('[href="/geracao/1"]'));
  }

  getPokemonCard() {
    return element(by.css('[href="pokemon/abra"]'));
  }

}
