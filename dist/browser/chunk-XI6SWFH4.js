import {
  AuthService
} from "./chunk-AWWOETJ7.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-UBVLDYVW.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Router,
  RouterModule,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GRUY2UAP.js";
import {
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// src/app/roles/services/role.service.ts
var RoleService = class _RoleService {
  http;
  authService;
  apiUrl = `${environment.apiUrl}/roles`;
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return {
      headers: __spreadValues({
        "Content-Type": "application/json"
      }, token ? { "Authorization": `Bearer ${token}` } : {})
    };
  }
  // Get all roles
  getRoles() {
    return this.http.get(this.apiUrl, this.getAuthHeaders());
  }
  // Get a specific role
  getRole(id) {
    return this.http.get(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Create a new role
  createRole(roleData) {
    return this.http.post(this.apiUrl, roleData, this.getAuthHeaders());
  }
  // Update a role
  updateRole(id, roleData) {
    return this.http.put(`${this.apiUrl}/${id}`, roleData, this.getAuthHeaders());
  }
  // Delete a role
  deleteRole(id) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }
  // Get available permissions
  getAvailablePermissions() {
    return this.http.get(`${this.apiUrl}/available-permissions`, this.getAuthHeaders());
  }
  // Assign role to user
  assignRoleToUser(data) {
    return this.http.post(`${this.apiUrl}/assign-to-user`, data, this.getAuthHeaders());
  }
  // Remove role from user
  removeRoleFromUser(data) {
    return this.http.post(`${this.apiUrl}/remove-from-user`, data, this.getAuthHeaders());
  }
  static \u0275fac = function RoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RoleService, factory: _RoleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: AuthService }], null);
})();

// src/app/roles/role-list/role-list.component.ts
var _c0 = (a0) => ({ "bg-blue-100 font-semibold": a0 });
function RoleListComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "Sort By");
    \u0275\u0275elementEnd();
  }
}
function RoleListComponent_span_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedSort.label);
  }
}
function RoleListComponent_div_78_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275listener("click", function RoleListComponent_div_78_div_3_Template_div_click_0_listener() {
      const sort_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.selectSort(sort_r3);
      return \u0275\u0275resetView(ctx_r0.showSortDropdown = false);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sort_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c0, (ctx_r0.selectedSort == null ? null : ctx_r0.selectedSort.value) === sort_r3.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sort_r3.label, " ");
  }
}
function RoleListComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70);
    \u0275\u0275text(2, "Sort By");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, RoleListComponent_div_78_div_3_Template, 2, 4, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.sortOptions);
  }
}
function RoleListComponent__svg_svg_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 73);
    \u0275\u0275element(1, "path", 74);
    \u0275\u0275elementEnd();
  }
}
function RoleListComponent__svg_svg_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 73);
    \u0275\u0275element(1, "path", 75);
    \u0275\u0275elementEnd();
  }
}
function RoleListComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 79);
    \u0275\u0275element(4, "circle", 80)(5, "path", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3", 82);
    \u0275\u0275text(7, "Loading Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 83);
    \u0275\u0275text(9, "Please wait while we fetch your roles...");
    \u0275\u0275elementEnd()()();
  }
}
function RoleListComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "div", 77)(2, "div", 84);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 85);
    \u0275\u0275element(4, "path", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h3", 82);
    \u0275\u0275text(6, "Error Loading Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 87);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 88);
    \u0275\u0275listener("click", function RoleListComponent_div_97_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.loadRoles());
    });
    \u0275\u0275text(10, " Retry ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RoleListComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 90);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 91);
    \u0275\u0275element(3, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "h3", 82);
    \u0275\u0275text(5, "No Roles Found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 92);
    \u0275\u0275text(7, "Get started by creating your first role.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 88);
    \u0275\u0275listener("click", function RoleListComponent_div_98_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createRole());
    });
    \u0275\u0275text(9, " Create First Role ");
    \u0275\u0275elementEnd()();
  }
}
function RoleListComponent_div_99_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 120)(1, "button", 121);
    \u0275\u0275listener("click", function RoleListComponent_div_99_div_1_div_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const role_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editRole(role_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 122);
    \u0275\u0275element(3, "path", 123);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 124);
    \u0275\u0275text(5, "Edit Role");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 125);
    \u0275\u0275listener("click", function RoleListComponent_div_99_div_1_div_11_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const role_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteRole(role_r7));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 126);
    \u0275\u0275element(8, "path", 127);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 128);
    \u0275\u0275text(10, "Delete Role");
    \u0275\u0275elementEnd()()();
  }
}
function RoleListComponent_div_99_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 110);
    \u0275\u0275element(2, "path", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Created ");
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 1, role_r7.created_at, "MMM d, y"));
  }
}
function RoleListComponent_div_99_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "div", 97)(3, "span", 98);
    \u0275\u0275text(4, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275listener("click", function RoleListComponent_div_99_div_1_Template_div_click_5_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(6, "button", 99);
    \u0275\u0275listener("click", function RoleListComponent_div_99_div_1_Template_button_click_6_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleRoleMenu(role_r7.id));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 100);
    \u0275\u0275element(8, "circle", 101)(9, "circle", 102)(10, "circle", 103);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, RoleListComponent_div_99_div_1_div_11_Template, 11, 0, "div", 104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "svg", 105);
    \u0275\u0275element(13, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "div", 106)(15, "div")(16, "div", 107);
    \u0275\u0275listener("click", function RoleListComponent_div_99_div_1_Template_div_click_16_listener() {
      const role_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editRole(role_r7));
    });
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 108);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 109);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 110);
    \u0275\u0275element(22, "path", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(25, "hr", 111);
    \u0275\u0275elementStart(26, "div", 112);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 110);
    \u0275\u0275element(28, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(31, RoleListComponent_div_99_div_1_div_31_Template, 8, 4, "div", 113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 114)(33, "div", 115)(34, "span", 116);
    \u0275\u0275text(35, "Permission Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 117);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 118);
    \u0275\u0275element(39, "div", 119);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const role_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", role_r7.showMenu);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", role_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r7.description || "No description");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", role_r7.users_count || 0, " users assigned");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.getPermissionSummary(role_r7));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r7.created_at);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.getPermissionScore(role_r7), "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.getPermissionScore(role_r7), "%");
  }
}
function RoleListComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275template(1, RoleListComponent_div_99_div_1_Template, 40, 9, "div", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.filteredRoles);
  }
}
function RoleListComponent_div_100_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 138)(1, "div", 139)(2, "div", 133)(3, "div", 140);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 133)(6, "div", 141);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 134)(9, "div", 141);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 135)(12, "div", 141);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 134)(15, "div", 141);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 142)(19, "button", 143);
    \u0275\u0275listener("click", function RoleListComponent_div_100_div_16_Template_button_click_19_listener() {
      const role_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editRole(role_r10));
    });
    \u0275\u0275text(20, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 144);
    \u0275\u0275listener("click", function RoleListComponent_div_100_div_16_Template_button_click_21_listener() {
      const role_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteRole(role_r10));
    });
    \u0275\u0275text(22, " Delete ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const role_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(role_r10.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r10.description || "No description");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getPermissionSummary(role_r10));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r10.users_count || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 5, role_r10.created_at, "short"));
  }
}
function RoleListComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "div", 131)(2, "div", 132)(3, "div", 133);
    \u0275\u0275text(4, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 133);
    \u0275\u0275text(6, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 134);
    \u0275\u0275text(8, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 135);
    \u0275\u0275text(10, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 134);
    \u0275\u0275text(12, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 135);
    \u0275\u0275text(14, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 136);
    \u0275\u0275template(16, RoleListComponent_div_100_div_16_Template, 23, 8, "div", 137);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.filteredRoles);
  }
}
var RoleListComponent = class _RoleListComponent {
  roleService;
  router;
  roles = [];
  filteredRoles = [];
  loading = false;
  error = "";
  // Search and filtering
  searchTerm = "";
  // Sorting
  selectedSort = null;
  selectedSortDir = "asc";
  showSortDropdown = false;
  // View type
  viewType = "grid";
  // Sort options
  sortOptions = [
    { label: "Name", value: "name" },
    { label: "Created Date", value: "created_at" },
    { label: "Users Count", value: "users_count" },
    { label: "Permissions", value: "permissions" }
  ];
  constructor(roleService, router) {
    this.roleService = roleService;
    this.router = router;
  }
  ngOnInit() {
    this.loadRoles();
  }
  loadRoles() {
    this.loading = true;
    this.error = "";
    this.roleService.getRoles().subscribe({
      next: (response) => {
        this.roles = response.data;
        this.filteredRoles = [...this.roles];
        this.loading = false;
      },
      error: (error) => {
        this.error = "Failed to load roles";
        this.loading = false;
        console.error("Error loading roles:", error);
      }
    });
  }
  createRole() {
    this.router.navigate(["/roles/create"]);
  }
  editRole(role) {
    this.router.navigate(["/roles/edit", role.id]);
  }
  deleteRole(role) {
    if (confirm(`Are you sure you want to delete the role "${role.name}"?`)) {
      this.roleService.deleteRole(role.id).subscribe({
        next: () => {
          this.loadRoles();
        },
        error: (error) => {
          console.error("Error deleting role:", error);
          alert("Failed to delete role");
        }
      });
    }
  }
  getPermissionSummary(role) {
    if (!role.permissions)
      return "No permissions";
    const permissions = role.permissions.permissions;
    const modules = Object.keys(permissions);
    const totalPermissions = modules.reduce((total, module) => {
      return total + Object.values(permissions[module]).filter(Boolean).length;
    }, 0);
    return `${totalPermissions} permissions across ${modules.length} modules`;
  }
  // New methods for the enhanced UI
  getActiveRolesCount() {
    return this.roles.length;
  }
  getTotalUsersCount() {
    return this.roles.reduce((total, role) => total + (role.users_count || 0), 0);
  }
  getTotalPermissionsCount() {
    return this.roles.reduce((total, role) => {
      if (!role.permissions)
        return total;
      const permissions = role.permissions.permissions;
      const modules = Object.keys(permissions);
      const rolePermissions = modules.reduce((moduleTotal, module) => {
        return moduleTotal + Object.values(permissions[module]).filter(Boolean).length;
      }, 0);
      return total + rolePermissions;
    }, 0);
  }
  getPermissionScore(role) {
    if (!role.permissions)
      return 0;
    const permissions = role.permissions.permissions;
    const modules = Object.keys(permissions);
    if (modules.length === 0)
      return 0;
    const totalPermissions = modules.reduce((total, module) => {
      return total + Object.values(permissions[module]).filter(Boolean).length;
    }, 0);
    const maxPossiblePermissions = modules.length * 5;
    return Math.round(totalPermissions / maxPossiblePermissions * 100);
  }
  onSearchChange() {
    this.filterRoles();
  }
  filterRoles() {
    if (!this.searchTerm.trim()) {
      this.filteredRoles = [...this.roles];
    } else {
      this.filteredRoles = this.roles.filter((role) => role.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || role.description && role.description.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    this.sortRoles();
  }
  toggleSortDropdown() {
    this.showSortDropdown = !this.showSortDropdown;
  }
  selectSort(sort) {
    this.selectedSort = sort;
    this.sortRoles();
  }
  toggleSortDir() {
    this.selectedSortDir = this.selectedSortDir === "asc" ? "desc" : "asc";
    this.sortRoles();
  }
  sortRoles() {
    if (!this.selectedSort)
      return;
    this.filteredRoles.sort((a, b) => {
      let aValue;
      let bValue;
      switch (this.selectedSort.value) {
        case "name":
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case "created_at":
          aValue = new Date(a.created_at).getTime();
          bValue = new Date(b.created_at).getTime();
          break;
        case "users_count":
          aValue = a.users_count || 0;
          bValue = b.users_count || 0;
          break;
        case "permissions":
          aValue = this.getPermissionScore(a);
          bValue = this.getPermissionScore(b);
          break;
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
      }
      if (this.selectedSortDir === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }
  toggleRoleMenu(roleId) {
    this.roles.forEach((role) => {
      role.showMenu = role.id === roleId ? !role.showMenu : false;
    });
  }
  static \u0275fac = function RoleListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleListComponent)(\u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleListComponent, selectors: [["app-role-list"]], standalone: false, decls: 101, vars: 32, consts: [[1, "role-list-page", "min-h-screen", "bg-gray-50", "p-6"], [1, "mb-6", "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-1"], [1, "text-gray-600", "text-base"], [1, "flex", "items-center", "space-x-3", "mt-4", "md:mt-0"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-semibold", "px-5", "py-2", "rounded-lg", "shadow-sm", "transition-colors", "flex", "items-center", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "relative", 3, "click"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-lg", "hover:bg-gray-100", "transition-colors", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-600"], ["cx", "12", "cy", "5", "r", "2"], ["cx", "12", "cy", "12", "r", "2"], ["cx", "12", "cy", "19", "r", "2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-4", "mb-8"], [1, "rounded-xl", "bg-blue-50", "border", "border-blue-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "flex", "items-center", "justify-between", "mb-2"], [1, "text-base", "font-medium", "text-gray-700"], [1, "w-10", "h-10", "bg-blue-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], [1, "text-3xl", "font-bold", "text-gray-900"], ["href", "#", 1, "text-sm", "text-blue-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-green-50", "border", "border-green-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-green-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-green-400"], ["cx", "12", "cy", "12", "r", "8", "stroke", "currentColor", "stroke-width", "2", "fill", "none"], ["cx", "12", "cy", "12", "r", "4", "fill", "currentColor", 1, "text-green-400"], ["href", "#", 1, "text-sm", "text-green-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-purple-50", "border", "border-purple-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-purple-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-purple-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"], ["href", "#", 1, "text-sm", "text-purple-600", "font-medium", "mt-1"], [1, "rounded-xl", "bg-orange-50", "border", "border-orange-100", "p-6", "flex", "flex-col", "justify-between", "shadow-sm", "transition-all", "hover:shadow-md"], [1, "w-10", "h-10", "bg-orange-100", "rounded-xl", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-orange-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"], ["href", "#", 1, "text-sm", "text-orange-600", "font-medium", "mt-1"], [1, "bg-white", "rounded-xl", "border", "border-gray-200", "p-6", "mb-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between"], [1, "flex", "flex-col", "sm:flex-row", "items-start", "sm:items-center", "space-y-3", "sm:space-y-0", "sm:space-x-4"], [1, "relative"], ["type", "text", "placeholder", "Search roles...", 1, "w-full", "sm:w-64", "px-4", "py-2", "pl-10", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", 3, "ngModelChange", "input", "ngModel"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-2.5", "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "button", 1, "w-full", "px-4", "py-2", "text-left", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-white", "transition-all", "min-w-[180px]", 3, "click"], [1, "flex", "items-center", "justify-between"], ["class", "text-gray-400", 4, "ngIf"], [4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "transition-transform", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-72 overflow-y-auto min-w-[180px] w-full", 4, "ngIf"], [1, "px-4", "py-2", "bg-gray-100", "rounded-lg", "text-gray-700", "flex", "items-center", "space-x-2", "min-w-[70px]", "cursor-pointer", 3, "click"], ["class", "w-4 h-4", "fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "mt-4", "md:mt-0"], [1, "w-10", "h-10", "flex", "items-center", "justify-center", "rounded-lg", "border", "border-gray-200", "hover:bg-blue-50", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["x", "4", "y", "4", "width", "7", "height", "7", "rx", "2"], ["x", "13", "y", "4", "width", "7", "height", "7", "rx", "2"], ["x", "4", "y", "13", "width", "7", "height", "7", "rx", "2"], ["x", "13", "y", "13", "width", "7", "height", "7", "rx", "2"], ["x", "4", "y", "6", "width", "16", "height", "4", "rx", "2"], ["x", "4", "y", "14", "width", "16", "height", "4", "rx", "2"], ["class", "flex items-center justify-center py-20", 4, "ngIf"], ["class", "text-center py-20", 4, "ngIf"], ["class", "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2", 4, "ngIf"], ["class", "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden", 4, "ngIf"], [1, "text-gray-400"], [1, "absolute", "z-10", "mt-1", "bg-white", "border", "border-gray-300", "rounded-lg", "shadow-lg", "max-h-72", "overflow-y-auto", "min-w-[180px]", "w-full"], [1, "px-4", "py-2", "text-xs", "text-gray-400", "font-semibold", "uppercase", "tracking-wider"], ["class", "px-4 py-2 cursor-pointer hover:bg-blue-50", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "px-4", "py-2", "cursor-pointer", "hover:bg-blue-50", 3, "click", "ngClass"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 17l-4 4m0 0l-4-4m4 4V3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7l4-4m0 0l4 4m-4-4v18"], [1, "flex", "items-center", "justify-center", "py-20"], [1, "text-center"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-full", "mb-4"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "w-8", "h-8", "text-blue-600"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "text-lg", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "text-gray-500"], [1, "inline-flex", "items-center", "justify-center", "w-16", "h-16", "bg-red-100", "rounded-full", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"], [1, "text-sm", "text-gray-500", "mb-4"], [1, "px-4", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-colors", 3, "click"], [1, "text-center", "py-20"], [1, "w-16", "h-16", "bg-gray-100", "rounded-full", "flex", "items-center", "justify-center", "mx-auto", "mb-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], [1, "text-gray-600", "mb-4"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "mt-2"], ["class", "rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col transition-all hover:shadow-md overflow-hidden", 4, "ngFor", "ngForOf"], [1, "rounded-2xl", "border", "border-blue-200", "bg-white", "shadow-sm", "flex", "flex-col", "transition-all", "hover:shadow-md", "overflow-hidden"], [1, "relative", "bg-[#e0edff]", "h-32", "flex", "flex-col", "items-center", "justify-center"], [1, "absolute", "right-4", "top-4", "flex", "items-center", "space-x-2"], [1, "bg-blue-100", "text-blue-700", "text-xs", "font-semibold", "px-3", "py-1", "rounded-full"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "hover:bg-gray-100", "transition-colors", "cursor-pointer", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-400"], ["cx", "12", "cy", "6", "r", "1.5"], ["cx", "12", "cy", "12", "r", "1.5"], ["cx", "12", "cy", "18", "r", "1.5"], ["class", "absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50", 4, "ngIf"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-blue-400"], [1, "flex-1", "flex", "flex-col", "justify-between", "p-6", "pt-4"], [1, "font-semibold", "text-lg", "text-gray-900", "mb-1", "cursor-pointer", "hover:text-blue-600", "transition-colors", 3, "click"], [1, "text-sm", "text-gray-500", "mb-2"], [1, "flex", "items-center", "text-xs", "text-gray-400", "mb-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "mr-1"], [1, "my-3", "border-gray-200"], [1, "flex", "items-center", "text-sm", "text-gray-700", "mb-1"], ["class", "flex items-center text-sm text-gray-700 mb-1", 4, "ngIf"], [1, "mt-4"], [1, "flex", "justify-between", "items-center", "mb-1"], [1, "text-xs", "text-gray-500"], [1, "text-xs", "font-semibold", "text-gray-700"], [1, "w-full", "h-2", "bg-gray-200", "rounded-full"], [1, "h-2", "rounded-full", "bg-blue-500"], [1, "absolute", "right-0", "top-full", "mt-1", "w-48", "bg-white", "rounded-lg", "shadow-lg", "border", "border-gray-200", "py-1", "z-50"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "text-left", "hover:bg-gray-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"], [1, "text-sm", "text-gray-700"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "text-left", "hover:bg-red-50", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "text-sm", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"], [1, "bg-white", "rounded-lg", "shadow-sm", "border", "border-gray-200", "overflow-hidden"], [1, "px-6", "py-4", "border-b", "border-gray-200", "bg-gray-50"], [1, "grid", "grid-cols-12", "gap-4", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "col-span-3"], [1, "col-span-2"], [1, "col-span-1"], [1, "divide-y", "divide-gray-200"], ["class", "px-6 py-4 hover:bg-gray-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "px-6", "py-4", "hover:bg-gray-50", "transition-colors"], [1, "grid", "grid-cols-12", "gap-4", "items-center"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "text-sm", "text-gray-900"], [1, "col-span-1", "text-right"], [1, "text-blue-600", "hover:text-blue-900", "mr-3", 3, "click"], [1, "text-red-600", "hover:text-red-900", 3, "click"]], template: function RoleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
      \u0275\u0275text(4, "Role Management Hub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Advanced role management with granular permissions and user access control");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function RoleListComponent_Template_button_click_8_listener() {
        return ctx.createRole();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(9, "svg", 6);
      \u0275\u0275element(10, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Create Role ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275listener("click", function RoleListComponent_Template_div_click_12_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "circle", 11)(16, "circle", 12)(17, "circle", 13);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "span", 17);
      \u0275\u0275text(22, "Total Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(24, "svg", 19);
      \u0275\u0275element(25, "path", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(26, "div", 21);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 22);
      \u0275\u0275text(29, "Roles in system");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 23)(31, "div", 16)(32, "span", 17);
      \u0275\u0275text(33, "Active Roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 24);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 25);
      \u0275\u0275element(36, "circle", 26)(37, "circle", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(38, "div", 21);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 28);
      \u0275\u0275text(41, "Currently active");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 29)(43, "div", 16)(44, "span", 17);
      \u0275\u0275text(45, "Total Users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 30);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(47, "svg", 31);
      \u0275\u0275element(48, "path", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(49, "div", 21);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 33);
      \u0275\u0275text(52, "Users assigned");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 34)(54, "div", 16)(55, "span", 17);
      \u0275\u0275text(56, "Permissions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 35);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(58, "svg", 36);
      \u0275\u0275element(59, "path", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(60, "div", 21);
      \u0275\u0275text(61);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "a", 38);
      \u0275\u0275text(63, "Total permissions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 39)(65, "div", 40)(66, "div", 41)(67, "div", 42)(68, "input", 43);
      \u0275\u0275twoWayListener("ngModelChange", function RoleListComponent_Template_input_ngModelChange_68_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275listener("input", function RoleListComponent_Template_input_input_68_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(69, "svg", 44);
      \u0275\u0275element(70, "path", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(71, "div", 8);
      \u0275\u0275listener("click", function RoleListComponent_Template_div_click_71_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(72, "button", 46);
      \u0275\u0275listener("click", function RoleListComponent_Template_button_click_72_listener() {
        return ctx.toggleSortDropdown();
      });
      \u0275\u0275elementStart(73, "div", 47);
      \u0275\u0275template(74, RoleListComponent_span_74_Template, 2, 0, "span", 48)(75, RoleListComponent_span_75_Template, 2, 1, "span", 49);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(76, "svg", 50);
      \u0275\u0275element(77, "path", 51);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(78, RoleListComponent_div_78_Template, 4, 1, "div", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(79, "div", 42)(80, "button", 53);
      \u0275\u0275listener("click", function RoleListComponent_Template_button_click_80_listener() {
        return ctx.toggleSortDir();
      });
      \u0275\u0275template(81, RoleListComponent__svg_svg_81_Template, 2, 0, "svg", 54)(82, RoleListComponent__svg_svg_82_Template, 2, 0, "svg", 54);
      \u0275\u0275elementStart(83, "span");
      \u0275\u0275text(84);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(85, "div", 55)(86, "button", 56);
      \u0275\u0275listener("click", function RoleListComponent_Template_button_click_86_listener() {
        return ctx.viewType = "grid";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(87, "svg", 57);
      \u0275\u0275element(88, "rect", 58)(89, "rect", 59)(90, "rect", 60)(91, "rect", 61);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(92, "button", 56);
      \u0275\u0275listener("click", function RoleListComponent_Template_button_click_92_listener() {
        return ctx.viewType = "list";
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(93, "svg", 57);
      \u0275\u0275element(94, "rect", 62)(95, "rect", 63);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(96, RoleListComponent_div_96_Template, 10, 0, "div", 64)(97, RoleListComponent_div_97_Template, 11, 1, "div", 64)(98, RoleListComponent_div_98_Template, 10, 0, "div", 65)(99, RoleListComponent_div_99_Template, 2, 1, "div", 66)(100, RoleListComponent_div_100_Template, 17, 1, "div", 67);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(27);
      \u0275\u0275textInterpolate(ctx.roles.length);
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.getActiveRolesCount());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.getTotalUsersCount());
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.getTotalPermissionsCount());
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("border-blue-500", ctx.showSortDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedSort);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSort);
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.showSortDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showSortDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-blue-100", ctx.selectedSortDir === "asc")("text-blue-700", ctx.selectedSortDir === "asc");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSortDir === "desc");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedSortDir === "asc");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.selectedSortDir === "asc" ? "A-Z" : "Z-A");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("bg-blue-100", ctx.viewType === "grid")("text-blue-700", ctx.viewType === "grid");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("bg-blue-100", ctx.viewType === "list")("text-blue-700", ctx.viewType === "list");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.roles.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "grid" && !ctx.loading && !ctx.error && ctx.roles.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.viewType === "list" && !ctx.loading && !ctx.error && ctx.roles.length > 0);
    }
  }, dependencies: [NgClass, NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], styles: ["\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.role-table[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n.role-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background-color: #f9fafb;\n  z-index: 10;\n}\n/*# sourceMappingURL=role-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleListComponent, [{
    type: Component,
    args: [{ selector: "app-role-list", standalone: false, template: `<div class="role-list-page min-h-screen bg-gray-50 p-6">\r
  <!-- Page Title and Subtitle + Actions -->\r
  <div class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">\r
    <div>\r
      <h1 class="text-2xl font-bold text-gray-900 mb-1">Role Management Hub</h1>\r
      <p class="text-gray-600 text-base">Advanced role management with granular permissions and user access control</p>\r
    </div>\r
    <div class="flex items-center space-x-3 mt-4 md:mt-0">\r
      <button (click)="createRole()" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-sm transition-colors flex items-center cursor-pointer">\r
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
        </svg>\r
        Create Role\r
      </button>\r
      <div class="relative" (click)="$event.stopPropagation()">\r
        <button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">\r
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <circle cx="12" cy="5" r="2" />\r
            <circle cx="12" cy="12" r="2" />\r
            <circle cx="12" cy="19" r="2" />\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Summary Cards -->\r
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">\r
    <!-- Total Roles -->\r
    <div class="rounded-xl bg-blue-50 border border-blue-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Total Roles</span>\r
        <span class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ roles.length }}</div>\r
      <a href="#" class="text-sm text-blue-600 font-medium mt-1">Roles in system</a>\r
    </div>\r
\r
    <!-- Active Roles -->\r
    <div class="rounded-xl bg-green-50 border border-green-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Active Roles</span>\r
        <span class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" fill="none" />\r
            <circle cx="12" cy="12" r="4" fill="currentColor" class="text-green-400" />\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ getActiveRolesCount() }}</div>\r
      <a href="#" class="text-sm text-green-600 font-medium mt-1">Currently active</a>\r
    </div>\r
\r
    <!-- Total Users -->\r
    <div class="rounded-xl bg-purple-50 border border-purple-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Total Users</span>\r
        <span class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ getTotalUsersCount() }}</div>\r
      <a href="#" class="text-sm text-purple-600 font-medium mt-1">Users assigned</a>\r
    </div>\r
\r
    <!-- Permissions -->\r
    <div class="rounded-xl bg-orange-50 border border-orange-100 p-6 flex flex-col justify-between shadow-sm transition-all hover:shadow-md">\r
      <div class="flex items-center justify-between mb-2">\r
        <span class="text-base font-medium text-gray-700">Permissions</span>\r
        <span class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">\r
          <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
          </svg>\r
        </span>\r
      </div>\r
      <div class="text-3xl font-bold text-gray-900">{{ getTotalPermissionsCount() }}</div>\r
      <a href="#" class="text-sm text-orange-600 font-medium mt-1">Total permissions</a>\r
    </div>\r
  </div>\r
\r
  <!-- Filters and Controls -->\r
  <div class="bg-white rounded-xl border border-gray-200 p-6 mb-6">\r
    <div class="flex flex-col md:flex-row md:items-center md:justify-between">\r
      <!-- Left: Search and Filters -->\r
      <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">\r
        <!-- Search -->\r
        <div class="relative">\r
          <input\r
            type="text"\r
            placeholder="Search roles..."\r
            class="w-full sm:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            [(ngModel)]="searchTerm"\r
            (input)="onSearchChange()">\r
          <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
          </svg>\r
        </div>\r
\r
        <!-- Sort By Dropdown -->\r
        <div class="relative" (click)="$event.stopPropagation()">\r
          <button\r
            type="button"\r
            (click)="toggleSortDropdown()"\r
            class="w-full px-4 py-2 text-left border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all min-w-[180px]"\r
            [class.border-blue-500]="showSortDropdown">\r
            <div class="flex items-center justify-between">\r
              <span *ngIf="!selectedSort" class="text-gray-400">Sort By</span>\r
              <span *ngIf="selectedSort">{{ selectedSort.label }}</span>\r
              <svg class="w-4 h-4 text-gray-400 transition-transform ml-2" [class.rotate-180]="showSortDropdown" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </div>\r
          </button>\r
          <div\r
            *ngIf="showSortDropdown"\r
            class="absolute z-10 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-72 overflow-y-auto min-w-[180px] w-full">\r
            <div class="px-4 py-2 text-xs text-gray-400 font-semibold uppercase tracking-wider">Sort By</div>\r
            <div\r
              *ngFor="let sort of sortOptions"\r
              (click)="selectSort(sort); showSortDropdown = false"\r
              class="px-4 py-2 cursor-pointer hover:bg-blue-50"\r
              [ngClass]="{'bg-blue-100 font-semibold': selectedSort?.value === sort.value}">\r
              {{ sort.label }}\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Sort Direction Button -->\r
        <div class="relative">\r
          <button (click)="toggleSortDir()" class="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 flex items-center space-x-2 min-w-[70px] cursor-pointer"\r
            [class.bg-blue-100]="selectedSortDir === 'asc'" [class.text-blue-700]="selectedSortDir === 'asc'">\r
            <svg *ngIf="selectedSortDir === 'desc'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>\r
            </svg>\r
            <svg *ngIf="selectedSortDir === 'asc'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>\r
            </svg>\r
            <span>{{ selectedSortDir === 'asc' ? 'A-Z' : 'Z-A' }}</span>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Right: View Type Toggle -->\r
      <div class="flex items-center space-x-2 mt-4 md:mt-0">\r
        <button (click)="viewType = 'grid'" [class.bg-blue-100]="viewType === 'grid'" [class.text-blue-700]="viewType === 'grid'" class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <rect x="4" y="4" width="7" height="7" rx="2" />\r
            <rect x="13" y="4" width="7" height="7" rx="2" />\r
            <rect x="4" y="13" width="7" height="7" rx="2" />\r
            <rect x="13" y="13" width="7" height="7" rx="2" />\r
          </svg>\r
        </button>\r
        <button (click)="viewType = 'list'" [class.bg-blue-100]="viewType === 'list'" [class.text-blue-700]="viewType === 'list'" class="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer">\r
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
            <rect x="4" y="6" width="16" height="4" rx="2" />\r
            <rect x="4" y="14" width="16" height="4" rx="2" />\r
          </svg>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">\r
        <svg class="animate-spin w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24">\r
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Loading Roles</h3>\r
      <p class="text-sm text-gray-500">Please wait while we fetch your roles...</p>\r
    </div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error && !loading" class="flex items-center justify-center py-20">\r
    <div class="text-center">\r
      <div class="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">\r
        <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>\r
        </svg>\r
      </div>\r
      <h3 class="text-lg font-medium text-gray-900 mb-2">Error Loading Roles</h3>\r
      <p class="text-sm text-gray-500 mb-4">{{error}}</p>\r
      <button\r
        (click)="loadRoles()"\r
        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
        Retry\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && !error && roles.length === 0" class="text-center py-20">\r
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">\r
      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
      </svg>\r
    </div>\r
    <h3 class="text-lg font-medium text-gray-900 mb-2">No Roles Found</h3>\r
    <p class="text-gray-600 mb-4">Get started by creating your first role.</p>\r
    <button\r
      (click)="createRole()"\r
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">\r
      Create First Role\r
    </button>\r
  </div>\r
\r
  <!-- Grid View Cards -->\r
  <div *ngIf="viewType === 'grid' && !loading && !error && roles.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-2">\r
    <div *ngFor="let role of filteredRoles" class="rounded-2xl border border-blue-200 bg-white shadow-sm flex flex-col transition-all hover:shadow-md overflow-hidden">\r
      <!-- Card Header -->\r
      <div class="relative bg-[#e0edff] h-32 flex flex-col items-center justify-center">\r
        <div class="absolute right-4 top-4 flex items-center space-x-2">\r
          <span class="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Active</span>\r
          <div class="relative" (click)="$event.stopPropagation()">\r
            <button\r
              (click)="toggleRoleMenu(role.id)"\r
              class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer">\r
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                <circle cx="12" cy="6" r="1.5" />\r
                <circle cx="12" cy="12" r="1.5" />\r
                <circle cx="12" cy="18" r="1.5" />\r
              </svg>\r
            </button>\r
\r
            <!-- Dropdown Menu -->\r
            <div *ngIf="role.showMenu" class="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">\r
              <button\r
                (click)="editRole(role)"\r
                class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-50 transition-colors">\r
                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>\r
                </svg>\r
                <span class="text-sm text-gray-700">Edit Role</span>\r
              </button>\r
\r
              <button\r
                (click)="deleteRole(role)"\r
                class="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-red-50 transition-colors">\r
                <svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                </svg>\r
                <span class="text-sm text-red-600">Delete Role</span>\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
        <svg class="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
        </svg>\r
      </div>\r
\r
      <!-- Card Body -->\r
      <div class="flex-1 flex flex-col justify-between p-6 pt-4">\r
        <div>\r
          <div class="font-semibold text-lg text-gray-900 mb-1 cursor-pointer hover:text-blue-600 transition-colors" (click)="editRole(role)">\r
            {{ role.name }}\r
          </div>\r
          <div class="text-sm text-gray-500 mb-2">{{ role.description || 'No description' }}</div>\r
          <div class="flex items-center text-xs text-gray-400 mb-2">\r
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>\r
            </svg>\r
            <span>{{ role.users_count || 0 }} users assigned</span>\r
          </div>\r
          <hr class="my-3 border-gray-200">\r
          <div class="flex items-center text-sm text-gray-700 mb-1">\r
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>\r
            </svg>\r
            <span>{{ getPermissionSummary(role) }}</span>\r
          </div>\r
          <div class="flex items-center text-sm text-gray-700 mb-1" *ngIf="role.created_at">\r
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />\r
            </svg>\r
            <span>Created <b>{{ role.created_at | date:'MMM d, y' }}</b></span>\r
          </div>\r
        </div>\r
\r
        <!-- Permission Score Bar -->\r
        <div class="mt-4">\r
          <div class="flex justify-between items-center mb-1">\r
            <span class="text-xs text-gray-500">Permission Score</span>\r
            <span class="text-xs font-semibold text-gray-700">{{ getPermissionScore(role) }}%</span>\r
          </div>\r
          <div class="w-full h-2 bg-gray-200 rounded-full">\r
            <div class="h-2 rounded-full bg-blue-500" [style.width.%]="getPermissionScore(role)"></div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- List View -->\r
  <div *ngIf="viewType === 'list' && !loading && !error && roles.length > 0" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">\r
    <!-- Table Header -->\r
    <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">\r
      <div class="grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 uppercase tracking-wider">\r
        <div class="col-span-3">Role</div>\r
        <div class="col-span-3">Description</div>\r
        <div class="col-span-2">Permissions</div>\r
        <div class="col-span-1">Users</div>\r
        <div class="col-span-2">Created</div>\r
        <div class="col-span-1">Actions</div>\r
      </div>\r
    </div>\r
\r
    <!-- Table Body -->\r
    <div class="divide-y divide-gray-200">\r
      <div *ngFor="let role of filteredRoles"\r
           class="px-6 py-4 hover:bg-gray-50 transition-colors">\r
        <div class="grid grid-cols-12 gap-4 items-center">\r
          <div class="col-span-3">\r
            <div class="text-sm font-medium text-gray-900">{{ role.name }}</div>\r
          </div>\r
          <div class="col-span-3">\r
            <div class="text-sm text-gray-900">{{ role.description || 'No description' }}</div>\r
          </div>\r
          <div class="col-span-2">\r
            <div class="text-sm text-gray-900">{{ getPermissionSummary(role) }}</div>\r
          </div>\r
          <div class="col-span-1">\r
            <div class="text-sm text-gray-900">{{ role.users_count || 0 }}</div>\r
          </div>\r
          <div class="col-span-2">\r
            <div class="text-sm text-gray-900">{{ role.created_at | date:'short' }}</div>\r
          </div>\r
          <div class="col-span-1 text-right">\r
            <button\r
              (click)="editRole(role)"\r
              class="text-blue-600 hover:text-blue-900 mr-3">\r
              Edit\r
            </button>\r
            <button\r
              (click)="deleteRole(role)"\r
              class="text-red-600 hover:text-red-900">\r
              Delete\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div> `, styles: ["/* src/app/roles/role-list/role-list.component.scss */\n.table-container {\n  overflow-x: auto;\n}\n.role-table {\n  min-width: 100%;\n}\n.role-table th {\n  position: sticky;\n  top: 0;\n  background-color: #f9fafb;\n  z-index: 10;\n}\n/*# sourceMappingURL=role-list.component.css.map */\n"] }]
  }], () => [{ type: RoleService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleListComponent, { className: "RoleListComponent", filePath: "src/app/roles/role-list/role-list.component.ts", lineNumber: 11 });
})();

// src/app/roles/role-form/role-form.component.ts
function RoleFormComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementEnd();
  }
}
function RoleFormComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 11);
    \u0275\u0275element(3, "path", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RoleFormComponent_form_8_div_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Role name is required");
    \u0275\u0275elementEnd();
  }
}
function RoleFormComponent_form_8_div_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Role name cannot exceed 255 characters");
    \u0275\u0275elementEnd();
  }
}
function RoleFormComponent_form_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, RoleFormComponent_form_8_div_9_span_1_Template, 2, 0, "span", 36)(2, RoleFormComponent_form_8_div_9_span_2_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r0.roleForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r0.roleForm.get("name")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["maxlength"]);
  }
}
function RoleFormComponent_form_8_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39)(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 41)(5, "button", 42);
    \u0275\u0275listener("click", function RoleFormComponent_form_8_tr_39_Template_button_click_5_listener() {
      const module_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleAllPermissions(module_r4.key, true));
    });
    \u0275\u0275text(6, " All ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td", 41);
    \u0275\u0275element(8, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275element(10, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 41);
    \u0275\u0275element(12, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 41);
    \u0275\u0275element(14, "input", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 41);
    \u0275\u0275element(16, "input", 47);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("formGroupName", module_r4.key);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.getModuleDisplayName(module_r4.key));
  }
}
function RoleFormComponent_form_8_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 49);
    \u0275\u0275element(2, "circle", 50)(3, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Updating..." : "Creating...", " ");
  }
}
function RoleFormComponent_form_8_span_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEditMode ? "Update Role" : "Create Role", " ");
  }
}
function RoleFormComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 14);
    \u0275\u0275listener("ngSubmit", function RoleFormComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "h2", 16);
    \u0275\u0275text(3, "Basic Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17)(5, "div")(6, "label", 18);
    \u0275\u0275text(7, " Role Name * ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 19);
    \u0275\u0275template(9, RoleFormComponent_form_8_div_9_Template, 3, 2, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 21);
    \u0275\u0275text(12, " Description ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 15)(15, "h2", 16);
    \u0275\u0275text(16, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 23);
    \u0275\u0275text(18, "Select the permissions this role should have for each module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24)(20, "table", 25)(21, "thead", 26)(22, "tr")(23, "th", 27);
    \u0275\u0275text(24, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 28)(26, "button", 29);
    \u0275\u0275listener("click", function RoleFormComponent_form_8_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleAllPermissions("all", true));
    });
    \u0275\u0275text(27, " Select All ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "th", 28);
    \u0275\u0275text(29, "View");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 28);
    \u0275\u0275text(31, "Create");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 28);
    \u0275\u0275text(33, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "th", 28);
    \u0275\u0275text(35, "Delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 28);
    \u0275\u0275text(37, "Export");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "tbody", 30);
    \u0275\u0275template(39, RoleFormComponent_form_8_tr_39_Template, 17, 2, "tr", 31);
    \u0275\u0275pipe(40, "keyvalue");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 32)(42, "button", 33);
    \u0275\u0275listener("click", function RoleFormComponent_form_8_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancel());
    });
    \u0275\u0275text(43, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "button", 34);
    \u0275\u0275template(45, RoleFormComponent_form_8_span_45_Template, 5, 1, "span", 35)(46, RoleFormComponent_form_8_span_46_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.roleForm);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r0.roleForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r0.roleForm.get("name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance(30);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(40, 6, ctx_r0.availablePermissions));
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r0.saving || ctx_r0.roleForm.invalid);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.saving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.saving);
  }
}
var RoleFormComponent = class _RoleFormComponent {
  fb;
  roleService;
  route;
  router;
  roleForm;
  availablePermissions = {};
  loading = false;
  saving = false;
  error = "";
  isEditMode = false;
  roleId;
  constructor(fb, roleService, route, router) {
    this.fb = fb;
    this.roleService = roleService;
    this.route = route;
    this.router = router;
    this.roleForm = this.fb.group({
      name: ["", [Validators.required, Validators.maxLength(255)]],
      description: [""],
      permissions: this.fb.group({})
    });
  }
  ngOnInit() {
    this.loadAvailablePermissions();
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.isEditMode = true;
      this.roleId = +id;
      this.loadRole(this.roleId);
    }
  }
  loadAvailablePermissions() {
    this.roleService.getAvailablePermissions().subscribe({
      next: (response) => {
        this.availablePermissions = response.data;
        this.initializePermissionForm();
      },
      error: (error) => {
        this.error = "Failed to load available permissions";
        console.error("Error loading permissions:", error);
      }
    });
  }
  loadRole(id) {
    this.loading = true;
    this.roleService.getRole(id).subscribe({
      next: (response) => {
        const role = response.data;
        this.roleForm.patchValue({
          name: role.name,
          description: role.description
        });
        if (role.permissions) {
          this.roleForm.patchValue({
            permissions: role.permissions.permissions
          });
        }
        this.loading = false;
      },
      error: (error) => {
        this.error = "Failed to load role";
        this.loading = false;
        console.error("Error loading role:", error);
      }
    });
  }
  initializePermissionForm() {
    const permissionGroup = this.roleForm.get("permissions");
    Object.keys(this.availablePermissions).forEach((module) => {
      const moduleGroup = this.fb.group({
        can_view: [false],
        can_create: [false],
        can_edit: [false],
        can_delete: [false],
        can_export: [false]
      });
      permissionGroup.addControl(module, moduleGroup);
    });
  }
  onSubmit() {
    if (this.roleForm.valid) {
      this.saving = true;
      this.error = "";
      const formData = this.roleForm.value;
      if (this.isEditMode && this.roleId) {
        this.roleService.updateRole(this.roleId, formData).subscribe({
          next: () => {
            this.router.navigate(["/roles"]);
          },
          error: (error) => {
            this.error = "Failed to update role";
            this.saving = false;
            console.error("Error updating role:", error);
          }
        });
      } else {
        this.roleService.createRole(formData).subscribe({
          next: () => {
            this.router.navigate(["/roles"]);
          },
          error: (error) => {
            this.error = "Failed to create role";
            this.saving = false;
            console.error("Error creating role:", error);
          }
        });
      }
    }
  }
  cancel() {
    this.router.navigate(["/roles"]);
  }
  getModuleDisplayName(module) {
    return module.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  toggleAllPermissions(module, value) {
    const moduleGroup = this.roleForm.get(`permissions.${module}`);
    Object.keys(moduleGroup.controls).forEach((control) => {
      moduleGroup.get(control)?.setValue(value);
    });
  }
  static \u0275fac = function RoleFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RoleFormComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RoleService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleFormComponent, selectors: [["app-role-form"]], standalone: false, decls: 9, vars: 5, consts: [[1, "p-6"], [1, "mb-6"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-gray-600"], ["class", "flex justify-center items-center py-12", 4, "ngIf"], ["class", "bg-red-50 border border-red-200 rounded-lg p-4 mb-6", 4, "ngIf"], ["class", "space-y-6", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "py-12"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-blue-600"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-4", "mb-6"], [1, "flex"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-400", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-red-800"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], [1, "bg-white", "rounded-lg", "shadow", "p-6"], [1, "text-lg", "font-medium", "text-gray-900", "mb-4"], [1, "grid", "grid-cols-1", "gap-6"], ["for", "name", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Enter role name", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], ["class", "text-red-600 text-sm mt-1", 4, "ngIf"], ["for", "description", 1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["id", "description", "formControlName", "description", "rows", "3", "placeholder", "Enter role description (optional)", 1, "w-full", "px-3", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent"], [1, "text-gray-600", "mb-6"], [1, "overflow-x-auto"], [1, "min-w-full", "divide-y", "divide-gray-200"], [1, "bg-gray-50"], [1, "px-4", "py-3", "text-left", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], [1, "px-4", "py-3", "text-center", "text-xs", "font-medium", "text-gray-500", "uppercase", "tracking-wider"], ["type", "button", 1, "text-blue-600", "hover:text-blue-800", 3, "click"], ["formGroupName", "permissions", 1, "bg-white", "divide-y", "divide-gray-200"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "space-x-3"], ["type", "button", 1, "px-4", "py-2", "border", "border-gray-300", "rounded-lg", "text-gray-700", "hover:bg-gray-50", "transition-colors", 3, "click"], ["type", "submit", 1, "bg-blue-600", "text-white", "px-6", "py-2", "rounded-lg", "hover:bg-blue-700", "transition-colors", "disabled:opacity-50", 3, "disabled"], ["class", "inline-flex items-center", 4, "ngIf"], [4, "ngIf"], [1, "text-red-600", "text-sm", "mt-1"], [3, "formGroupName"], [1, "px-4", "py-4", "whitespace-nowrap"], [1, "text-sm", "font-medium", "text-gray-900"], [1, "px-4", "py-4", "whitespace-nowrap", "text-center"], ["type", "button", 1, "text-blue-600", "hover:text-blue-800", "text-sm", 3, "click"], ["type", "checkbox", "formControlName", "can_view", 1, "w-4", "h-4", "text-blue-600", "border-gray-300", "rounded", "focus:ring-blue-500"], ["type", "checkbox", "formControlName", "can_create", 1, "w-4", "h-4", "text-blue-600", "border-gray-300", "rounded", "focus:ring-blue-500"], ["type", "checkbox", "formControlName", "can_edit", 1, "w-4", "h-4", "text-blue-600", "border-gray-300", "rounded", "focus:ring-blue-500"], ["type", "checkbox", "formControlName", "can_delete", 1, "w-4", "h-4", "text-blue-600", "border-gray-300", "rounded", "focus:ring-blue-500"], ["type", "checkbox", "formControlName", "can_export", 1, "w-4", "h-4", "text-blue-600", "border-gray-300", "rounded", "focus:ring-blue-500"], [1, "inline-flex", "items-center"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-2", "h-4", "w-4", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function RoleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, RoleFormComponent_div_6_Template, 2, 0, "div", 4)(7, RoleFormComponent_div_7_Template, 6, 1, "div", 5)(8, RoleFormComponent_form_8_Template, 47, 8, "form", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Edit Role" : "Create New Role", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.isEditMode ? "Update role details and permissions" : "Define a new role and assign permissions", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, FormGroupName, KeyValuePipe], styles: ["\n\n.permissions-table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.permissions-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background-color: #f9fafb;\n  z-index: 10;\n}\n.checkbox-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n}\n.form-section[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.form-input[_ngcontent-%COMP%] {\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n/*# sourceMappingURL=role-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RoleFormComponent, [{
    type: Component,
    args: [{ selector: "app-role-form", standalone: false, template: `<div class="p-6">\r
  <!-- Header -->\r
  <div class="mb-6">\r
    <h1 class="text-2xl font-bold text-gray-900">\r
      {{ isEditMode ? 'Edit Role' : 'Create New Role' }}\r
    </h1>\r
    <p class="text-gray-600">\r
      {{ isEditMode ? 'Update role details and permissions' : 'Define a new role and assign permissions' }}\r
    </p>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="flex justify-center items-center py-12">\r
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="error" class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">\r
    <div class="flex">\r
      <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>\r
      </svg>\r
      <span class="text-red-800">{{ error }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Form -->\r
  <form *ngIf="!loading" [formGroup]="roleForm" (ngSubmit)="onSubmit()" class="space-y-6">\r
    <!-- Basic Information -->\r
    <div class="bg-white rounded-lg shadow p-6">\r
      <h2 class="text-lg font-medium text-gray-900 mb-4">Basic Information</h2>\r
      \r
      <div class="grid grid-cols-1 gap-6">\r
        <!-- Role Name -->\r
        <div>\r
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">\r
            Role Name *\r
          </label>\r
          <input\r
            id="name"\r
            type="text"\r
            formControlName="name"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            placeholder="Enter role name">\r
          <div *ngIf="roleForm.get('name')?.invalid && roleForm.get('name')?.touched" class="text-red-600 text-sm mt-1">\r
            <span *ngIf="roleForm.get('name')?.errors?.['required']">Role name is required</span>\r
            <span *ngIf="roleForm.get('name')?.errors?.['maxlength']">Role name cannot exceed 255 characters</span>\r
          </div>\r
        </div>\r
\r
        <!-- Description -->\r
        <div>\r
          <label for="description" class="block text-sm font-medium text-gray-700 mb-2">\r
            Description\r
          </label>\r
          <textarea\r
            id="description"\r
            formControlName="description"\r
            rows="3"\r
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"\r
            placeholder="Enter role description (optional)"></textarea>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Permissions Matrix -->\r
    <div class="bg-white rounded-lg shadow p-6">\r
      <h2 class="text-lg font-medium text-gray-900 mb-4">Permissions</h2>\r
      <p class="text-gray-600 mb-6">Select the permissions this role should have for each module</p>\r
\r
      <div class="overflow-x-auto">\r
        <table class="min-w-full divide-y divide-gray-200">\r
          <thead class="bg-gray-50">\r
            <tr>\r
              <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Module</th>\r
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">\r
                <button\r
                  type="button"\r
                  (click)="toggleAllPermissions('all', true)"\r
                  class="text-blue-600 hover:text-blue-800">\r
                  Select All\r
                </button>\r
              </th>\r
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">View</th>\r
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Create</th>\r
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>\r
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>\r
              <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Export</th>\r
            </tr>\r
          </thead>\r
          <tbody class="bg-white divide-y divide-gray-200" formGroupName="permissions">\r
            <tr *ngFor="let module of availablePermissions | keyvalue" [formGroupName]="module.key">\r
              <td class="px-4 py-4 whitespace-nowrap">\r
                <div class="text-sm font-medium text-gray-900">{{ getModuleDisplayName(module.key) }}</div>\r
              </td>\r
              <td class="px-4 py-4 whitespace-nowrap text-center">\r
                <button\r
                  type="button"\r
                  (click)="toggleAllPermissions(module.key, true)"\r
                  class="text-blue-600 hover:text-blue-800 text-sm">\r
                  All\r
                </button>\r
              </td>\r
              <td class="px-4 py-4 whitespace-nowrap text-center">\r
                <input\r
                  type="checkbox"\r
                  formControlName="can_view"\r
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">\r
              </td>\r
              <td class="px-4 py-4 whitespace-nowrap text-center">\r
                <input\r
                  type="checkbox"\r
                  formControlName="can_create"\r
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">\r
              </td>\r
              <td class="px-4 py-4 whitespace-nowrap text-center">\r
                <input\r
                  type="checkbox"\r
                  formControlName="can_edit"\r
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">\r
              </td>\r
              <td class="px-4 py-4 whitespace-nowrap text-center">\r
                <input\r
                  type="checkbox"\r
                  formControlName="can_delete"\r
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">\r
              </td>\r
              <td class="px-4 py-4 whitespace-nowrap text-center">\r
                <input\r
                  type="checkbox"\r
                  formControlName="can_export"\r
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500">\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </div>\r
    </div>\r
\r
    <!-- Submit Buttons -->\r
    <div class="flex justify-end space-x-3">\r
      <button\r
        type="button"\r
        (click)="cancel()"\r
        class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">\r
        Cancel\r
      </button>\r
      <button\r
        type="submit"\r
        [disabled]="saving || roleForm.invalid"\r
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50">\r
        <span *ngIf="saving" class="inline-flex items-center">\r
          <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">\r
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r
          </svg>\r
          {{ isEditMode ? 'Updating...' : 'Creating...' }}\r
        </span>\r
        <span *ngIf="!saving">\r
          {{ isEditMode ? 'Update Role' : 'Create Role' }}\r
        </span>\r
      </button>\r
    </div>\r
  </form>\r
</div> `, styles: ["/* src/app/roles/role-form/role-form.component.scss */\n.permissions-table {\n  border-collapse: separate;\n  border-spacing: 0;\n}\n.permissions-table th {\n  position: sticky;\n  top: 0;\n  background-color: #f9fafb;\n  z-index: 10;\n}\n.checkbox-cell {\n  text-align: center;\n  vertical-align: middle;\n}\n.form-section {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n}\n.form-input {\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n}\n/*# sourceMappingURL=role-form.component.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: RoleService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleFormComponent, { className: "RoleFormComponent", filePath: "src/app/roles/role-form/role-form.component.ts", lineNumber: 12 });
})();

// src/app/roles/roles-routing.module.ts
var routes = [
  {
    path: "",
    component: RoleListComponent
  },
  {
    path: "create",
    component: RoleFormComponent
  },
  {
    path: "edit/:id",
    component: RoleFormComponent
  }
];
var RolesRoutingModule = class _RolesRoutingModule {
  static \u0275fac = function RolesRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RolesRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/roles/roles.module.ts
var RolesModule = class _RolesModule {
  static \u0275fac = function RolesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RolesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _RolesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    RolesRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesModule, [{
    type: NgModule,
    args: [{
      declarations: [
        RoleListComponent,
        RoleFormComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        RolesRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  RolesModule
};
//# sourceMappingURL=chunk-XI6SWFH4.js.map
