var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
      host: 'localhost:8000',
      log: 'trace'
});

client.search({
            q: 'pants'
      })
      .then(function(body) {
            var count = body.hits.hits;
      })
