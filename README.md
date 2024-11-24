
SiteHost Challenge - Submission
Introduction

Firstly, I would like to express my gratitude for the opportunity to participate in this challenge. Below are my solutions for both Part 1 and Part 2 of the challenge.

Part 1: API Integration
In Part 1, I successfully integrated the provided API to retrieve a list of domains and their associated DNS records. This was accomplished using a Javascript , which is included as fetchDomains.js. The script retrieves the list of domains associated with a given client and fetches the DNS records for each domain. This demonstrates my ability to interact with APIs, handle responses, and process the data effectively.

Part 2: Resolving a Customer Issue
In Part 2, I encountered an issue with accessing the domain site.recruitment.shq.nz. Initially, I followed the instructions to visit the IP address 120.138.30.179 and inspected the source code, expecting to find a hidden HTML comment containing a code. However, I was unable to locate the hidden comment within the HTML source code.

Upon further investigation, I used a DNS tool to perform a lookup and discovered that the domain site.recruitment.shq.nz was pointing to a private IP address (192.168.1.10), which likely caused the inaccessibility. The private IP address is not routable on the public internet, which explains why the site was unreachable.

Solution & Recommendations:

I informed Alice that the issue could be resolved by updating the DNS records for the domain to point to the correct public-facing IP address.
I also suggested that Alice could update the DNS records herself, but I considered it would be more beneficial for her to understand the root cause of the problem. This knowledge would empower her to resolve similar issues in the future.
While I could have suggested a direct update of the A record to point to the correct IP address, I decided to focus on explaining the DNS issue to Alice, allowing for a more informative resolution.

Files Included:
fetchDomains.js – javascript for Part 1 (API Integration).
config.js 
package.json
reply.md – My response to Alice, explaining the DNS issue and resolution.
