/**
 * Extends the contact events.
*/
export default function (contact) {
  console.log("Clog >> ContactEvents - New Contact contactId: " + contact.contactId);
  console.log("Clog >> ContactEvents - New Contact InitialContactId(): " + contact.getInitialContactId());
  window.contact = contact;
  console.log("Subscribing to events for contact");
  if (contact.getActiveInitialConnection()
    && contact.getActiveInitialConnection().getEndpoint()) {
    console.log("New contact is from " + contact.getActiveInitialConnection().getEndpoint().phoneNumber);
  } else {
    console.log("This is an existing contact for this agent");
  }
  console.log("Contact is from queue " + contact.getQueue().name);
  console.log("Contact attributes are " + JSON.stringify(contact.getAttributes()));

  // Route to the respective handler
  contact.onIncoming(handleContactIncoming);
  contact.onAccepted(handleContactAccepted);
  contact.onConnecting(handleContactConnecting);
  contact.onConnected(handleContactConnected);
  contact.onEnded(handleContactEnded);
  contact.onDestroy(handleContactDestroyed);

  function handleContactIncoming(contact) {
    console.log('Clog >> ContactEvents.handleContactIncoming');
    console.log("[contact.onIncoming] Contact is incoming");
    if (contact) {
      console.log("[contact.onIncoming] Contact is incoming. Contact state is " + contact.getStatus().type);
    } else {
      console.log("[contact.onIncoming] Contact is incoming. Null contact passed to event handler");
    }
  }

  function handleContactAccepted(contact) {
    console.log('Clog >> ContactEvents.handleContactAccepted - Contact accepted by agent');
    if (contact) {
      console.log("[contact.onAccepted] Contact accepted by agent. Contact state is " + contact.getStatus().type);
    } else {
      console.log("[contact.onAccepted] Contact accepted by agent. Null contact passed to event handler");
    }
  }

  function handleContactConnecting(contact) {
    console.log('Clog >> ContactEvents.handleContactConnecting() - Contact connecting to agent');
    console.log("[contact.onConnecting] Contact is connecting");
    if (contact) {
      console.log("[contact.onConnecting] Contact is connecting. Contact state is " + contact.getStatus().type);
      document.getElementById('answerDiv').classList.add("glowingButton");
    } else {
      console.log("[contact.onConnecting] Contact is connecting. Null contact passed to event handler");
    }
  }

  function handleContactConnected(contact) {
    console.log('Clog >> ContactEvents.handleContactConnected() - Contact connected to agent');
    if (contact) {
      console.log("[contact.onConnected] Contact connected to agent. Contact state is " + contact.getStatus().type);
      document.getElementById('answerDiv').classList.remove("glowingButton");
      document.getElementById('hangupDiv').classList.add("glowingButton");
    } else {
      console.log("[contact.onConnected] Contact connected to agent. Null contact passed to event handler");
    }
  }

  function handleContactEnded(contact) {
    console.log('Clog >> ContactEvents.handleContactEnded() - Contact has ended successfully');
    if (contact) {
      console.log("[contact.onEnded] Contact has ended. Contact state is " + contact.getStatus().type);
      document.getElementById('hangupDiv').classList.remove("glowingButton");
      document.getElementById('clearDiv').classList.add("glowingButton");
    } else {
      console.log("[contact.onEnded] Contact has ended. Null contact passed to event handler");
    }
  }

  function handleContactDestroyed(contact) {
    console.log('Clog >> ContactEvents.handleContactDestroyed() - Contact will be destroyed');
    console.log("[contact.onDestroy] Contact is Destroyed");
    if (contact) {
      console.log("[contact.onDestroy] Contact is destroyed. Contact state is " + contact.getStatus().type);
      document.getElementById('clearDiv').classList.remove("glowingButton");
    } else {
      console.log("[contact.onDestroy] Contact is connecting. Null contact passed to event handler");
    }
  }


}
