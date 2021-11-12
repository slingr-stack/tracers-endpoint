---
title: Tracers endpoint
keywords: 
last_updated: April 17, 2018
tags: []
summary: "Detailed description of the API of the Tracers endpoint."
---

## Overview

This Tracers endpoint allows access to the information provided by [Tracers Info](http://www.tracersinfo.com). It can interact with its REST API methods.

Please make sure you take a look at the documentation from Tracers as features are based on its API:

- [API Documentation](https://galaxysearch.docs.apiary.io/)

## Quick start

Once you configured the endpoint, you can search records using this call:

```js
app.endpoints.tracers.searchPerson({
  FirstName: "John",
  Page: 1,
  ResultsPerPage: 20
});
```

## Configuration

Before configuring the endpoint you will need to have an account for API partners in Apiary. 

### Access Profile Name 

This is the access profile user managed by Apiary.

### Access Profile Password 

This is the access profile password managed by Apiary.

## Javascript API

The Javascript API of the endpoint is based on the [REST API of Tracers](https://galaxysearch.docs.apiary.io/),
so you should see their documentation for details on parameters and data formats. If there are differences
they will be explained here.

### Search Person

```js
var results = app.endpoints.tracers.searchPerson(criteriaObject);
```

Performs a person search, and returns a list of records matching the search criteria. Here, the searchType explained in
link below is not used.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/person-search) for more details about the request and response.

### Search Business

```js
var results = app.endpoints.tracers.searchBusiness(criteriaObject);
```

Performs a business search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/business-search) for more details about the request and response.

### Search Census

```js
var results = app.endpoints.tracers.searchCensus(criteriaObject);
```

Performs a census search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/census-search) for more details about the request and response.

### Search Criminal

```js
var results = app.endpoints.tracers.searchCriminal(criteriaObject);
```

Performs a criminal search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/criminal-search) for more details about the request and response.

### Search Debt

```js
var results = app.endpoints.tracers.searchDebt(criteriaObject);
```

Performs a criteria search, and returns a list of banckruptcy, lien, and judgement records.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/debt-search) for more details about the request and response.

### Search Domain

```js
var results = app.endpoints.tracers.searchDomain(criteriaObject);
```

Performs a domain search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/domain-search) for more details about the request and response.

### Search Eviction

```js
var results = app.endpoints.tracers.searchEviction(criteriaObject);
```

Performs a eviction search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/eviction-search) for more details about the request and response.

### Search FEIN

```js
var results = app.endpoints.tracers.searchFEIN(criteriaObject);
```

Performs a FEIN search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/fein-search) for more details about the request and response.

### Search Foreclosure

```js
var results = app.endpoints.tracers.searchForeclosure(criteriaObject);
```

Performs a foreclosure search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/foreclosure-search) for more details about the request and response.

### Search Property

```js
var results = app.endpoints.tracers.searchProperty(criteriaObject);
```

Performs a criteria search, and returns a list of matching Assessor and Recorder records.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/property-search) for more details about the request and response.

### Search Reverse Phone

```js
var results = app.endpoints.tracers.searchReversePhone(criteriaObject);
```

Performs a reverse phone search, and returns a list of people matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/reverse-phone-search) for more details about the request and response.

### Search Workplace

```js
var results = app.endpoints.tracers.searchWorkplace(criteriaObject);
```

Performs a criteria search, and returns a list of matching businesses.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/work-place-search) for more details about the request and response.

### Search Marriage

```js
var results = app.endpoints.tracers.searchMarriage(criteriaObject);
```

Performs a marriage search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/marriage-search) for more details about the request and response.

### Search Divorce

```js
var results = app.endpoints.tracers.searchDivorce(criteriaObject);
```

Performs a divorce search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/divorce-search) for more details about the request and response.

### Search ProLicense

```js
var results = app.endpoints.tracers.searchProLicense(criteriaObject);
```

Performs a ProLicense search, and returns a list of records matching the search criteria.

Check [REST API of Tracers](https://galaxysearch.docs.apiary.io/#reference/0/prolicense-search) for more details about the request and response.

## Events

This endpoint does not provide any event.

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.

