
// importing default export
import add from './export_modules.js';

// importing named exports using destructuring
import {subtract, multiply} from './export_modules.js';

// changing the name of default export
import sum from './export_modules.js';


// changing the name of named exports using alias
import {subtract as sub, multiply as mul} from './export_modules.js';



// add(10, 20); // 30