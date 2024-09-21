const microApp = {
  path: '/micro-app-*',
  name: 'micro-app',
  component: () => import('@/views/micro-app/index.vue'),
  meta: {
    title: '',
  },
}

export default microApp;
