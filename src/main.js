// 自定义
import { createApp } from "vue";
import App from "./App.vue";
import http from "./http";
import store from "./store";
import router from "./router";

import "./assets/css/reset.css";
import "./assets/css/iconfont.css";

// 第三方
import "./assets/scss/element-variables.scss";
import "./assets/scss/element-custom.scss";
// import 'element-plus/lib/theme-chalk/base.css';

import ElementPlus, { ElCollapseTransition } from 'element-plus';

// import {
//     // ElAlert,
//     ElAside,
//     // ElAutocomplete,
//     // ElAvatar,
//     // ElBacktop,
//     // ElBadge,
//     // ElBreadcrumb,
//     // ElBreadcrumbItem,
//     // ElButton,
//     // ElButtonGroup,
//     // ElCalendar,
//     // ElCard,
//     ElCarousel,
//     ElCarouselItem,
//     // ElCascader,
//     // ElCascaderPanel,
//     // ElCheckbox,
//     // ElCheckboxButton,
//     // ElCheckboxGroup,
//     ElCol,
//     // ElCollapse,
//     // ElCollapseItem,
//     // ElCollapseTransition,
//     // ElColorPicker,
//     ElContainer,
//     // ElDatePicker,
//     // ElDialog,
//     // ElDivider,
//     // ElDrawer,
//     // ElDropdown,
//     // ElDropdownItem,
//     // ElDropdownMenu,
//     ElFooter,
//     // ElForm,
//     // ElFormItem,
//     ElHeader,
//     // ElIcon,
//     ElImage,
//     ElInput,
//     // ElInputNumber,
//     // ElLink,
//     ElMain,
//     ElMenu,
//     ElMenuItem,
//     ElMenuItemGroup,
//     // ElOption,
//     // ElOptionGroup,
//     // ElPageHeader,
//     // ElPagination,
//     // ElPopconfirm,
//     // ElPopover,
//     // ElPopper,
//     ElProgress,
//     // ElRadio,
//     ElRadioButton,
//     ElRadioGroup,
//     // ElRate,
//     ElRow,
//     // ElScrollbar,
//     // ElSelect,
//     // ElSlider,
//     // ElStep,
//     // ElSteps,
//     ElSubmenu,
//     // ElSwitch,
//     // ElTabPane,
//     // ElTable,
//     // ElTableColumn,
//     // ElTabs,
//     // ElTag,
//     // ElTimePicker,
//     // ElTimeSelect,
//     // ElTimeline,
//     // ElTimelineItem,
//     // ElTooltip,
//     // ElTransfer,
//     // ElTree,
//     // ElUpload,
//     // ElInfiniteScroll,
//     // ElLoading,
//     // ElMessage,
//     // ElMessageBox,
//     // ElNotification,
// } from 'element-plus';

// const components = [
//     // ElAlert,
//     ElAside,
//     // ElAutocomplete,
//     // ElAvatar,
//     // ElBacktop,
//     // ElBadge,
//     // ElBreadcrumb,
//     // ElBreadcrumbItem,
//     // ElButton,
//     // ElButtonGroup,
//     // ElCalendar,
//     // ElCard,
//     ElCarousel,
//     ElCarouselItem,
//     // ElCascader,
//     // ElCascaderPanel,
//     // ElCheckbox,
//     // ElCheckboxButton,
//     // ElCheckboxGroup,
//     ElCol,
//     // ElCollapse,
//     // ElCollapseItem,
//     // ElCollapseTransition,
//     // ElColorPicker,
//     ElContainer,
//     // ElDatePicker,
//     // ElDialog,
//     // ElDivider,
//     // ElDrawer,
//     // ElDropdown,
//     // ElDropdownItem,
//     // ElDropdownMenu,
//     ElFooter,
//     // ElForm,
//     // ElFormItem,
//     ElHeader,
//     // ElIcon,
//     ElImage,
//     ElInput,
//     // ElInputNumber,
//     // ElLink,
//     ElMain,
//     ElMenu,
//     ElMenuItem,
//     ElMenuItemGroup,
//     // ElOption,
//     // ElOptionGroup,
//     // ElPageHeader,
//     // ElPagination,
//     // ElPopconfirm,
//     // ElPopover,
//     // ElPopper,
//     ElProgress,
//     // ElRadio,
//     ElRadioButton,
//     ElRadioGroup,
//     // ElRate,
//     ElRow,
//     // ElScrollbar,
//     // ElSelect,
//     // ElSlider,
//     // ElStep,
//     // ElSteps,
//     ElSubmenu,
//     // ElSwitch,
//     // ElTabPane,
//     // ElTable,
//     // ElTableColumn,
//     // ElTabs,
//     // ElTag,
//     // ElTimePicker,
//     // ElTimeSelect,
//     // ElTimeline,
//     // ElTimelineItem,
//     // ElTooltip,
//     // ElTransfer,
//     // ElTree,
//     // ElUpload,
// ];

// const plugins = [
//     // ElInfiniteScroll,
//     // ElLoading,
//     // ElMessage,
//     // ElMessageBox,
//     // ElNotification,
// ];


const app = createApp(App);

// components.forEach(component => {
//     app.component(component.name, component);
// });

// plugins.forEach(plugin => {
//     app.use(plugin);
// });

app.component(ElCollapseTransition.fade, ElCollapseTransition); // 渐变
app.component(ElCollapseTransition.zoom, ElCollapseTransition); // 缩放
app.component(ElCollapseTransition.collapse, ElCollapseTransition); // 展开折叠

app.use(ElementPlus);

/**
 * 创建并挂载根实例
 */
app.use(http).use(store).use(router).mount("#app");
