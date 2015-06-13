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
      });

client.search({
            index: 'twitter',
            type: 'tweets',
            body: {
                  query: {
                        match: {
                              body: 'elasticsearch'
                        }
                  }
            }
      })
      .then(function(resp) {
            var hits = resp.hits.hits;
      }, function(error) {
            console.trace(error.message);
      });
