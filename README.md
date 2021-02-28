<h1 align="center">
<img src="https://user-images.githubusercontent.com/3710835/109103540-ebc0d580-76df-11eb-948d-4c1bf3615e5e.png" alt="UX Methods.org wordmark">
</h1>
<h3 align="center">
An Open Source Jamstack Knowledge Graph
</h3>

<p align="center">
	<strong>
		<a href="https://www.uxmethods.org/">Website</a>
		•
		<a href="https://github.com/andybywire/ux-methods/tree/main/_data/etl#competency-questions--sparql-test-queries">Competency Questions</a>
  		•
		<a href="https://github.com/andybywire/ux-methods/tree/main/_data/etl#the-ux-methods-ontology">Ontology</a>
		•
		<a href="https://github.com/andybywire/ux-methods/tree/main/_data/etl#ux-methods-knowledge-graph-extracttransformload-etl-pipleline">Data Pipeline</a>
	</strong>
</p>

## Table of Contents
- [Overview](#overview)
- [Data Pipeline](#data-pipeline)
    - [Extract/Transform/Load](#extracttransformload)
    - [Semantic Reasoning](#semantic-reasoning)
    - [Publicaion](#publication)
- [Ontology](#ontology)
- [Additional Tools](#additional-tools)
- [Contributing](#contributing)

## Overview
[UX Methods](https://www.uxmethods.org/) is a collaborative, lightweight Jamstack knowledge graph. It is built with Jekyll and powered by a purpose-built UX Methods Ontology via the [Jekyll-RDF](https://github.com/AKSW/jekyll-rdf) plugin. Its goal is to document and interconnect the practices and techniques of user experience design, and to provide a use case from which to explore the uses (and limitations) of ["boutique" knowledge graphs](https://www.linkedin.com/pulse/uxmethodsorg-boutique-knowledge-graph-case-study-andy-fitzgerald/?trackingId=FsKbRBiJS9SiKWq3uiBDug%3D%3D). It is built with open source tools and technologies, and is designed to evolve and scale over time.

The UX Methods project envisions: 

- **A living, collaborative ontology** to which collaborators from across the community can contribute.

- **A freely accessible linked open data knowledge base** that accurately describes and communicates the meaningful relationships between user experience design methods. 

- **A flexible starter kit of tools and technologies** that can be used to prototype, explore, and learn about knowledge graphs and knowledge graph applications. 

- **A user-friendly web interface** that affords a useful, usable access point to the knowledge captured in the UX methods ontology and knowledge base.

<h3 align="center">
<img width="500" src="https://user-images.githubusercontent.com/3710835/109322819-9a136a80-7807-11eb-9f79-148b8e5d611b.png" alt="Screenshot of UXMethods.org website on desktop and mobile">
</h3>

## Data Pipeline
Version 1.0 of UX Methods uses auto-classification, semantic data integration, and natural language processing for the organization, presentation, and discovery of content. These features are intentionally built with widely accessible and freely available tools like Google Sheets and Forms, Jekyll, and Protégé. 

RDF data—which accounts for virtually all website content beyond "About" content located on the About page and in the footer—is queried from the UXMethods.owl file in the \_data directory. This file is the core of the UX Methods knowledge graph and is composed of UX methods, UX discipline, and method outcomes data in combination with the [UX Methods Ontology](#ontology). 

![A flow diagram detailing the Capture, Extract/Transform/Load, Semantic Reasoning, Publication, and Iteration phases of the UX Methods Knowledge Graph workflow.](https://github-production-user-asset-6210df.s3.amazonaws.com/3710835/108853526-b0b58980-759b-11eb-9f26-cb9c0bbc09de.png)

The goal of this configuration is to create a model that can be replicated on any (or no) budget, and which requires as little technical skills acquisition as is feasibly possible. As this project grows and evolves, these components will undoubtedly change to accommodate automation, scale, and quality control. The goal at present is to maintain a "simple" version in a 1.0 branch as a reference for those interested in starting a project from a simple basic setup. 

### Extract/Transform/Load
The Extract/Transform/Load (ETL) pipeline captures and translates tabular data from Google Sheets into RDF using the [Tarqle](http://tarql.github.io/) conversion tool. Tarql runs locally and requires `Java 1.8` or above. Tarqle mappings and details of the pipeline workflow can be found in the [etl folder](/tree/main/_data/etl#ux-methods-knowledge-graph-extracttransformload-etl-pipleline)

### Semantic Reasoning
To keep the knowledge graph simple and easily reproducible, version 1.0 does *not* rely on a graph database, which means that there is not an active inference engine to run queries against. In order to take advantage of the semantic entailments that make knowledge graphs so useful (like automatic classification and knowledge discovery), the KG data and UX Methods Ontology are processed by Protégé's built in reasoner, and then exported as a flat RDF/XML file, complete with inferences. 

This would not scale to a large data set, but if makes experimentation for a small proof-of-concept—or for learning—less complicated that integrating a server, reasoner, and connected databases. Details of the inferred axiom export process can be found in the [\_data file](https://github.com/andybywire/ux-methods/tree/main/_data). 

### Publication
[Jekyll-RDF](https://aksw.org/Projects/JekyllRDF.html) is used to query flat UX Methods KG RDF/XML data and generate methods, disciplines, and resources pages. Data from this RDF/XML file is also used to build site menus, populate the search index, and generate linked data in the form of JSON-LD. While Jekyll is a convenient, well known, and well supported static site generator, there is no fundamental connection between UX Methods KG data and Jekyll that isn't well supported by a wide range of similar tools and technologies.

## Ontology
The UX Methods Ontology (it's "Knowledge Model") encodes a very simple set of semantic rules about how Methods, Disciplines, and WebResources interact and interrelate. 

![An object model style diagram describing the simple semantic structure of the UX Methods ontology](https://user-images.githubusercontent.com/3710835/108855859-46521880-759e-11eb-9543-133355ecf478.png)

These rules are more fully annotated and described in the [UX Methods Ontology](https://github.com/andybywire/ux-methods/blob/main/_data/etl/UXMethodsKG.owl), which can be opened and explored directly in the desktop version of the free ontology editing tool [Protégé](https://protege.stanford.edu/products.php). For more details on the [UX Methods Ontology goals](https://github.com/andybywire/ux-methods/tree/main/_data/etl#project-goals), [development methodology](https://github.com/andybywire/ux-methods/tree/main/_data/etl#ontological-commitments), [competency questions, and SPARQL validation queries](https://github.com/andybywire/ux-methods/tree/main/_data/etl#competency-questions--sparql-test-queries) check out the ontology [description in \_data.](https://github.com/andybywire/ux-methods/tree/main/_data/etl#the-ux-methods-ontology) 

## Additional Tools
In addition to Jekyll and Jekyll-RDF, this project uses:

- `[Lunr.js]`(https://lunrjs.com/) for search
- `SASS` for CSS preprocessing
- `GULP` for development workflow automation 

## Contributing
Contributions to and suggestions for this project are welcome. To get started with your own local version from which to submit pull requests: 

1. Fork and clone this repository. You'll also want to be sure you have [Jekyll](https://jekyllrb.com/) installed on your machine. 
  

2. Run NPM install in the project file
  
    `$ npm install`

3. Compile the base site and start the server with gulp
    
    `$ gulp`

Learn more about contributing to open source projects at [opensource.com](https://opensource.com/article/19/7/create-pull-request-github).
