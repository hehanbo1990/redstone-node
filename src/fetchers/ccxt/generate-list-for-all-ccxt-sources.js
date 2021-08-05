const allSupportedExchanges = require("./all-supported-exchanges.json");

function getTokenLists() {
  const result = {};
  for (const exchange of allSupportedExchanges) {
    result[exchange] = getSupportedTokensFromManifest(exchange);
  }
  return result;
}

function getSupportedTokensFromManifest(exchangeName) {
  const manifest = require(`../../../manifests/${exchangeName}.json`);
  return Object.keys(manifest.tokens);
}

module.exports.getTokenLists = getTokenLists();
