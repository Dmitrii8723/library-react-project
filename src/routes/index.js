
export function getResources(query) {
   return fetch(`http://localhost:5000/graphql?query=${query}`, {
        method: 'GET',
        });
};

