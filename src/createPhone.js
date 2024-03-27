function createPhone(phoneNumber, contacts) { 
  const phone = {
    number: phoneNumber,
    contacts: contacts,
    call: function(name) {
      if(contacts.includes(name)) {
        return `Calling ${name}...`
      } 
      return 'Unknown User: Jess'
    }
  }
  return phone 
}

export default createPhone

// this function takes 2 params 
// one is a phone number string number 
// and an array of contacts. 
