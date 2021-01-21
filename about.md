---
title: About UX Methods
page_class: about
---
<section class="resource">
<article>
<section markdown="1">

# About UX Methods 
{: .no-eyebrow}
UX Methods is a collaborative, Linked Data powered Knowledge Graph. Its goal is to document and interconnect the practices and techinques of user experience design. It is built with open source tools and technologies, and is designed to evolve and scale over time.

The UX Methods project envisions: 

- **A living, collaborative ontology**  
Collaborators from across the community can contribute to the ontology that drives UX Methods. This will allow us to capture the knowledge of how UX methods work together to help create more effective, human-centered experiences.

- **A freely accessible linked open data knowledge base**  
UX Methods' linked data foundation means that others can reference and build on it to further describe and communicate the meaningful relationships between user experience design methods. 

- **A user-friendly web interface**  
A useful, usable web interface means that everyone can access the knowledge captured in the UX methods ontology and knowledge base. Ideally this will embody a full complement of best practices for the web including accessibility, linked data, progressive web application optimizations, and mobile first design. 

## How It Works
A knowledge graph combines data elements from different sources (from relational and graph databases, flat files, and linked data from the web), and interrelates them with the help of a formally specified "perspective" on how the concepts they represent fit together. For UX Methods, this formal perspective is supplied by the [UX Methods Ontology]({{site.ontology_repo}}). 

Paraphrasing ontology engineering pioneer [Tom Gruber](http://www-ksl.stanford.edu/kst/what-is-an-ontology.html), an ontology is "an  explicit, formal specification of a shared conceptualization." Ontologies provides the shared context for making sense of data, without which data elements are just so many unrelated facts. 

The UX Methods ontology describes a simple model in which the relationships between disciplines and methods are based primarily on outcomes. This allows for the autoclassificiation of methods polyhierarchically, and roots both methods and disciplines in what they produce in user-centered design work (as opposed to politics, origins, or inertia).

<figure>
  <img style="border-radius: 5px; margin: 1rem 0 2rem;" src="https://user-images.githubusercontent.com/3710835/99914748-582cd280-2cb4-11eb-8cf7-3d4709e98c0a.png">
</figure>

Individual data elements, such as methods, their dependancies, and their outcomes, are then used to drive the user-focused page templates that make up the UX Methods site. Discipline, method, and outcome resources are presented in templates purpose-built for the content they contain, and navigation is assembled and ordered based on resouces in the knowledge graph. The "Top Methods" menu, for instance, is generated from the 6 most "central" method resources methods in the graph (those with the greatest [degree centrality](https://en.wikipedia.org/wiki/Centrality)). 

The benefit of this ontology-driven approach to information organization and presentations is that as as the collection of methods described here evolves, the connections between them are continuously (and programatically) updated to reflect the perspective on their relationships provided by the ontology. Likewise, as the ontology itself evolves&mdash;either to correct errors or to accommodate new perspectives and greater complexity&mdash;the methods it organizes evolve in parallel, reflecting changes to the way we collectively understand their relationships in real time. 

## Front End Tools
This (eventually progressive) web app was created to be as lightweight and low bandwidth as possible so that the content collected here is easy to access, explore, and use. Tools used include: 

- Paper, pencil, and Figma for concepting and UI design
- Jekyll and [Jekyll-RDF](https://github.com/AKSW/jekyll-rdf) for templating graph querying
- [Lunr.js](https://lunrjs.com/) for search
- SASS for CSS preprocessing
- GULP for development workflow automation

Typography is set in Nunito Sans and Hind and is licensed under the Open Font License. 
</section>
</article>

<aside markdown="1">

### This Site is a "Public Beta"
The version of UX Methods you're currently viewing is brand new and still held together with thumbtacks and string in some places. Any and all feedback is welcome! Please feel free to open an issue on GitHub for either the [Knowledge Graph Application]({{site.kg_repo}}/issues) (this site), or the [UX Methods ontology]({{site.ontology_repo}}/issues). 

If you have observations, input, or comments you'd like to share privately (i.e. outside of GitHub or methods suggestions), please feel free to [contact me directly](https://www.andyfitzgeraldconsulting.com/contact/).

### Contribute
To improve methods, add content or resources (like links to web resources) to exisitng methods, or suggest new methods to include, please use the [Submit Method](/submit-method) form, or hit the "Improve This Method" button at the bottom of each Method page. 

To contribute to ontology driving the UX Methods Knowledge Graph, head over to the [UX Methods Ontology repo on GitHub]({{site.ontology_repo}}). Once you're familiar with the ontology purpose, ontological commitments, and competency questions, feel free to fork and clone the repo, make changes, and submit a pull request. 

Learn more about contributing to open source projects at [opensource.com](https://opensource.com/article/19/7/create-pull-request-github). 
</aside>
</section>