//////////////////////////////////////////
// Public API - Generic Functions
//////////////////////////////////////////

endpoint.search = function (searchType, criteria) {
    var validSearchTypes = ['PersonSearch', 'BusinessSearch', 'CensusSearch', 'CriminalSearch', 'DebtSearch',
        'DomainSearch', 'EvictionSearch', 'FeinSearch', 'ForeclosureSearch', 'PropertySearch', 'ReversePhoneSearch',
        'WorkplaceSearch', 'MarriageSearch', 'DivorceSearch', 'ProLicenseSearch'];
    if(!searchType) {
        throw 'Empty searchType';
    } else if (validSearchTypes.indexOf(searchType) === -1) {
        throw 'Invalid searchType';
    }
    if(!criteria) {
        throw 'Empty criteria';
    } else if (typeof criteria !== 'object') {
        throw 'Invalid criteria, must be a JSON object';
    }
    return endpoint._search({'searchType': searchType, 'criteria': criteria});
};

//////////////////////////////////////////
// Helpers
//////////////////////////////////////////

endpoint.searchPerson = function(criteria) {
    return endpoint.search('PersonSearch', criteria);
};

endpoint.searchBusiness = function(criteria) {
    return endpoint.search('BusinessSearch', criteria);
};

endpoint.searchCensus = function(criteria) {
    return endpoint.search('CensusSearch', criteria);
};

endpoint.searchCriminal = function(criteria) {
    return endpoint.search('CriminalSearch', criteria);
};

endpoint.searchDebt = function(criteria) {
    return endpoint.search('DebtSearch', criteria);
};

endpoint.searchDomain = function(criteria) {
    return endpoint.search('DomainSearch', criteria);
};

endpoint.searchEviction = function(criteria) {
    return endpoint.search('EvictionSearch', criteria);
};

endpoint.searchFEIN = function(criteria) {
    return endpoint.search('FeinSearch', criteria);
};

endpoint.searchForeclosure = function(criteria) {
    return endpoint.search('ForeclosureSearch', criteria);
};

endpoint.searchProperty = function(criteria) {
    return endpoint.search('PropertySearch', criteria);
};

endpoint.searchReversePhone = function(criteria) {
    return endpoint.search('ReversePhoneSearch', criteria);
};

endpoint.searchWorkplace = function(criteria) {
    return endpoint.search('WorkplaceSearch', criteria);
};

endpoint.searchMarriage = function(criteria) {
    return endpoint.search('MarriageSearch', criteria);
};

endpoint.searchDivorce = function(criteria) {
    return endpoint.search('DivorceSearch', criteria);
};

endpoint.searchProLicense = function(criteria) {
    return endpoint.search('ProLicenseSearch', criteria);
};