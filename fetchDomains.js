import fetch from 'node-fetch'; // ES module import
import { API_BASE_URL, API_KEY, CLIENT_ID } from './config.js';


// Function to get domains
async function getDomains(clientId, apiKey) {
console.log(API_BASE_URL);

    const url = `${API_BASE_URL}/domains/${clientId}?api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch domains: ${response.statusText}`);
    }
    return response.json();
}

async function getDnsRecords(zoneUri, apiKey) {
    const url = `${API_BASE_URL}${zoneUri}?api_key=${apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch DNS records: ${response.statusText}`);
    }
    return response.json();
}
// Main function
async function main() {
    try {
        const domainsData = await getDomains(CLIENT_ID, API_KEY);
        console.log(`Domains for client ID ${CLIENT_ID}:`);
        
        if (!domainsData || domainsData.length === 0) {
            console.log("No domains found for this client.");
            return;
        }

        for (const domain of domainsData) {
            console.log(`Domain: ${domain.name}`);
            console.log(`DNS Zones:`);

            // Check if zones exist for the domain
            if (!domain.zones || domain.zones.length === 0) {
                console.log(`  No zones found for domain ${domain.name}`);
                continue;
            }

            // Loop through zones for each domain
            for (const zone of domain.zones) {
                console.log(`  Zone: ${zone.name} (URI: ${zone.uri})`);

                const dnsRecordsData = await getDnsRecords(zone.uri, API_KEY);
                console.log(`  DNS Records:`);

                // Check if records exist for the zone
                if (!dnsRecordsData.records || dnsRecordsData.records.length === 0) {
                    console.log(`    No DNS records found for zone ${zone.name}`);
                    continue;
                }

                // Loop through DNS records and log them
                for (const record of dnsRecordsData.records) {
                    console.log(`    Type: ${record.type}, Name: ${record.name}, Value: ${record.content}`);
                }
            }
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();