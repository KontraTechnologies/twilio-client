module.exports = `
mutation CreateMessage(
  $message: String!,
  $toNumber: String!,
  $fromNumber: String!,
  $propertyId: String!,
  $messageType: String!,  
){
  createMessage(
  message: $message,
  toNumber: $toNumber,
  fromNumber: $fromNumber,
  propertyId: $propertyId,
  messageType: $messageType
  ){
    fromNumber
  }
}
`