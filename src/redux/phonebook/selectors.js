import {createSelector} from '@reduxjs/toolkit'
export const getFilter = state => state.contacts.filter;

const allItems = state => state.contacts.items;

export const gatFilteredList = createSelector(
     [allItems, getFilter],
    (items, filter) =>
     { const normalizedFilter = filter.toLowerCase()

  return items.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter))}
)

// export const gatFilteredList = state => {
//     const filter = getFilter(state);
//     const items = allItems(state);
    
//     const normalizedFilter = filter.toLowerCase();

//   return items.filter(item =>
//       item.name.toLowerCase().includes(normalizedFilter))
    
// }