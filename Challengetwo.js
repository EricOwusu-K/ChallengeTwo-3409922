class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const results = [];
    let prefix = "";

    for (const char of searchWord) {
      prefix += char;

      const suggestions = this.products
        .filter(product => product.startsWith(prefix))
        .slice(0, 3);

      results.push(suggestions);
    }

    return results;
  }
}
