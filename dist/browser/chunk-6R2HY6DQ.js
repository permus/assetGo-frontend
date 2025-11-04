import {
  RouterLink,
  RouterModule
} from "./chunk-AZ7SEGL7.js";
import "./chunk-MFJIZLX6.js";
import "./chunk-ENJBTPXH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-SCVX3V3B.js";
import "./chunk-TXDUYLVM.js";

// src/app/pages/landing/landing.component.ts
var LandingComponent = class _LandingComponent {
  static \u0275fac = function LandingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["app-landing"]], decls: 122, vars: 1, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-gray-50", "py-20"], [1, "max-w-6xl", "mx-auto", "px-6", "text-center"], [1, "flex", "justify-center", "mb-12"], [1, "flex", "items-center", "space-x-2"], ["width", "200", "height", "100", "alt", "AssetGo Logo", 3, "src"], [1, "text-5xl", "font-bold", "text-gray-900", "mb-6", "leading-tight"], [1, "text-lg", "text-gray-600", "mb-12", "max-w-3xl", "mx-auto", "leading-relaxed"], [1, "flex", "justify-center", "space-x-4", "mb-16"], ["routerLink", "//login", 1, "bg-blue-600", "text-white", "px-8", "py-3", "rounded-lg", "font-medium", "hover:bg-blue-700", "transition-colors", "flex", "items-center", "space-x-2", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "text-gray-700", "px-8", "py-3", "rounded-lg", "font-medium", "hover:bg-gray-100", "transition-colors", "cursor-pointer"], [1, "text-sm", "text-gray-500", "mb-8"], [1, "flex", "justify-center", "space-x-12", "text-sm", "text-gray-400"], [1, "py-20", "bg-white"], [1, "max-w-6xl", "mx-auto", "px-6"], [1, "text-center", "mb-16"], [1, "text-4xl", "font-bold", "text-gray-900", "mb-4"], [1, "text-lg", "text-gray-600", "max-w-3xl", "mx-auto"], [1, "grid", "md:grid-cols-3", "gap-8"], [1, "bg-gray-50", "p-8", "rounded-xl"], [1, "w-12", "h-12", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center", "mb-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-xl", "font-semibold", "text-gray-900", "mb-4"], [1, "text-gray-600", "leading-relaxed"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 10V3L4 14h7v7l9-11h-7z"], [1, "bg-blue-600", "py-20"], [1, "max-w-4xl", "mx-auto", "px-6", "text-center"], [1, "text-4xl", "font-bold", "text-white", "mb-6"], [1, "text-xl", "text-blue-100", "mb-12", "leading-relaxed"], [1, "grid", "md:grid-cols-4", "gap-8", "mb-12"], [1, "flex", "items-center", "justify-center", "space-x-2", "text-blue-100"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["routerLink", "//login", 1, "bg-white", "text-blue-600", "px-8", "py-4", "rounded-lg", "font-semibold", "hover:bg-gray-50", "transition-colors", "flex", "items-center", "space-x-2", "mx-auto", "mb-6", "cursor-pointer"], [1, "text-blue-200", "text-sm"], ["routerLink", "//login", 1, "text-white", "underline", "hover:no-underline", "cursor-pointer"]], template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1", 6);
      \u0275\u0275text(7, " Streamline Your Enterprise Asset Management");
      \u0275\u0275element(8, "br");
      \u0275\u0275text(9, " with AI-Powered Precision ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11, " Take control of your organization's assets with our comprehensive management platform. Track, monitor, and optimize your equipment, locations, and work orders with intelligent automation. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8)(13, "a", 9)(14, "span");
      \u0275\u0275text(15, "Get Started Free");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(16, "svg", 10);
      \u0275\u0275element(17, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275text(19, " Watch Demo ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "p", 13);
      \u0275\u0275text(21, "Trusted by enterprises worldwide");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "span");
      \u0275\u0275text(24, "Enterprise Solutions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span");
      \u0275\u0275text(26, "Secure & Scalable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "24/7 Support");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "section", 15)(30, "div", 16)(31, "div", 17)(32, "h2", 18);
      \u0275\u0275text(33, " Everything you need to manage your assets ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "p", 19);
      \u0275\u0275text(35, " Powerful features designed for enterprise-grade asset management, from small teams to large organizations. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 20)(37, "div", 21)(38, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(39, "svg", 23);
      \u0275\u0275element(40, "path", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(41, "h3", 25);
      \u0275\u0275text(42, "Asset Tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 26);
      \u0275\u0275text(44, " Complete visibility of all your assets with real-time tracking, maintenance schedules, and lifecycle management. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 21)(46, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 23);
      \u0275\u0275element(48, "path", 27)(49, "path", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(50, "h3", 25);
      \u0275\u0275text(51, "Location Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p", 26);
      \u0275\u0275text(53, " Organize assets across multiple locations with hierarchical structure and detailed location mapping. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 21)(55, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(56, "svg", 23);
      \u0275\u0275element(57, "path", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(58, "h3", 25);
      \u0275\u0275text(59, "Work Order Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p", 26);
      \u0275\u0275text(61, " Streamline maintenance workflows with automated work order creation, assignment, and tracking. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 21)(63, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(64, "svg", 23);
      \u0275\u0275element(65, "path", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "h3", 25);
      \u0275\u0275text(67, "Analytics & Reporting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p", 26);
      \u0275\u0275text(69, " Data-driven insights with comprehensive dashboards and customizable reporting for informed decisions. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 21)(71, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(72, "svg", 23);
      \u0275\u0275element(73, "path", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(74, "h3", 25);
      \u0275\u0275text(75, "Enterprise Security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "p", 26);
      \u0275\u0275text(77, " Bank-level security with role-based access control, audit trails, and compliance reporting. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 21)(79, "div", 22);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(80, "svg", 23);
      \u0275\u0275element(81, "path", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(82, "h3", 25);
      \u0275\u0275text(83, "AI-Powered Automation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "p", 26);
      \u0275\u0275text(85, " Intelligent automation for predictive maintenance, cost optimization, and operational efficiency. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(86, "section", 33)(87, "div", 34)(88, "h2", 35);
      \u0275\u0275text(89, " Ready to transform your asset management? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "p", 36);
      \u0275\u0275text(91, " Join thousands of companies already using Asset Flow to streamline their operations and reduce costs. Start your free trial today. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 37)(93, "div", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(94, "svg", 39);
      \u0275\u0275element(95, "path", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(96, "span");
      \u0275\u0275text(97, "Free 30-day trial");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "div", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(99, "svg", 39);
      \u0275\u0275element(100, "path", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(101, "span");
      \u0275\u0275text(102, "No credit card required");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(103, "div", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(104, "svg", 39);
      \u0275\u0275element(105, "path", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(106, "span");
      \u0275\u0275text(107, "Full feature access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(109, "svg", 39);
      \u0275\u0275element(110, "path", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "Dedicated support");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "a", 41)(114, "span");
      \u0275\u0275text(115, "Start Your Free Trial");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(116, "svg", 10);
      \u0275\u0275element(117, "path", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(118, "p", 42);
      \u0275\u0275text(119, " Already have an account? ");
      \u0275\u0275elementStart(120, "a", 43);
      \u0275\u0275text(121, "Sign in here");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("src", "images/logo.png", \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [RouterModule, RouterLink], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingComponent, [{
    type: Component,
    args: [{ selector: "app-landing", standalone: true, imports: [RouterModule], template: `<div class="min-h-screen bg-gray-50">\r
  <!-- Hero Section -->\r
  <section class="bg-gray-50 py-20">\r
    <div class="max-w-6xl mx-auto px-6 text-center">\r
      <!-- Logo -->\r
      <div class="flex justify-center mb-12">\r
        <div class="flex items-center space-x-2">\r
          <img [src]="'images/logo.png'" width="200" height="100" alt="AssetGo Logo">\r
        </div>\r
      </div>\r
\r
      <!-- Main Heading -->\r
      <h1 class="text-5xl font-bold text-gray-900 mb-6 leading-tight">\r
        Streamline Your Enterprise Asset Management<br>\r
        with AI-Powered Precision\r
      </h1>\r
\r
      <!-- Subheading -->\r
      <p class="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">\r
        Take control of your organization's assets with our comprehensive management\r
        platform. Track, monitor, and optimize your equipment, locations, and work orders with\r
        intelligent automation.\r
      </p>\r
\r
      <!-- CTA Buttons -->\r
      <div class="flex justify-center space-x-4 mb-16">\r
        <a routerLink="//login" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 cursor-pointer">\r
          <span>Get Started Free</span>\r
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
          </svg>\r
        </a>\r
        <button class="text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer">\r
          Watch Demo\r
        </button>\r
      </div>\r
\r
      <!-- Trust Indicators -->\r
      <p class="text-sm text-gray-500 mb-8">Trusted by enterprises worldwide</p>\r
      <div class="flex justify-center space-x-12 text-sm text-gray-400">\r
        <span>Enterprise Solutions</span>\r
        <span>Secure & Scalable</span>\r
        <span>24/7 Support</span>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Features Section -->\r
  <section class="py-20 bg-white">\r
    <div class="max-w-6xl mx-auto px-6">\r
      <!-- Section Header -->\r
      <div class="text-center mb-16">\r
        <h2 class="text-4xl font-bold text-gray-900 mb-4">\r
          Everything you need to manage your assets\r
        </h2>\r
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">\r
          Powerful features designed for enterprise-grade asset management, from small teams\r
          to large organizations.\r
        </p>\r
      </div>\r
\r
      <!-- Features Grid -->\r
      <div class="grid md:grid-cols-3 gap-8">\r
        <!-- Asset Tracking -->\r
        <div class="bg-gray-50 p-8 rounded-xl">\r
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">\r
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Asset Tracking</h3>\r
          <p class="text-gray-600 leading-relaxed">\r
            Complete visibility of all your assets with real-time\r
            tracking, maintenance schedules, and lifecycle\r
            management.\r
          </p>\r
        </div>\r
\r
        <!-- Location Management -->\r
        <div class="bg-gray-50 p-8 rounded-xl">\r
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">\r
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Location Management</h3>\r
          <p class="text-gray-600 leading-relaxed">\r
            Organize assets across multiple locations with\r
            hierarchical structure and detailed location mapping.\r
          </p>\r
        </div>\r
\r
        <!-- Work Order Management -->\r
        <div class="bg-gray-50 p-8 rounded-xl">\r
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">\r
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Work Order Management</h3>\r
          <p class="text-gray-600 leading-relaxed">\r
            Streamline maintenance workflows with automated work\r
            order creation, assignment, and tracking.\r
          </p>\r
        </div>\r
\r
        <!-- Analytics & Reporting -->\r
        <div class="bg-gray-50 p-8 rounded-xl">\r
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">\r
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Analytics & Reporting</h3>\r
          <p class="text-gray-600 leading-relaxed">\r
            Data-driven insights with comprehensive dashboards and\r
            customizable reporting for informed decisions.\r
          </p>\r
        </div>\r
\r
        <!-- Enterprise Security -->\r
        <div class="bg-gray-50 p-8 rounded-xl">\r
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">\r
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>\r
          <p class="text-gray-600 leading-relaxed">\r
            Bank-level security with role-based access control, audit\r
            trails, and compliance reporting.\r
          </p>\r
        </div>\r
\r
        <!-- AI-Powered Automation -->\r
        <div class="bg-gray-50 p-8 rounded-xl">\r
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">\r
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>\r
            </svg>\r
          </div>\r
          <h3 class="text-xl font-semibold text-gray-900 mb-4">AI-Powered Automation</h3>\r
          <p class="text-gray-600 leading-relaxed">\r
            Intelligent automation for predictive maintenance, cost\r
            optimization, and operational efficiency.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Section -->\r
  <section class="bg-blue-600 py-20">\r
    <div class="max-w-4xl mx-auto px-6 text-center">\r
      <h2 class="text-4xl font-bold text-white mb-6">\r
        Ready to transform your asset management?\r
      </h2>\r
      <p class="text-xl text-blue-100 mb-12 leading-relaxed">\r
        Join thousands of companies already using Asset Flow to streamline their operations\r
        and reduce costs. Start your free trial today.\r
      </p>\r
\r
      <!-- Features List -->\r
      <div class="grid md:grid-cols-4 gap-8 mb-12">\r
        <div class="flex items-center justify-center space-x-2 text-blue-100">\r
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">\r
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\r
          </svg>\r
          <span>Free 30-day trial</span>\r
        </div>\r
        <div class="flex items-center justify-center space-x-2 text-blue-100">\r
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">\r
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\r
          </svg>\r
          <span>No credit card required</span>\r
        </div>\r
        <div class="flex items-center justify-center space-x-2 text-blue-100">\r
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">\r
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\r
          </svg>\r
          <span>Full feature access</span>\r
        </div>\r
        <div class="flex items-center justify-center space-x-2 text-blue-100">\r
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">\r
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>\r
          </svg>\r
          <span>Dedicated support</span>\r
        </div>\r
      </div>\r
\r
      <!-- CTA Button -->\r
      <a routerLink="//login" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2 mx-auto mb-6 cursor-pointer">\r
        <span>Start Your Free Trial</span>\r
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r
        </svg>\r
      </a>\r
\r
      <p class="text-blue-200 text-sm">\r
        Already have an account? <a routerLink="//login" class="text-white underline hover:no-underline cursor-pointer">Sign in here</a>\r
      </p>\r
    </div>\r
  </section>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/pages/landing/landing.component.ts", lineNumber: 11 });
})();
export {
  LandingComponent
};
//# sourceMappingURL=chunk-6R2HY6DQ.js.map
