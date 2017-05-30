"use strict";
var login_component_1 = require("./login/login.component");
var product_list_component_1 = require("./products/product-list.component");
var landing_component_1 = require("./landing/landing.component");
exports.appRoutes = [
    {
        path: '',
        component: landing_component_1.LandingPageComponent
    },
    {
        path: 'Login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'products',
        component: product_list_component_1.ProductListComponent
    }
];
//# sourceMappingURL=app.routing.js.map