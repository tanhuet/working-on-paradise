import config from '~/config';

// Layouts
import { ContentOnly } from '~/layouts';

// Pages
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Home from '~/pages/Home';

// Public routes
const publicRoutes = [
   { path: config.routes.login, component: Login, layout: ContentOnly },
   { path: config.routes.register, component: Register, layout: ContentOnly },
   { path: config.routes.home, component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
