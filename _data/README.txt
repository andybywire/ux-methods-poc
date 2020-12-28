Ontology and RDF triple store workflow

Eventually, the ontology will be split out to its own file and namespace, and data will be loaded from an evolving .csv. In either case, until it is stored in a graph DB, inferred triples need to be materialized in order to be accessible to Jekyll-RDF. 

The workflow for right now (as of 2020-12-28) is to work in a datestamped version of the OWL file, then export the inferred triples to UXMethods.owl, overwriting the previous version. 

In the (near) future, I envision the ontology being stored in a linked repo, the data being imported into Protege (via cellfie, initially), and the works being exported as a flat RDF triple store (with inferences materialized).

All of this to be automated in subsequent work. 