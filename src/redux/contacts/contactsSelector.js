export const getContacts = store =>
  store.contacts.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(store.filter.toLowerCase())
  );

export const getFiltered = store => store.contacts.filter;
