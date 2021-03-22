# Knowledge Graph Data

Until data is stored in a graph DB, inferred triples need to be materialized in order to be accessible to Jekyll-RDF.

**Protégé Workflow**
- Data is imported and tested in UXMethodsKG.owl in the etl folder (ontology version: https://www.uxmethods.org/[version]/knowledge-graph/)
- Once updates are tested, ontology imports and inferred axioms are exported as a single RDF/XML file to \_data (ontology version: https://www.uxmethods.org/[version]/inferred/knowledge-graph/)
