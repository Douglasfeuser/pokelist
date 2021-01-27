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

  async getGameTitle(): Promise<string> {
    return element(by.css('.game-title')).getText();
  }

  async getPokemonTitle(): Promise<string> {
    return element(by.css('.pokemon-title')).getText();
  }

  async getNavText(): Promise<string> {
    return element(by.css('[class="navbar-brand navbar-dark"]')).getText();
  }

  async getNavMenuGeracoesText(): Promise<string> {
    return element(by.css('.nav-item .nav-link[href="geracoes"]')).getText();
  }

  getNavMenuGeracoes() {
    return element(by.css('.nav-item .nav-link[href="geracoes"]'));
  }

  async getNavMenuGames(): Promise<string> {
    return element(by.css('.nav-item .nav-link[href="jogos"]')).getText();
  }

  getGenerationButton() {
    return element(by.css('[href="/geracao/1"]'));
  }

  getGameButton() {
    return element(by.css('[href="/jogo/red"]'));
  }

  getPokemonCard() {
    return element(by.css('[href="pokemon/abra"]'));
  }

}
