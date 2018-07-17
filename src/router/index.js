import Vue from 'vue';
import Router from 'vue-router';
<<<<<<< HEAD
import Home from '@/components/Home';
=======
// import Home from '@/components/Home';
import FilterBox from '@/components/custom/Filterbox';
import CustomSlider from '@/components/custom/Slider';
>>>>>>> 963ebd6931dcc2d5bee2482620bb17a5e1b7ff33
import ComponentsAlerts from '@/components/components/Alerts';
import ComponentsBadge from '@/components/components/Badge';
import ComponentsCollapse from '@/components/components/Collapse';
import ContentTypography from '@/components/content/Typography';
import Overview from '@/components/Overview';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      redirect: '/home',
    },
    {
      path: '/home',
//      redirect: '/home',
      component: Home,
=======
      redirect: '/overview',
      component: Overview,
    },
    {
      path: '/overview',
      component: Overview,
>>>>>>> 963ebd6931dcc2d5bee2482620bb17a5e1b7ff33
    },
    {
      path: '/layout/grid',
      // component: LayoutGrid,
    },
    {
      path: '/layout/media-object',
      // component: LayoutMediaObject,
    },
    {
      path: '/content/typography',
      component: ContentTypography,
    },
    {
      path: '/content/code',
      // component: ContentCode,
    },
    {
      path: '/content/images',
      // component: ContentImages,
    },
    {
      path: '/content/tables',
      // component: ContentTables,
    },
    {
      path: '/content/figures',
      // component: ContentFigures,
    },
    {
      path: '/custom/filterbox',
      component: FilterBox,
      name: 'FilterBox',
    },
    {
      path: '/custom/slider',
      component: CustomSlider,
      name: 'CustomSlider',
    },
    {
      path: '/components/alerts',
      component: ComponentsAlerts,
    },
    {
      path: '/components/badge',
      component: ComponentsBadge,
    },
    {
      path: '/components/breadcrumb',
      // component: ComponentsBreadcrumb,
    },
    {
      path: '/components/buttons',
      // component: ComponentsButtons,
    },
    {
      path: '/components/button_group',
      // component: ComponentsButtonGroup,
    },
    {
      path: '/components/card',
      // component: ComponentsCard,
    },
    {
      path: '/components/carousel',
      // component: ComponentsCarousel,
    },
    {
      path: '/components/collapse',
      component: ComponentsCollapse,
    },
    {
      path: '/components/dropdowns',
      // component: ComponentsDropdowns,
    },
    {
      path: '/components/forms',
      // component: ComponentsForms,
    },
    {
      path: '/components/input_group',
      // component: ComponentsInputGroup,
    },
    {
      path: '/components/jumbotron',
      // component: ComponentsJumbotron,
    },
    {
      path: '/components/list_group',
      // component: ComponentsListGroup,
    },
    {
      path: '/components/modal',
      // component: ComponentsModal,
    },
    {
      path: '/components/navs',
      // component: ComponentsNavs,
    },
    {
      path: '/components/navbar',
      // component: ComponentsNavbar,
    },
    {
      path: '/components/pagination',
      // component: ComponentsPagination,
    },
    {
      path: '/components/popovers',
      // component: ComponentsPopovers,
    },
    {
      path: '/components/progress',
      // component: ComponentsProgress,
    },
    {
      path: '/components/scrollspy',
      // component: ComponentsScrollspy,
    },
    {
      path: '/components/tooltips',
      // component: ComponentsTooltips,
    },
  ],
});
