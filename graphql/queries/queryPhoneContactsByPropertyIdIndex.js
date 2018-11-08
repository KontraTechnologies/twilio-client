module.exports = `
query QueryPhoneContactsByPropertyIdIndex($propertyId: String!, $contactType: String!) {
  queryPhoneContactsByPropertyIdIndex(propertyId: $propertyId, contactType: $contactType) {
    items {
      name
      updatedAt
      phoneNumber
      propertyId
      isVerified
      contactType
      formattedNumber
      instantResponseNumber
    }
  }
}
`;