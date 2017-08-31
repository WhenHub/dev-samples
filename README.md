# Developer samples
A collection of examples of how to use the WhenHub API.

## Access Token
For most of the examples, you will need to get an Access Token from your [WhenHub Studio Profile page](https://studio.whenhub.com/account). More help on getting your Access Token can be found [here](https://developer.whenhub.com/docs/api).

## Documentation & Reference
[WhenHub API Documentation](https://developer.whenhub.com/docs)  

[WhenHub API Reference](https://developer.whenhub.com/v1.0/reference)

## Prerequisites
Node 6.0.0 or higher along with NPM 3 or higher is required.

## Installation
```npm install```

Note: _This only installs the developer sample site and a limited number of samples. Other samples will require installing and running them as their own projects._

### Serving up Development Sample site
```npm start```

## Developer Samples
* [Display JavaScript Embed](#javascript-embed)
* API Samples
    * Display (read-only)
        * [jQuery](#jquery)
    * Edit (read &amp; edit)
        * [Angular 4](#angular)
        * [React JS](#react)


### Javascript Embed
Embed a public Whencast on any page using Javascript. This is one of the few examples that does not require an Access Token. 

[View Project Home](https://github.com/WhenHub/dev-samples/tree/master/JavascriptEmbed)


![Alt text](/imgs/JSEmbedExample.png?raw=true "JS Embed Example")


### Display
These samples demonstrate read-only usage of the WhenHub API.

#### Jquery
Display data on a page using Jquery and styled with standard Bootstrap. The schedules you see are the ones that are in your WhenHub Profile.

[View Project Home](https://github.com/WhenHub/dev-samples/tree/master/Display/JquerySample)


![Alt text](/imgs/JqueryExample.png?raw=true "Jquery Example")


### Edit
These samples demonstrate read and edit usage of the WhenHub API

#### Angular
Edit and display data using Angular. The schedules you see are the ones that are in your WhenHub Profile.

[View Project Home](https://github.com/WhenHub/dev-samples/tree/master/edit/angularSample)

* List of schedules for user based on Access Token.
* List of events per each Schedule.
* Embedded Whencast for each Schedule.
* Limited display of media objects for Events (images only).
* Basic editing of title for schedules and events.

![Alt text](/imgs/AngularExample.png?raw=true "Angular Example")

#### React
Edit and display using React.js. The schedules you see are the ones that are in your WhenHub Profile. 

[View Project Home](https://github.com/WhenHub/dev-samples/tree/master/edit/reactSample/react-sample)

* List of schedules, with images, name and description for user based on Access Token.
* Edit name and description for each schedule.
* List event name and description of each schedule.

![Alt text](/imgs/reactExample.png?raw=true "React Example") 