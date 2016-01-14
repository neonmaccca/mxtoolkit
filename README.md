# mxtoolkit
Node JS Wrapper for the MXTools API.
https://mxtoolbox.com/User/Api/Usage.aspx

With this module you can easily lookup information on
MX record's, DNS, blacklist and SMTP with a response in JSON.

	Available Tools
	blacklist: Check IP or host for reputation
	smtp:	 		 Test mail server SMTP (port 25)
	mx:	 			 DNS MX records for domain
	a:	 	     DNS A record IP address for host name
	spf:	 	   Check SPF records on a domain
	txt:	 	   Check TXT records on a domain
	ptr:	 	   DNS PTR record for host name
	soa:		   Get Start of Authority record for a domain
	tcp:		   Verify an IP Address allows tcp connections
	http:		   Verify a URL allows http connections  
	https:		 Verify a URL allows secure http connections  
	ping:		   Perform a standard ICMP ping
	trace:		 Perform a standard ICMP trace route
	dns:		   Check your DNS Servers for possible problems  New!

This module requires an api key from https://mxtoolbox.com otherwise you are severly rate limited.

Installation

	npm install mxtoolkit

Usage Example

    var apiKey = '#########################'
    var urlToQuery = 'google.com'
    var mxToolkit = require("mxtoolkit");
	mxToolkit.dns(urlToQuery',apiKey,function(resp){
	    console.log(resp);
	});

Each Tool is called by its name as it appears in the list above
For example to lookup txt record information the above function would look like this

	var apiKey = '#########################'
    var urlToQuery = 'google.com'
	var mxToolkit = require("mxtoolkit");
	mxToolkit.txt(urlToQuery,apiKey,function(resp){
	    console.log(resp);
	});

The only thing thats different from the first function is this bit 'mxToolkit.txt'.

All of the tools are called in this manner with the same parameters.

The response you get from these tools is always returned in JSON for valid requests and an error message will be returned in case of a failed call due to bad parameters.

Response will look something like this(this is truncated as the actual responses are much more verbose)

    {
      "UID": null,
      "Command": "dns",
      "IsTransitioned": false,
      "CommandArgument": "example.com",
      "TimeRecorded": "2016-01-14T06:36:51.9295768-06:00",
      "ReportingNameServer": null,
      "TimeToComplete": "0",
      "RelatedIP": "93.184.216.34",
      "IsEndpoint": false,
      "HasSubscriptions": false,
      "Failed": [],
      "Warnings": [],
      "Passed": [],
      "Timeouts": [],
      "Errors": []
     }
