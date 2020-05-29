export default () => {
  describe('Header', () => {
    it('I can see the branding', () => {
      const logo = document.querySelector('header svg');

      expect(logo).toBeInTheDocument();
      expect(logo.parentNode.textContent).toBeTruthy();
      expect(logo.parentNode.textContent).toMatchSnapshot();
    });

    it("I can see the offscreen text with product's language code set to English", () => {
      const langCode = document.querySelector(
        'header div span span[lang="en-GB"]',
      );
      expect(langCode).toBeInTheDocument();
    });

    it('I can see the navigation', () => {
      const navigationItemEls = document.querySelector(
        'header nav ul > li > a',
      );

      expect(navigationItemEls).toBeInTheDocument();
      expect(navigationItemEls.getAttribute('href')).toBeTruthy();
      // expect(navigationItemEls.getAttribute('text')).toBeTruthy();
    });

    it('I can see a skip to content link', () => {
      const skipToContentEl = document.querySelector(
        'header [href="#content"]',
      );

      expect(skipToContentEl).toBeInTheDocument();
    });
  });
};
