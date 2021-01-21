# UX Methods Knowledge Graph
UX Methods is a collaborative, lightweight Jamstack knowledge graph. It is built with Jekyll and powered by a purpose-built UX Methods Ontology via the [Jekyll-RDF](https://github.com/AKSW/jekyll-rdf) plugin. Its goal is to document and interconnect the practices and techniques of user experience design. It is built with open source tools and technologies, and is designed to evolve and scale over time.

The UX Methods project envisions: 

- **A living, collaborative ontology** to which collaborators from across the community can contribute.

- **A freely accessible linked open data knowledge base** that accurately describes and communicates the meaningful relationships between user experience design methods. 

- **A user-friendly web interface** that affords a useful, usable access point to the knowledge captured in the UX methods ontology and knowledge base.

## Tools
In addition to Jekyll and Jekyll-RDF, this project uses:

- [Lunr.js](https://lunrjs.com/) for search
- SASS for CSS preprocessing
- GULP for development workflow automation 

RDF data--which accounts for virtually all website content beyond "About" content located on the About page and in the footer--is queried from the UXMethods.owl file in the \_data directory. This file is the core of the UX Methods knowledge graph and is composed of UX methods, UX discipline, and method outcomes data in combination with the [UX Methods Ontology](https://github.com/andybywire/ux-methods-ontology). 

## Contributing
Contributions to and suggestions for this project are welcome. To get started with your own local version from which to submit pull requests: 

1. Form and clone this repository. You'll also want to be sure you have [Jekyll](https://jekyllrb.com/) installed on your machine. 
  

2. Run NPM install in the project file
  
    `$ npm install`

3. Compile the base site and start the server with gulp
    
    `$ gulp`

Learn more about contributing to open source projects at [opensource.com](https://opensource.com/article/19/7/create-pull-request-github).