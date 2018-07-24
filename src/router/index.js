import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/components/Home';
import FilterBox from '@/components/custom/Filterbox';
import RangeSlider from '@/components/custom/Slider';
import ZoomSlider from '@/components/custom/ZoomSlider';
import ComponentsAlerts from '@/components/components/Alerts';
import ComponentsNavs from '@/components/components/Navs';
import ComponentsBadge from '@/components/components/Badge';
import ComponentsCollapse from '@/components/components/Collapse';
import ContentTypography from '@/components/content/Typography';
import Overview from '@/components/Overview';
import LayoutGrid from '@/components/layout/Grid';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/',
    redirect: '/overview',
    component: Overview,
  },
  {
    path: '/overview',
    component: Overview,
  },
  {
    path: '/layout/grid',
    component: LayoutGrid,
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
    path: '/custom/rangeslider',
    component: RangeSlider,
    name: 'RangeSlider',
  },
  {
    path: '/custom/zoomslider',
    component: ZoomSlider,
    name: 'ZoomSlider',
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
    component: ComponentsNavs,
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
