# UX Methods Knowledge Graph ETL Pipleline

The resources collected in the UX Methods Knowledge Graph are connected to the UX Methods Ontology, which describes Disciplines, Outcomes, and the semantics of entity relationships, from two distinct data sources, generated from Google Sheets documents: Methods and WebResources. In order to support the UX Methods static site architecture, the resulting inferred axioms are then exported to a queryable OWL file in \_data. 

- URL of the Google Sheets CSV is in the FROM statement of the Tarql mapping
- Commands can be run from any terminal location

### Map All Resource Data Sequentially
```
sh ~/tarql/target/appassembler/bin/tarql ~/repos/uxmd/_data/etl/Methods.sparql > ~/repos/uxmd/_data/etl/Methods.ttl & sh ~/tarql/target/appassembler/bin/tarql ~/repos/uxmd/_data/etl/WebResources.sparql > ~/repos/uxmd/_data/etl/WebResources.ttl
```

### Map "Methods" Data Only
```
sh ~/tarql/target/appassembler/bin/tarql ~/repos/uxmd/_data/etl/Methods.sparql > ~/repos/uxmd/_data/etl/Methods.ttl
```

### Map "WebResources" Data Only
```
sh ~/tarql/target/appassembler/bin/tarql ~/repos/uxmd/_data/etl/WebResources.sparql > ~/repos/uxmd/_data/etl/WebResources.ttl
```