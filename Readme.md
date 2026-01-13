#Parcel
Dev build
local server running
Image optimisation
File watcging algorithm
Caching - to load project faster
differential bundling-for older browsers


Mapping Feactures - added and use key always as it is best practise.

# There are 2 types of import and export.

1 - using default and it can imported without curly braces.

export default <component name>
import component from path.


2- using mulitple export from a single file so here we have to use the curly braces to do the same.

export const Component/variable.
import {name} from path.

# React Hooks
It is a normal javascript funtions.
-useState() = superpowerful react variable
-useEffect() 

USe Effect Hook

# Redux Toolkit
- Install @reduxjs/toolkit  redux toolkit
- Build out store
- Connect our store to app
- slice (catrslice)
- dispatch(Action)
- 


#Testing

Install React Testing Library
Insall Jest
Install babel Dependencies
configure babel
confifure parcel config file to disable default babel transpilation
Jest -npx jest -init
Install jsdom library
Install @babel/present-react - to make JSX work in test cases
include @babel/present-react inside babel configuration
npm i -D @testing-library/jest-dom