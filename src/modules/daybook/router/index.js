export default {
    name : 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'), //importante arroba
    children : [
        {
            name : 'no-entry',
            path : '',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected')
        },
        {
            name : 'entry',
            path : ':id',
            component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/entryView')
        }
    ]
}