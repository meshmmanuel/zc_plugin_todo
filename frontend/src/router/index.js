import { createRouter, createWebHashHistory } from 'vue-router';
import Pending from '../pages/Pending.vue';
import Main from '../pages/Main.vue';
import Trash from '../pages/Trash.vue';
import Card from '../components/cardnew.vue';

import Archive from '../pages/Archive.vue';
import Details from '../pages/Details';
import Detail from '../pages/Detail';
import Test from '../pages/Test';

const routes = [{
        //landing page
        path: '',
        name: 'Main',
        component: Main,
        children: [{
            path: '',
            name: 'Pending',
            component: Pending,
        }, {
            path: '/archive',
            name: 'Archive',
            component: Archive
        }, {
            path: '/trash',
            name: 'Trash',
            component: Trash
        }]
    },
    {
        path: '/card',
        name: 'Card',
        component: Card
    }, {
        path: '/details/:id',
        name: 'Details',
        component: Details
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/test',
        name: 'Test',
        component: Test
    },
    {
        path: '/:pathMatch(.*)*',
        //wrong urls redirection
        name: 'PageNotFound',
        component: Main
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;