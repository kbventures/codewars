function personalise(campaign, person) {
    // ...
    console.log('campaign', campaign, 'person', person)
    campaign = campaign.replace(/<NAME>/g, person.name)
    campaign = campaign.replace(/<CITY>/g, person.city)
    campaign = campaign.replace(/<FAVOURITE PRODUCTS>/g, person.favourite_products)
    return campaign
}