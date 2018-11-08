module.exports = `
mutation UpdatePhoneContact($input: UpdatePhoneContactInput!) {
  updatePhoneContact(input: $input) {
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
`