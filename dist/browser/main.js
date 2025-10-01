import {
  CurrencyService,
  SettingsService
} from "./chunk-FTDOMACV.js";
import {
  ImportProgressService
} from "./chunk-3DV6Y6FF.js";
import "./chunk-DV6PQFY7.js";
import {
  AuthService
} from "./chunk-NM3PRJXP.js";
import {
  AUTO_STYLE,
  AnimationGroupPlayer,
  AnimationMetadataType,
  NoopAnimationPlayer,
  sequence,
  style,
  ɵPRE_STYLE
} from "./chunk-LZKWF3AL.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FSOYXA4J.js";
import {
  BrowserModule,
  DomRendererFactory2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-E2GGJA5S.js";
import {
  environment
} from "./chunk-B4WPIQPD.js";
import {
  CommonModule,
  DOCUMENT,
  HTTP_INTERCEPTORS,
  HttpClient,
  NgClass,
  NgForOf,
  NgIf,
  provideHttpClient,
  withInterceptorsFromDi
} from "./chunk-MMJF4Y5E.js";
import {
  ANIMATION_MODULE_TYPE,
  Component,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  RendererFactory2,
  ReplaySubject,
  RuntimeError,
  Subject,
  catchError,
  computed,
  inject,
  map,
  of,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YUR5IGOK.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-TXDUYLVM.js";

// node_modules/@angular/animations/fesm2022/util-D9FfmVnv.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map2, key, defaultValue) {
  let value = map2.get(key);
  if (!value) {
    map2.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map2, key, value) {
  let currentValues = map2.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map2.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

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

// src/app/core/services/feature-flags.service.ts
var FeatureFlagsService = class _FeatureFlagsService {
  http;
  me$ = new ReplaySubject(1);
  apiUrl = `${environment.apiUrl}/me/features`;
  constructor(http) {
    this.http = http;
  }
  fetchMe() {
    return this.http.get(this.apiUrl).pipe(map((res) => res.data), tap((flags) => this.me$.next(flags)));
  }
  getMe$() {
    return this.me$.asObservable();
  }
  static \u0275fac = function FeatureFlagsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeatureFlagsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FeatureFlagsService, factory: _FeatureFlagsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeatureFlagsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  router;
  authService;
  featureFlags;
  currency;
  constructor(router, authService, featureFlags, currency) {
    this.router = router;
    this.authService = authService;
    this.featureFlags = featureFlags;
    this.currency = currency;
  }
  canActivate() {
    const isAuthenticated = this.authService.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(["//login"]);
      return false;
    }
    this.featureFlags.fetchMe().subscribe({});
    this.currency.refreshFromServer().subscribe({});
    return true;
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService), \u0275\u0275inject(FeatureFlagsService), \u0275\u0275inject(CurrencyService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Router }, { type: AuthService }, { type: FeatureFlagsService }, { type: CurrencyService, decorators: [{
    type: Inject,
    args: [CurrencyService]
  }] }], null);
})();

// src/app/shared/components/layout/layout.component.ts
function LayoutComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 56);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 57);
    \u0275\u0275element(3, "path", 58)(4, "path", 59)(5, "path", 60)(6, "path", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "Assets");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 63);
    \u0275\u0275element(3, "path", 64)(4, "circle", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6, "Locations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8, "New");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 66);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 67);
    \u0275\u0275element(3, "path", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "Roles");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 69);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 67);
    \u0275\u0275element(3, "path", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 8);
    \u0275\u0275text(5, "Work Orders");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 71);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 72);
    \u0275\u0275element(3, "path", 73)(4, "circle", 74)(5, "path", 75)(6, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10, "New");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 78);
    \u0275\u0275element(3, "path", 79)(4, "path", 80)(5, "rect", 81)(6, "path", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "Maintenance");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 83);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 84);
    \u0275\u0275element(3, "path", 85)(4, "path", 86)(5, "path", 87)(6, "rect", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8, "Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 19);
    \u0275\u0275text(10, "New");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 89);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 90);
    \u0275\u0275element(3, "path", 91)(4, "rect", 92)(5, "path", 93)(6, "path", 94)(7, "path", 95)(8, "path", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "span", 8);
    \u0275\u0275text(10, "AI Features");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 19);
    \u0275\u0275text(12, "New");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_li_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 97);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 98);
    \u0275\u0275element(3, "path", 99)(4, "path", 100)(5, "path", 101)(6, "path", 102)(7, "path", 103);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "Reports");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("!block", !ctx_r0.sidebarOpen);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngClass", !ctx_r0.sidebarOpen ? "hidden" : "");
  }
}
function LayoutComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106)(3, "div", 107);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 108);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 109);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 110);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 111)(13, "button", 112)(14, "div", 113);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(15, "svg", 114);
    \u0275\u0275element(16, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(17, "div")(18, "div", 50);
    \u0275\u0275text(19, "Manage Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 115);
    \u0275\u0275text(21, "Personal info, privacy, and more");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 116)(23, "div", 117);
    \u0275\u0275text(24, "Development Tools ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 118)(26, "div", 119);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 120);
    \u0275\u0275element(28, "path", 121);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(29, "div")(30, "div", 50);
    \u0275\u0275text(31, "Load Demo Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 115);
    \u0275\u0275text(33, "Add sample data for testing");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 122)(35, "div", 123);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(36, "svg", 124);
    \u0275\u0275element(37, "path", 125);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(38, "div")(39, "div", 50);
    \u0275\u0275text(40, "Clear Demo Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 115);
    \u0275\u0275text(42, "Remove all sample data");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(43, "div", 116)(44, "button", 126);
    \u0275\u0275listener("click", function LayoutComponent_div_86_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.signOut());
    });
    \u0275\u0275elementStart(45, "div", 123);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 124);
    \u0275\u0275element(47, "path", 127);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "div")(49, "div", 50);
    \u0275\u0275text(50, "Sign Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 115);
    \u0275\u0275text(52, "Sign out of your account");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.getUserInitials(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.first_name, " ", ctx_r0.currentUser == null ? null : ctx_r0.currentUser.last_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentUser == null ? null : ctx_r0.currentUser.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentUser == null ? null : ctx_r0.currentUser.company == null ? null : ctx_r0.currentUser.company.name);
  }
}
var LayoutComponent = class _LayoutComponent {
  router;
  authService;
  settings;
  currentUser = null;
  showUserDropdown = false;
  sidebarOpen = true;
  modules = signal({});
  constructor(router, authService, settings) {
    this.router = router;
    this.authService = authService;
    this.settings = settings;
    this.currentUser = this.authService.getCurrentUser();
    this.settings.listModules().subscribe((res) => {
      const mapEnabled = {};
      const list = res?.data?.modules ?? [];
      list.forEach((m) => mapEnabled[m.key] = !!m.is_enabled);
      this.modules.set(mapEnabled);
    });
    this.settings.getModulesEnabled$().subscribe((map2) => {
      if (Object.keys(map2).length) {
        this.modules.set(map2);
      }
    });
  }
  getUserInitials() {
    if (!this.currentUser)
      return "U";
    const firstInitial = this.currentUser.first_name?.charAt(0) || "";
    const lastInitial = this.currentUser.last_name?.charAt(0) || "";
    return (firstInitial + lastInitial).toUpperCase() || "U";
  }
  toggleUserDropdown() {
    this.showUserDropdown = !this.showUserDropdown;
  }
  signOut() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(["/login"]);
      },
      error: () => {
        this.router.navigate(["/login"]);
      }
    });
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  onDocumentClick(event) {
    const target = event.target;
    if (!target.closest(".relative")) {
      this.showUserDropdown = false;
    }
  }
  static \u0275fac = function LayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LayoutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(SettingsService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function LayoutComponent_click_HostBindingHandler($event) {
        return ctx.onDocumentClick($event);
      }, false, \u0275\u0275resolveDocument);
    }
  }, decls: 89, vars: 43, consts: [[1, "min-h-screen", "bg-gray-50", "flex"], [1, "bg-white", "border-r", "border-gray-200", "min-h-screen", "transition-all", "duration-300", "ease-in-out"], [1, "flex", "items-center", "space-x-2", "p-6"], ["alt", "AssetGo Logo", 1, "h-10", 3, "src"], [1, "text-2xl", "text-gray-900", 3, "ngClass"], [1, "font-bold"], [1, "p-4"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider", "mb-4", 3, "ngClass"], [3, "ngClass"], ["routerLink", "/dashboard", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-chart-column", "mr-3", "h-5", "w-5", "text-blue-600"], ["d", "M3 3v16a2 2 0 0 0 2 2h16"], ["d", "M18 17V9"], ["d", "M13 17V5"], ["d", "M8 17v-3"], [4, "ngIf"], ["href", "javascript:void(0)", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-400", "cursor-not-allowed", "opacity-60"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-thermometer", "mr-3", "h-5", "w-5", "text-red-600"], ["d", "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"], [1, "ml-auto", "bg-blue-100", "text-blue-800", "text-xs", "px-2", "py-1", "rounded-full", 3, "ngClass"], ["routerLink", "/settings", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "cursor-pointer", "hover:bg-gray-100"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-settings", "mr-3", "h-5", "w-5", "text-slate-600"], ["d", "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"], ["cx", "12", "cy", "12", "r", "3"], [1, "flex", "flex-col", "flex-1"], [1, "bg-white", "border-b", "border-gray-200"], [1, "flex", "items-center", "justify-between", "px-6", "py-4"], [1, "flex", "items-center", "space-x-4"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "cursor-pointer", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "size-5", "text-gray-600"], ["width", "18", "height", "18", "x", "3", "y", "3", "rx", "2"], ["d", "M9 3v18"], [1, "flex-1", "max-w-lg", "mx-8"], [1, "relative"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "transform", "-translate-y-1/2", "w-4", "h-4", "text-gray-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], ["type", "text", "placeholder", "Search assets, work orders", 1, "w-full", "pl-10", "pr-4", "py-2", "border", "border-gray-300", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "placeholder-gray-400"], [1, "absolute", "right-3", "top-1/2", "transform", "-translate-y-1/2", "text-xs", "text-gray-400"], [1, "flex", "items-center", "space-x-2", "px-3", "py-2", "text-sm", "font-medium", "text-gray-700", "hover:bg-gray-100", "rounded-lg", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6v6m0 0v6m0-6h6m-6 0H6"], [1, "p-2", "rounded-lg", "hover:bg-gray-100", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"], [1, "absolute", "-top-1", "-right-1", "bg-red-500", "text-white", "text-xs", "rounded-full", "w-5", "h-5", "flex", "items-center", "justify-center"], [1, "flex", "items-center", "space-x-3", "p-2", "rounded-lg", "hover:bg-gray-100", "transition-colors", "cursor-pointer", 3, "click"], [1, "w-8", "h-8", "bg-blue-600", "rounded-full", "flex", "items-center", "justify-center", "text-white", "font-medium"], [1, "text-sm"], [1, "font-medium", "text-gray-900"], [1, "text-gray-500"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-gray-400", "transition-transform"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 9l-7 7-7-7"], ["class", "absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50", 4, "ngIf"], [1, "flex-1"], ["routerLink", "/assets/list", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-package", "mr-3", "h-5", "w-5", "text-green-600"], ["d", "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"], ["d", "M12 22V12"], ["d", "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"], ["d", "m7.5 4.27 9 5.15"], ["routerLink", "/locations", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-map-pin", "mr-3", "h-5", "w-5", "text-purple-600"], ["d", "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"], ["cx", "12", "cy", "10", "r", "3"], ["routerLink", "/roles", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"], ["routerLink", "/work-orders", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], ["routerLink", "/teams", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-users", "mr-3", "h-5", "w-5", "text-teal-600"], ["d", "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M22 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/maintenance", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-calendar", "mr-3", "h-5", "w-5", "text-cyan-600"], ["d", "M8 2v4"], ["d", "M16 2v4"], ["width", "18", "height", "18", "x", "3", "y", "4", "rx", "2"], ["d", "M3 10h18"], ["routerLink", "/inventory", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-warehouse", "mr-3", "h-5", "w-5", "text-indigo-600"], ["d", "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"], ["d", "M6 18h12"], ["d", "M6 14h12"], ["width", "12", "height", "12", "x", "6", "y", "10"], ["routerLink", "/ai", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-bot", "mr-3", "h-5", "w-5", "text-pink-600"], ["d", "M12 8V4H8"], ["width", "16", "height", "12", "x", "4", "y", "8", "rx", "2"], ["d", "M2 14h2"], ["d", "M20 14h2"], ["d", "M15 13v2"], ["d", "M9 13v2"], ["routerLink", "/reports", "routerLinkActive", "bg-blue-50 text-blue-700", 1, "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "text-gray-700", "hover:bg-gray-100", "cursor-pointer"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-file-text", "mr-3", "h-5", "w-5", "text-orange-600"], ["d", "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"], ["d", "M14 2v4a2 2 0 0 0 2 2h4"], ["d", "M10 9H8"], ["d", "M16 13H8"], ["d", "M16 17H8"], [1, "absolute", "right-0", "mt-2", "w-80", "bg-white", "rounded-xl", "shadow-lg", "border", "border-gray-200", "py-2", "z-50"], [1, "px-4", "py-3", "border-b", "border-gray-100"], [1, "flex", "items-center", "space-x-3"], [1, "w-12", "h-12", "bg-blue-600", "rounded-full", "flex", "items-center", "justify-center", "text-white", "font-medium", "text-lg"], [1, "font-semibold", "text-gray-900"], [1, "text-sm", "text-gray-500"], [1, "text-xs", "text-gray-400", "mt-1"], [1, "px-4", "py-2"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "hover:bg-blue-50", "text-left", "transition-colors", "cursor-pointer"], [1, "w-8", "h-8", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], [1, "text-xs", "text-gray-500"], [1, "px-4", "py-2", "border-t", "border-gray-100"], [1, "text-xs", "font-semibold", "text-gray-500", "uppercase", "tracking-wider", "mb-2", "px-3"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "hover:bg-green-50", "text-left", "transition-colors", "cursor-pointer", "mb-1"], [1, "w-8", "h-8", "bg-green-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "hover:bg-red-50", "text-left", "transition-colors", "cursor-pointer"], [1, "w-8", "h-8", "bg-red-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"], [1, "w-full", "flex", "items-center", "space-x-3", "px-3", "py-2", "rounded-lg", "hover:bg-red-50", "text-left", "transition-colors", "cursor-pointer", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"]], template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementStart(4, "h3", 4)(5, "span", 5);
      \u0275\u0275text(6, "Asset");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, "Go ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nav", 6)(9, "div", 7);
      \u0275\u0275text(10, "Navigation ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "ul", 8)(12, "li")(13, "a", 9);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 10);
      \u0275\u0275element(15, "path", 11)(16, "path", 12)(17, "path", 13)(18, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(19, "span", 8);
      \u0275\u0275text(20, "Dashboard");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(21, LayoutComponent_li_21_Template, 9, 3, "li", 15)(22, LayoutComponent_li_22_Template, 9, 4, "li", 15)(23, LayoutComponent_li_23_Template, 6, 3, "li", 15)(24, LayoutComponent_li_24_Template, 6, 3, "li", 15)(25, LayoutComponent_li_25_Template, 11, 4, "li", 15)(26, LayoutComponent_li_26_Template, 9, 3, "li", 15)(27, LayoutComponent_li_27_Template, 11, 4, "li", 15);
      \u0275\u0275elementStart(28, "li")(29, "a", 16);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(30, "svg", 17);
      \u0275\u0275element(31, "path", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(32, "span", 8);
      \u0275\u0275text(33, "Sensors");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 19);
      \u0275\u0275text(35, "New");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, LayoutComponent_li_36_Template, 13, 4, "li", 15)(37, LayoutComponent_li_37_Template, 10, 3, "li", 15);
      \u0275\u0275elementStart(38, "li")(39, "a", 20);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(40, "svg", 21);
      \u0275\u0275element(41, "path", 22)(42, "circle", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(43, "span", 8);
      \u0275\u0275text(44, "Settings");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(45, "div", 24)(46, "header", 25)(47, "div", 26)(48, "div", 27)(49, "button", 28);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_49_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(50, "svg", 29);
      \u0275\u0275element(51, "rect", 30)(52, "path", 31);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(53, "div", 32)(54, "div", 33);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(55, "svg", 34);
      \u0275\u0275element(56, "path", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275element(57, "input", 36);
      \u0275\u0275elementStart(58, "span", 37);
      \u0275\u0275text(59, "\u2318 K");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div", 27)(61, "button", 38);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(62, "svg", 39);
      \u0275\u0275element(63, "path", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Quick Add");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "button", 41);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(67, "svg", 42);
      \u0275\u0275element(68, "path", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(69, "div", 33)(70, "button", 41);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(71, "svg", 44);
      \u0275\u0275element(72, "path", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(73, "span", 46);
      \u0275\u0275text(74, "3");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 33)(76, "button", 47);
      \u0275\u0275listener("click", function LayoutComponent_Template_button_click_76_listener() {
        return ctx.toggleUserDropdown();
      });
      \u0275\u0275elementStart(77, "div", 48);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 49)(80, "div", 50);
      \u0275\u0275text(81);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 51);
      \u0275\u0275text(83);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 52);
      \u0275\u0275element(85, "path", 53);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(86, LayoutComponent_div_86_Template, 53, 5, "div", 54);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(87, "main", 55);
      \u0275\u0275element(88, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_13_0;
      let tmp_14_0;
      let tmp_16_0;
      let tmp_23_0;
      \u0275\u0275advance();
      \u0275\u0275classProp("w-64", ctx.sidebarOpen)("w-16", !ctx.sidebarOpen);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("w-0", !ctx.sidebarOpen)("w-auto", ctx.sidebarOpen);
      \u0275\u0275property("src", "images/logo-short.png", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("p-4", ctx.sidebarOpen)("p-2", !ctx.sidebarOpen);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "space-y-2" : "space-y-3");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("!block", !ctx.sidebarOpen);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.modules()["assets"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_13_0 = ctx.modules()["locations"]) !== null && tmp_13_0 !== void 0 ? tmp_13_0 : true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_14_0 = ctx.modules()["roles"]) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modules()["work_orders"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_16_0 = ctx.modules()["teams"]) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : true);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modules()["maintenance"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.modules()["inventory"]);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("!block", !ctx.sidebarOpen);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.modules()["ai_features"]);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_23_0 = ctx.modules()["reports"]) !== null && tmp_23_0 !== void 0 ? tmp_23_0 : true);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("!block", !ctx.sidebarOpen);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngClass", !ctx.sidebarOpen ? "hidden" : "");
      \u0275\u0275advance(35);
      \u0275\u0275textInterpolate1(" ", ctx.getUserInitials(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.currentUser == null ? null : ctx.currentUser.first_name, " ", ctx.currentUser == null ? null : ctx.currentUser.last_name, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.currentUser == null ? null : ctx.currentUser.user_type, " \u2022 ", ctx.currentUser == null ? null : ctx.currentUser.company == null ? null : ctx.currentUser.company.name, "");
      \u0275\u0275advance();
      \u0275\u0275classProp("rotate-180", ctx.showUserDropdown);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showUserDropdown);
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterOutlet, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.layout-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 40;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 16rem;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  min-height: calc(100vh - 73px);\n  position: sticky;\n  top: 73px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  transition: all 0.2s ease-in-out;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background-color: #f3f4f6;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n}\n.user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  margin-top: 0.5rem;\n  width: 20rem;\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  z-index: 50;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: calc(100vh - 73px);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [CommonModule, RouterOutlet, RouterModule], template: `<div class="min-h-screen bg-gray-50 flex">\r
\r
  <!-- Sidebar -->\r
  <aside class="bg-white border-r border-gray-200 min-h-screen transition-all duration-300 ease-in-out"\r
         [class.w-64]="sidebarOpen" [class.w-16]="!sidebarOpen">\r
    <!-- Logo -->\r
    <div class="flex items-center space-x-2 p-6">\r
      <img [src]="'images/logo-short.png'" alt="AssetGo Logo" class="h-10" [class.w-0]="!sidebarOpen"\r
           [class.w-auto]="sidebarOpen">\r
\r
      <h3 class="text-2xl text-gray-900" [ngClass]="!sidebarOpen ? 'hidden' : ''"><span class="font-bold">Asset</span>Go\r
      </h3>\r
    </div>\r
\r
    <nav class="p-4" [class.p-4]="sidebarOpen" [class.p-2]="!sidebarOpen">\r
      <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4"\r
           [ngClass]="!sidebarOpen ? 'hidden' : ''">Navigation\r
      </div>\r
\r
      <ul [ngClass]="!sidebarOpen ? 'space-y-2' : 'space-y-3'">\r
        <li>\r
          <a routerLink="/dashboard" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-chart-column mr-3 h-5 w-5 text-blue-600">\r
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>\r
              <path d="M18 17V9"></path>\r
              <path d="M13 17V5"></path>\r
              <path d="M8 17v-3"></path>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Dashboard</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['assets']">\r
          <a routerLink="/assets/list" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-package mr-3 h-5 w-5 text-green-600">\r
              <path\r
                d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>\r
              <path d="M12 22V12"></path>\r
              <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path>\r
              <path d="m7.5 4.27 9 5.15"></path>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Assets</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['locations'] ?? true">\r
          <a routerLink="/locations" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-map-pin mr-3 h-5 w-5 text-purple-600">\r
              <path\r
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>\r
              <circle cx="12" cy="10" r="3"></circle>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Locations</span>\r
            <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"\r
                  [ngClass]="!sidebarOpen ? 'hidden' : ''">New</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['roles'] ?? true">\r
          <a routerLink="/roles" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Roles</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['work_orders']">\r
          <a routerLink="/work-orders" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Work Orders</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['teams'] ?? true">\r
          <a routerLink="/teams" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-users mr-3 h-5 w-5 text-teal-600">\r
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>\r
              <circle cx="9" cy="7" r="4"></circle>\r
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>\r
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>\r
            </svg>\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Teams</span>\r
            <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"\r
                  [ngClass]="!sidebarOpen ? 'hidden' : ''">New</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['maintenance']">\r
          <a routerLink="/maintenance" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-calendar mr-3 h-5 w-5 text-cyan-600">\r
              <path d="M8 2v4"></path>\r
              <path d="M16 2v4"></path>\r
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>\r
              <path d="M3 10h18"></path>\r
            </svg>\r
\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Maintenance</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['inventory']">\r
          <a routerLink="/inventory" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-warehouse mr-3 h-5 w-5 text-indigo-600">\r
              <path\r
                d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path>\r
              <path d="M6 18h12"></path>\r
              <path d="M6 14h12"></path>\r
              <rect width="12" height="12" x="6" y="10"></rect>\r
            </svg>\r
\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Inventory</span>\r
            <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"\r
                  [ngClass]="!sidebarOpen ? 'hidden' : ''">New</span>\r
          </a>\r
        </li>\r
        <li>\r
          <a href="javascript:void(0)"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 cursor-not-allowed opacity-60"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-thermometer mr-3 h-5 w-5 text-red-600">\r
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>\r
            </svg>\r
\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Sensors</span>\r
            <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"\r
                  [ngClass]="!sidebarOpen ? 'hidden' : ''">New</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['ai_features']">\r
          <a routerLink="/ai" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-bot mr-3 h-5 w-5 text-pink-600">\r
              <path d="M12 8V4H8"></path>\r
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>\r
              <path d="M2 14h2"></path>\r
              <path d="M20 14h2"></path>\r
              <path d="M15 13v2"></path>\r
              <path d="M9 13v2"></path>\r
            </svg>\r
\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">AI Features</span>\r
            <span class="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"\r
                  [ngClass]="!sidebarOpen ? 'hidden' : ''">New</span>\r
          </a>\r
        </li>\r
        <li *ngIf="modules()['reports'] ?? true">\r
          <a routerLink="/reports" routerLinkActive="bg-blue-50 text-blue-700"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 cursor-pointer"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-file-text mr-3 h-5 w-5 text-orange-600">\r
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>\r
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>\r
              <path d="M10 9H8"></path>\r
              <path d="M16 13H8"></path>\r
              <path d="M16 17H8"></path>\r
            </svg>\r
\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Reports</span>\r
          </a>\r
        </li>\r
        <li>\r
          <a routerLink="/settings"\r
             class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 cursor-pointer hover:bg-gray-100"\r
             [class.!block]="!sidebarOpen">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"\r
                 class="lucide lucide-settings mr-3 h-5 w-5 text-slate-600">\r
              <path\r
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>\r
              <circle cx="12" cy="12" r="3"></circle>\r
            </svg>\r
\r
            <span [ngClass]="!sidebarOpen ? 'hidden' : ''">Settings</span>\r
          </a>\r
        </li>\r
      </ul>\r
    </nav>\r
  </aside>\r
\r
\r
  <div class="flex flex-col flex-1">\r
    <!-- Header -->\r
    <header class="bg-white border-b border-gray-200">\r
      <div class="flex items-center justify-between px-6 py-4">\r
        <!-- Left side -->\r
        <div class="flex items-center space-x-4">\r
          <!-- Sidebar toggle -->\r
          <button class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer" (click)="toggleSidebar()">\r
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" class="size-5 text-gray-600"\r
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>\r
              <path d="M9 3v18"></path>\r
            </svg>\r
          </button>\r
\r
\r
        </div>\r
\r
        <!-- Center - Search -->\r
        <div class="flex-1 max-w-lg mx-8">\r
          <div class="relative">\r
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none"\r
                 stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>\r
            </svg>\r
            <input\r
              type="text"\r
              placeholder="Search assets, work orders"\r
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400">\r
            <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">\u2318 K</span>\r
          </div>\r
        </div>\r
\r
        <!-- Right side -->\r
        <div class="flex items-center space-x-4">\r
          <button\r
            class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">\r
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>\r
            </svg>\r
            <span>Quick Add</span>\r
          </button>\r
\r
          <button class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">\r
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>\r
            </svg>\r
          </button>\r
\r
          <!-- Notifications -->\r
          <div class="relative">\r
            <button class="p-2 rounded-lg hover:bg-gray-100 cursor-pointer">\r
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"\r
                   stroke="currentColor" class="size-5 text-gray-600">\r
                <path stroke-linecap="round" stroke-linejoin="round"\r
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"/>\r
              </svg>\r
\r
            </button>\r
            <span\r
              class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>\r
          </div>\r
\r
          <!-- User menu -->\r
          <div class="relative">\r
            <button\r
              (click)="toggleUserDropdown()"\r
              class="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">\r
              <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">\r
                {{ getUserInitials() }}\r
              </div>\r
              <div class="text-sm">\r
                <div class="font-medium text-gray-900">{{ currentUser?.first_name }} {{ currentUser?.last_name }}</div>\r
                <div class="text-gray-500">{{ currentUser?.user_type }} \u2022 {{ currentUser?.company?.name }}</div>\r
              </div>\r
              <svg class="w-4 h-4 text-gray-400 transition-transform" [class.rotate-180]="showUserDropdown" fill="none"\r
                   stroke="currentColor" viewBox="0 0 24 24">\r
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>\r
              </svg>\r
            </button>\r
\r
            <!-- User Dropdown Menu -->\r
            <div *ngIf="showUserDropdown"\r
                 class="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">\r
              <!-- User Info Header -->\r
              <div class="px-4 py-3 border-b border-gray-100">\r
                <div class="flex items-center space-x-3">\r
                  <div\r
                    class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium text-lg">\r
                    {{ getUserInitials() }}\r
                  </div>\r
                  <div>\r
                    <div class="font-semibold text-gray-900">{{ currentUser?.first_name }} {{ currentUser?.last_name }}\r
                    </div>\r
                    <div class="text-sm text-gray-500">{{ currentUser?.email }}</div>\r
                    <div class="text-xs text-gray-400 mt-1">{{ currentUser?.company?.name }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Account Management -->\r
              <div class="px-4 py-2">\r
                <button\r
                  class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-left transition-colors cursor-pointer">\r
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">\r
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <div class="font-medium text-gray-900">Manage Account</div>\r
                    <div class="text-xs text-gray-500">Personal info, privacy, and more</div>\r
                  </div>\r
                </button>\r
              </div>\r
\r
              <!-- Development Tools -->\r
              <div class="px-4 py-2 border-t border-gray-100">\r
                <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">Development Tools\r
                </div>\r
\r
                <button\r
                  class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-green-50 text-left transition-colors cursor-pointer mb-1">\r
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">\r
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <div class="font-medium text-gray-900">Load Demo Data</div>\r
                    <div class="text-xs text-gray-500">Add sample data for testing</div>\r
                  </div>\r
                </button>\r
\r
                <button\r
                  class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 text-left transition-colors cursor-pointer">\r
                  <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">\r
                    <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <div class="font-medium text-gray-900">Clear Demo Data</div>\r
                    <div class="text-xs text-gray-500">Remove all sample data</div>\r
                  </div>\r
                </button>\r
              </div>\r
\r
              <!-- Sign Out -->\r
              <div class="px-4 py-2 border-t border-gray-100">\r
                <button\r
                  (click)="signOut()"\r
                  class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-50 text-left transition-colors cursor-pointer">\r
                  <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">\r
                    <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"\r
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>\r
                    </svg>\r
                  </div>\r
                  <div>\r
                    <div class="font-medium text-gray-900">Sign Out</div>\r
                    <div class="text-xs text-gray-500">Sign out of your account</div>\r
                  </div>\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </header>\r
\r
    <!-- Main Content -->\r
    <main class="flex-1">\r
      <router-outlet></router-outlet>\r
    </main>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/shared/components/layout/layout.component.scss */\n.layout-container {\n  min-height: 100vh;\n  background-color: #f9fafb;\n}\n.header {\n  background: white;\n  border-bottom: 1px solid #e5e7eb;\n  position: sticky;\n  top: 0;\n  z-index: 40;\n}\n.sidebar {\n  width: 16rem;\n  background: white;\n  border-right: 1px solid #e5e7eb;\n  min-height: calc(100vh - 73px);\n  position: sticky;\n  top: 73px;\n}\n.nav-item {\n  transition: all 0.2s ease-in-out;\n}\n.nav-item:hover {\n  background-color: #f3f4f6;\n}\n.nav-item.active {\n  background-color: #eff6ff;\n  color: #1d4ed8;\n}\n.user-dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  margin-top: 0.5rem;\n  width: 20rem;\n  background: white;\n  border-radius: 0.75rem;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e5e7eb;\n  z-index: 50;\n}\n.main-content {\n  flex: 1;\n  min-height: calc(100vh - 73px);\n}\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .header .search-bar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=layout.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: AuthService }, { type: SettingsService }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LayoutComponent, { className: "LayoutComponent", filePath: "src/app/shared/components/layout/layout.component.ts", lineNumber: 16 });
})();

// src/app/settings/settings-access.service.ts
var SettingsAccessService = class _SettingsAccessService {
  isAdmin(user) {
    if (!user)
      return false;
    if (user.user_type === "super_admin" || user.user_type === "company_admin")
      return true;
    if (user.company && `${user.company.owner_id}` === `${user.id}`)
      return true;
    return false;
  }
  static \u0275fac = function SettingsAccessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsAccessService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsAccessService, factory: _SettingsAccessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsAccessService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/settings/components/currency-settings.component.ts
function CurrencySettingsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Current setting: ", ctx_r0.verboseCurrency(ctx_r0.currentCurrency()), " ");
  }
}
var CurrencySettingsComponent = class _CurrencySettingsComponent {
  disabled = false;
  saving = signal(false);
  currentCurrency = signal("");
  api = inject(SettingsService);
  currency = inject(CurrencyService);
  ngOnInit() {
    this.api.getCompany().subscribe((res) => {
      const c = (res.data?.company?.currency ?? "").toString().toUpperCase();
      this.currentCurrency.set(c);
      this.currency.refreshFromServer().subscribe();
    });
  }
  quickSet(code) {
    if (this.disabled)
      return;
    if (this.currentCurrency() === code)
      return;
    this.saving.set(true);
    this.api.updateCurrency(code).subscribe({
      next: () => {
        this.currentCurrency.set(code);
        this.currency.refreshFromServer().subscribe();
        this.saving.set(false);
      },
      error: () => this.saving.set(false)
    });
  }
  verboseCurrency(code) {
    switch (code) {
      case "USD":
        return "US Dollar (USD)";
      case "AED":
        return "UAE Dirham (AED)";
      default:
        return code;
    }
  }
  static \u0275fac = function CurrencySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CurrencySettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CurrencySettingsComponent, selectors: [["currency-settings"]], inputs: { disabled: "disabled" }, decls: 19, vars: 11, consts: [[1, "border", "border-gray-200", "shadow", "bg-white", "mb-4", "p-5", "rounded-2xl"], [1, "text-2xl", "font-medium", "mb-3"], [1, "text-sm", "text-gray-500", "mb-1"], [1, "text-gray-500", "text-sm", "mb-3"], [1, "flex", "gap-2", "flex-wrap"], [1, "px-3", "py-2", "rounded-xl", "border", "border-gray-200", "flex", "items-center", "gap-2", "transition-all", "duration-300", "cursor-pointer", "hover:border-blue-500", "font-medium", 3, "click", "disabled"], ["class", "text-xs text-gray-500 mt-2", 4, "ngIf"], [1, "text-xs", "text-gray-500", "mt-2"]], template: function CurrencySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Currency Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, "Company Currency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "All financial amounts will be displayed in the selected currency.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function CurrencySettingsComponent_Template_button_click_8_listener() {
        return ctx.quickSet("USD");
      });
      \u0275\u0275elementStart(9, "span");
      \u0275\u0275text(10, "$");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "USD - US Dollar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "button", 5);
      \u0275\u0275listener("click", function CurrencySettingsComponent_Template_button_click_13_listener() {
        return ctx.quickSet("AED");
      });
      \u0275\u0275elementStart(14, "span");
      \u0275\u0275text(15, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "AED - UAE Dirham");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, CurrencySettingsComponent_div_18_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275classProp("bg-blue-600", ctx.currentCurrency() === "USD")("text-white", ctx.currentCurrency() === "USD");
      \u0275\u0275property("disabled", ctx.disabled || ctx.saving());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("bg-blue-600", ctx.currentCurrency() === "AED")("text-white", ctx.currentCurrency() === "AED");
      \u0275\u0275property("disabled", ctx.disabled || ctx.saving());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.currentCurrency());
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrencySettingsComponent, [{
    type: Component,
    args: [{
      selector: "currency-settings",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div class="border border-gray-200 shadow bg-white mb-4 p-5 rounded-2xl">
      <h2 class="text-2xl font-medium mb-3">Currency Settings</h2>
      <div class="text-sm text-gray-500 mb-1">Company Currency</div>
      <p class="text-gray-500 text-sm mb-3">All financial amounts will be displayed in the selected currency.</p>
      <div class="flex gap-2 flex-wrap">
        <button
          class="px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-2 transition-all duration-300 cursor-pointer hover:border-blue-500 font-medium"
          [class.bg-blue-600]="currentCurrency()==='USD'" [class.text-white]="currentCurrency()==='USD'"
          [disabled]="disabled || saving()" (click)="quickSet('USD')">
          <span>$</span>
          <span>USD - US Dollar</span>
        </button>
        <button
          class="px-3 py-2 rounded-xl border border-gray-200 flex items-center gap-2 transition-all duration-300 cursor-pointer hover:border-blue-500 font-medium"
          [class.bg-blue-600]="currentCurrency()==='AED'" [class.text-white]="currentCurrency()==='AED'"
          [disabled]="disabled || saving()" (click)="quickSet('AED')">
          <span>\u2022</span>
          <span>AED - UAE Dirham</span>
        </button>
      </div>
      <div class="text-xs text-gray-500 mt-2" *ngIf="currentCurrency()">Current
        setting: {{ verboseCurrency(currentCurrency()) }}
      </div>
    </div>
  `
    }]
  }], null, { disabled: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CurrencySettingsComponent, { className: "CurrencySettingsComponent", filePath: "src/app/settings/components/currency-settings.component.ts", lineNumber: 37 });
})();

// src/app/settings/components/language-settings.component.ts
function LanguageSettingsComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1, "Active");
    \u0275\u0275elementEnd();
  }
}
var LanguageSettingsComponent = class _LanguageSettingsComponent {
  language = signal(localStorage.getItem("app.language") || "en");
  rtl = signal(localStorage.getItem("app.rtl") === "true");
  ngOnInit() {
    this.apply();
  }
  setLanguage(lang) {
    this.language.set(lang);
    localStorage.setItem("app.language", lang);
    this.apply();
  }
  setRtl(v) {
    this.rtl.set(v);
    localStorage.setItem("app.rtl", String(v));
    this.apply();
  }
  apply() {
    document.documentElement.lang = this.language();
    document.documentElement.dir = this.rtl() ? "rtl" : "ltr";
  }
  static \u0275fac = function LanguageSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguageSettingsComponent, selectors: [["language-settings"]], decls: 32, vars: 19, consts: [[1, "border", "border-gray-200", "bg-white", "shadow", "p-5", "rounded-2xl", "mb-4", "bg-white"], [1, "text-2xl", "font-medium", "mb-3"], [1, "text-sm", "text-gray-500", "mb-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-3"], [1, "relative", "p-4", "rounded-2xl", "border", "border-gray-200", "text-left", "transition-all", "duration-300", "hover:border-blue-500", "cursor-pointer", 3, "click"], [1, "text-xs"], [1, "font-medium"], [1, "text-xs", "opacity-80"], ["class", "absolute right-3 top-3 text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full", 4, "ngIf"], [1, "mt-5"], [1, "flex", "items-center", "justify-between"], [1, "text-sm", "text-gray-500"], ["type", "button", "role", "switch", 1, "relative", "inline-flex", "h-6", "w-11", "items-center", "rounded-full", 3, "click"], [1, "inline-block", "h-5", "w-5", "transform", "rounded-full", "bg-white", "transition-all", "duration-300", "cursor-pointer"], [1, "mt-4", "text-sm", "text-gray-500"], [1, "absolute", "right-3", "top-3", "text-[10px]", "bg-white/20", "text-white", "px-2", "py-0.5", "rounded-full"]], template: function LanguageSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Language & Display");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275text(4, "Interface Language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
      \u0275\u0275listener("click", function LanguageSettingsComponent_Template_button_click_6_listener() {
        return ctx.setLanguage("en");
      });
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "US");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275text(12, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, LanguageSettingsComponent_span_13_Template, 2, 0, "span", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 4);
      \u0275\u0275listener("click", function LanguageSettingsComponent_Template_button_click_14_listener() {
        return ctx.setLanguage("ar");
      });
      \u0275\u0275elementStart(15, "div", 5);
      \u0275\u0275text(16, "AE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6);
      \u0275\u0275text(18, "Arabic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 7);
      \u0275\u0275text(20, "\u0627\u0644\u0639\u0631\u0628\u064A\u0629");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 9)(22, "div", 10)(23, "div")(24, "div", 6);
      \u0275\u0275text(25, "Right-to-Left Layout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 11);
      \u0275\u0275text(27, "Enable RTL layout for Arabic and other RTL languages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 12);
      \u0275\u0275listener("click", function LanguageSettingsComponent_Template_button_click_28_listener() {
        return ctx.setRtl(!ctx.rtl());
      });
      \u0275\u0275element(29, "span", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 14);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275classProp("bg-blue-600", ctx.language() === "en")("text-white", ctx.language() === "en");
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.language() === "en");
      \u0275\u0275advance();
      \u0275\u0275classProp("bg-blue-600", ctx.language() === "ar")("text-white", ctx.language() === "ar");
      \u0275\u0275advance(14);
      \u0275\u0275classProp("bg-blue-600", ctx.rtl())("bg-gray-300", !ctx.rtl());
      \u0275\u0275attribute("aria-checked", ctx.rtl());
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-[-2px]", ctx.rtl())("translate-x-[2px]", !ctx.rtl());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Current locale: ", ctx.language() === "en" ? "English (US)" : ctx.language() === "ar" ? "Arabic" : ctx.language(), " ");
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageSettingsComponent, [{
    type: Component,
    args: [{
      selector: "language-settings",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div class="border border-gray-200 bg-white shadow p-5 rounded-2xl mb-4 bg-white">
      <h2 class="text-2xl font-medium mb-3">Language & Display</h2>
      <div class="text-sm text-gray-500 mb-2">Interface Language</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <button
          class="relative p-4 rounded-2xl border border-gray-200 text-left transition-all duration-300 hover:border-blue-500 cursor-pointer"
          [class.bg-blue-600]="language()==='en'" [class.text-white]="language()==='en'" (click)="setLanguage('en')">
          <div class="text-xs">US</div>
          <div class="font-medium">English</div>
          <div class="text-xs opacity-80">English</div>
          <span *ngIf="language()==='en'"
                class="absolute right-3 top-3 text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">Active</span>
        </button>
        <button
          class="relative p-4 rounded-2xl border border-gray-200 text-left transition-all duration-300 hover:border-blue-500 cursor-pointer"
          [class.bg-blue-600]="language()==='ar'" [class.text-white]="language()==='ar'" (click)="setLanguage('ar')">
          <div class="text-xs">AE</div>
          <div class="font-medium">Arabic</div>
          <div class="text-xs opacity-80">\u0627\u0644\u0639\u0631\u0628\u064A\u0629</div>
        </button>
      </div>
      <div class="mt-5">
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium">Right-to-Left Layout</div>
            <p class="text-sm text-gray-500">Enable RTL layout for Arabic and other RTL languages</p>
          </div>
          <button type="button" role="switch" [attr.aria-checked]="rtl()" (click)="setRtl(!rtl())"
                  class="relative inline-flex h-6 w-11 items-center rounded-full"
                  [class.bg-blue-600]="rtl()" [class.bg-gray-300]="!rtl()">
            <span
              class="inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 cursor-pointer"
              [class.translate-x-[-2px]]="rtl()" [class.translate-x-[2px]]="!rtl()"></span>
          </button>
        </div>
      </div>
      <div class="mt-4 text-sm text-gray-500">
        Current locale: {{ language() === 'en' ? 'English (US)' : (language() === 'ar' ? 'Arabic' : language()) }}
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguageSettingsComponent, { className: "LanguageSettingsComponent", filePath: "src/app/settings/components/language-settings.component.ts", lineNumber: 51 });
})();

// src/app/settings/components/company-settings.component.ts
function CompanySettingsComponent_img_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 37);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ((tmp_2_0 = ctx_r1.form.get("logo_url")) == null ? null : tmp_2_0.value) || "", \u0275\u0275sanitizeUrl);
  }
}
function CompanySettingsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 39);
    \u0275\u0275elementEnd();
  }
}
function CompanySettingsComponent__svg_svg_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function CompanySettingsComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 42);
  }
}
function CompanySettingsComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function CompanySettingsComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("name"));
  }
}
function CompanySettingsComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("industry"));
  }
}
function CompanySettingsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.getFieldError("business_type"), " ");
  }
}
function CompanySettingsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("email"));
  }
}
function CompanySettingsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("phone"));
  }
}
function CompanySettingsComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getFieldError("address"));
  }
}
var CompanySettingsComponent = class _CompanySettingsComponent {
  api = inject(SettingsService);
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    industry: [""],
    business_type: [""],
    email: ["", [Validators.email]],
    phone: [""],
    address: [""],
    logo_url: [""]
  });
  saving = signal(false);
  logoFile = null;
  ngOnInit() {
    this.api.getCompany().subscribe((res) => {
      const c = res.data?.company || {};
      this.form.patchValue({
        name: c.name || "",
        industry: c.industry || "",
        business_type: c.business_type || "",
        email: c.email || "",
        phone: c.phone || "",
        address: c.address || "",
        logo_url: c.logo_url || ""
      });
    });
  }
  // Frontend Rules helpers
  hasFieldError(controlName) {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }
  getFieldError(controlName) {
    const control = this.form.get(controlName);
    if (!control || !control.errors)
      return "";
    if (control.errors["required"])
      return "This field is required.";
    if (control.errors["email"])
      return "Enter a valid email address.";
    if (control.errors["minlength"])
      return `Minimum ${control.errors["minlength"].requiredLength} characters.`;
    if (control.errors["maxlength"])
      return `Maximum ${control.errors["maxlength"].requiredLength} characters.`;
    if (control.errors["min"])
      return `Minimum value is ${control.errors["min"].min}.`;
    if (control.errors["max"])
      return `Maximum value is ${control.errors["max"].max}.`;
    return "Invalid value.";
  }
  isRequired(controlName) {
    const control = this.form.get(controlName);
    try {
      if (control && typeof control.hasValidator === "function") {
        return control.hasValidator(Validators.required);
      }
    } catch {
    }
    return controlName === "name";
  }
  onLogoChange(e) {
    this.logoFile = e.target.files?.[0] || null;
    if (this.logoFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.form.patchValue({ logo_url: event.target?.result });
      };
      reader.readAsDataURL(this.logoFile);
    }
  }
  save() {
    this.saving.set(true);
    if (this.logoFile) {
      this.api.uploadCompanyLogo(this.logoFile).subscribe({
        next: (r) => {
          this.form.patchValue({ logo_url: r.data?.logo_url || this.form.get("logo_url")?.value });
          this.updateCompanyData();
        },
        error: (error) => {
          console.error("Logo upload failed:", error);
          this.saving.set(false);
        }
      });
    } else {
      this.updateCompanyData();
    }
  }
  updateCompanyData() {
    const payload = this.form.value;
    delete payload.logo_url;
    this.api.updateCompany(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.logoFile = null;
      },
      error: (error) => {
        console.error("Company update failed:", error);
        this.saving.set(false);
      }
    });
  }
  static \u0275fac = function CompanySettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanySettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanySettingsComponent, selectors: [["company-settings"]], decls: 76, vars: 39, consts: [["fileInput", ""], [1, "space-y-4"], [1, "border", "bg-white", "shadow", "border-gray-200", "p-5", "rounded-2xl"], [1, "text-2xl", "font-medium", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"], [1, "text-sm", "text-gray-500", "mt-2"], [1, "border", "border-gray-200", "rounded-2xl", "shadow", "bg-white"], [1, "p-5", "pb-2", "border-gray-200", "flex", "items-center", "gap-2"], [1, "text-2xl", "font-medium"], [1, "p-5", "space-y-4", 3, "formGroup"], [1, "text-sm", "font-medium", "mb-2"], [1, "flex", "items-center", "gap-4"], [1, "relative"], ["class", "h-12 w-12 object-cover rounded-lg border border-gray-200", "alt", "Company logo", 3, "src", 4, "ngIf"], ["class", "absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center", 4, "ngIf"], [1, "space-y-1"], ["type", "button", 1, "px-3", "py-2", "rounded-lg", "border", "border-gray-200", "bg-white", "hover:bg-gray-50", "inline-flex", "items-center", "gap-2", "disabled:opacity-50", 3, "click", "disabled"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", "class", "size-4", 4, "ngIf"], ["class", "animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600", 4, "ngIf"], [1, "text-xs", "text-gray-500"], ["type", "file", "accept", "image/*", 1, "input", "hidden", 3, "change"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "form-row", "full-width"], [1, "form-group"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["class", "text-red-500", 4, "ngIf"], ["type", "text", "formControlName", "name", "placeholder", "e.g., Company LLC", 1, "input", "w-full"], ["class", "field-error", 4, "ngIf"], ["type", "text", "formControlName", "industry", "placeholder", "e.g., Manufacturing", 1, "input", "w-full"], ["type", "text", "formControlName", "business_type", "placeholder", "e.g., LLC, Sole Proprietor", 1, "input", "w-full"], ["type", "email", "formControlName", "email", "placeholder", "e.g., hello@company.com", 1, "input", "w-full"], ["type", "text", "formControlName", "phone", "placeholder", "e.g., +1 555 123 4567", 1, "input", "w-full"], [1, "md:col-span-2"], ["formControlName", "address", "placeholder", "Enter company address", 1, "input", "resize-none", "w-full"], [1, "pt-2", "flex", "justify-end"], ["type", "button", 1, "bg-blue-600", "text-white", "px-4", "py-3", "font-medium", "rounded-xl", "disabled:opacity-50", "transition-all", "duration-300", "hover:bg-blue-700", "cursor-pointer", 3, "click", "disabled"], ["alt", "Company logo", 1, "h-12", "w-12", "object-cover", "rounded-lg", "border", "border-gray-200", 3, "src"], [1, "absolute", "inset-0", "bg-black", "bg-opacity-50", "rounded-lg", "flex", "items-center", "justify-center"], [1, "animate-spin", "rounded-full", "h-4", "w-4", "border-b-2", "border-white"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-4"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"], [1, "animate-spin", "rounded-full", "h-4", "w-4", "border-b-2", "border-gray-600"], [1, "text-red-500"], [1, "field-error"]], template: function CompanySettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 4);
      \u0275\u0275element(4, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Company ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "p", 6);
      \u0275\u0275text(7, "Company-wide settings and preferences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "span", 9);
      \u0275\u0275text(11, "Company Information");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "form", 10)(13, "div")(14, "div", 11);
      \u0275\u0275text(15, "Company Logo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
      \u0275\u0275template(18, CompanySettingsComponent_img_18_Template, 1, 1, "img", 14)(19, CompanySettingsComponent_div_19_Template, 2, 0, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 16)(21, "button", 17);
      \u0275\u0275listener("click", function CompanySettingsComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        const fileInput_r3 = \u0275\u0275reference(28);
        return \u0275\u0275resetView(fileInput_r3.click());
      });
      \u0275\u0275template(22, CompanySettingsComponent__svg_svg_22_Template, 2, 0, "svg", 18)(23, CompanySettingsComponent_div_23_Template, 1, 0, "div", 19);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 20);
      \u0275\u0275text(26, "PNG, JPG up to 5MB. Recommended: 200\xD7200px");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "input", 21, 0);
      \u0275\u0275listener("change", function CompanySettingsComponent_Template_input_change_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLogoChange($event));
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 22)(30, "div")(31, "div", 23)(32, "div", 24)(33, "label", 25);
      \u0275\u0275text(34, "Company Name ");
      \u0275\u0275template(35, CompanySettingsComponent_span_35_Template, 2, 0, "span", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 27);
      \u0275\u0275template(37, CompanySettingsComponent_div_37_Template, 2, 1, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div")(39, "div", 23)(40, "div", 24)(41, "label", 25);
      \u0275\u0275text(42, "Industry");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 29);
      \u0275\u0275template(44, CompanySettingsComponent_div_44_Template, 2, 1, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div")(46, "div", 23)(47, "div", 24)(48, "label", 25);
      \u0275\u0275text(49, "Business Type");
      \u0275\u0275elementEnd();
      \u0275\u0275element(50, "input", 30);
      \u0275\u0275template(51, CompanySettingsComponent_div_51_Template, 2, 1, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div")(53, "div", 23)(54, "div", 24)(55, "label", 25);
      \u0275\u0275text(56, "Email Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(57, "input", 31);
      \u0275\u0275template(58, CompanySettingsComponent_div_58_Template, 2, 1, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(59, "div")(60, "div", 23)(61, "div", 24)(62, "label", 25);
      \u0275\u0275text(63, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 32);
      \u0275\u0275template(65, CompanySettingsComponent_div_65_Template, 2, 1, "div", 28);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 33)(67, "div", 23)(68, "div", 24)(69, "label", 25);
      \u0275\u0275text(70, "Company Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "textarea", 34);
      \u0275\u0275template(72, CompanySettingsComponent_div_72_Template, 2, 1, "div", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 35)(74, "button", 36);
      \u0275\u0275listener("click", function CompanySettingsComponent_Template_button_click_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.save());
      });
      \u0275\u0275text(75, "Save Changes ");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(12);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("logo_url")) == null ? null : tmp_2_0.value);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving() && ctx.logoFile);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.saving());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.saving() && ctx.logoFile ? "Uploading..." : "Upload Logo", " ");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("error", ctx.hasFieldError("name"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.isRequired("name"));
      \u0275\u0275advance();
      \u0275\u0275classProp("error-input", ctx.hasFieldError("name"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("name"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", ctx.hasFieldError("industry"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error-input", ctx.hasFieldError("industry"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("industry"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", ctx.hasFieldError("business_type"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error-input", ctx.hasFieldError("business_type"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("business_type"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", ctx.hasFieldError("email"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error-input", ctx.hasFieldError("email"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("email"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", ctx.hasFieldError("phone"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error-input", ctx.hasFieldError("phone"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("phone"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error", ctx.hasFieldError("address"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("error-input", ctx.hasFieldError("address"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.hasFieldError("address"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving() || ctx.form.invalid);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n  outline: none;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n}\n/*# sourceMappingURL=company-settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanySettingsComponent, [{
    type: Component,
    args: [{ selector: "company-settings", standalone: true, imports: [CommonModule, ReactiveFormsModule], template: `
    <div class="space-y-4">
      <div class="border bg-white shadow border-gray-200 p-5 rounded-2xl">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
          </svg>

          Company
        </h2>
        <p class="text-sm text-gray-500 mt-2">Company-wide settings and preferences</p>
      </div>


      <div class="border border-gray-200 rounded-2xl shadow bg-white">
        <div class="p-5 pb-2 border-gray-200 flex items-center gap-2">
          <span class="text-2xl font-medium">Company Information</span>
        </div>
        <form [formGroup]="form" class="p-5 space-y-4">
          <div>
            <div class="text-sm font-medium mb-2">Company Logo</div>
            <div class="flex items-center gap-4">
              <div class="relative">
                <img *ngIf="form.get('logo_url')?.value" [src]="form.get('logo_url')?.value || ''"
                     class="h-12 w-12 object-cover rounded-lg border border-gray-200" alt="Company logo">
                <div *ngIf="saving() && logoFile" class="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                  <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                </div>
              </div>
              <div class="space-y-1">
                <button type="button" 
                        class="px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 inline-flex items-center gap-2 disabled:opacity-50"
                        [disabled]="saving()"
                        (click)="fileInput.click()">
                  <svg *ngIf="!saving()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                  <div *ngIf="saving()" class="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                  {{ saving() && logoFile ? 'Uploading...' : 'Upload Logo' }}
                </button>
                <div class="text-xs text-gray-500">PNG, JPG up to 5MB. Recommended: 200\xD7200px</div>
                <input #fileInput type="file" class="input hidden" accept="image/*" (change)="onLogoChange($event)"/>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('name')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Company Name <span class="text-red-500"
                                                                                                 *ngIf="isRequired('name')">*</span></label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="name"
                    placeholder="e.g., Company LLC"
                    [class.error-input]="hasFieldError('name')">
                  <div class="field-error" *ngIf="hasFieldError('name')">{{ getFieldError('name') }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('industry')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="industry"
                    placeholder="e.g., Manufacturing"
                    [class.error-input]="hasFieldError('industry')">
                  <div class="field-error" *ngIf="hasFieldError('industry')">{{ getFieldError('industry') }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('business_type')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="business_type"
                    placeholder="e.g., LLC, Sole Proprietor"
                    [class.error-input]="hasFieldError('business_type')">
                  <div class="field-error" *ngIf="hasFieldError('business_type')">{{ getFieldError('business_type') }}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('email')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    class="input w-full"
                    formControlName="email"
                    placeholder="e.g., hello@company.com"
                    [class.error-input]="hasFieldError('email')">
                  <div class="field-error" *ngIf="hasFieldError('email')">{{ getFieldError('email') }}</div>
                </div>
              </div>
            </div>
            <div>
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('phone')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    class="input w-full"
                    formControlName="phone"
                    placeholder="e.g., +1 555 123 4567"
                    [class.error-input]="hasFieldError('phone')">
                  <div class="field-error" *ngIf="hasFieldError('phone')">{{ getFieldError('phone') }}</div>
                </div>
              </div>
            </div>
            <div class="md:col-span-2">
              <div class="form-row full-width">
                <div class="form-group" [class.error]="hasFieldError('address')">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Company Address</label>
                  <textarea
                    formControlName="address"
                    placeholder="Enter company address"
                    class="input resize-none w-full"
                    [class.error-input]="hasFieldError('address')"></textarea>
                  <div class="field-error" *ngIf="hasFieldError('address')">{{ getFieldError('address') }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-2 flex justify-end">
            <button type="button"
                    class="bg-blue-600 text-white px-4 py-3 font-medium rounded-xl disabled:opacity-50 transition-all duration-300 hover:bg-blue-700 cursor-pointer"
                    [disabled]="saving() || form.invalid" (click)="save()">Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;40676509d08982810d4f86ca9e6c86599df07a04d6db430f02ac53040d3a4c6d;D:/laragon-2025/laragon/www/assetGo-backend/assetGo-frontend/src/app/settings/components/company-settings.component.ts */\n.input {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n  outline: none;\n}\n.input::placeholder {\n  color: #9ca3af;\n}\n.input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n}\n/*# sourceMappingURL=company-settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanySettingsComponent, { className: "CompanySettingsComponent", filePath: "src/app/settings/components/company-settings.component.ts", lineNumber: 178 });
})();

// src/app/settings/components/module-settings.component.ts
function ModuleSettingsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div")(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 19);
    \u0275\u0275text(7, "Always Enabled");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r1.display_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.description);
  }
}
function ModuleSettingsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div")(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 21)(7, "span", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 23);
    \u0275\u0275listener("click", function ModuleSettingsComponent_div_24_Template_button_click_9_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggle(m_r3));
    });
    \u0275\u0275element(10, "span", 24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r3.display_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-blue-100", m_r3.is_enabled)("text-blue-700", m_r3.is_enabled)("bg-gray-100", !m_r3.is_enabled)("text-gray-600", !m_r3.is_enabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.is_enabled ? "Enabled" : "Disabled");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-blue-600", m_r3.is_enabled)("bg-gray-300", !m_r3.is_enabled);
    \u0275\u0275property("disabled", ctx_r3.saving());
    \u0275\u0275advance();
    \u0275\u0275classProp("translate-x-5", m_r3.is_enabled)("translate-x-1", !m_r3.is_enabled);
  }
}
var ModuleSettingsComponent = class _ModuleSettingsComponent {
  api = inject(SettingsService);
  modules = signal([]);
  saving = signal(false);
  systemModules = computed(() => this.modules().filter((m) => m.is_system_module));
  featureModules = computed(() => this.modules().filter((m) => !m.is_system_module));
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.api.listModules().subscribe((res) => {
      const list = res.data?.modules || [];
      this.modules.set(list);
      this.enableAllModulesInitially(list);
    });
  }
  enableAllModulesInitially(list) {
    const alreadyInitialized = localStorage.getItem("app.modules.initialized") === "true";
    if (alreadyInitialized)
      return;
    const modulesToEnable = list.filter((m) => !m.is_system_module && !m.is_enabled);
    if (modulesToEnable.length === 0) {
      localStorage.setItem("app.modules.initialized", "true");
      return;
    }
    this.saving.set(true);
    let remaining = modulesToEnable.length;
    this.modules.update((arr) => arr.map((m) => modulesToEnable.some((t) => t.id === m.id) ? __spreadProps(__spreadValues({}, m), { is_enabled: true }) : m));
    modulesToEnable.forEach((mod) => {
      this.api.enableModule(mod.id).subscribe({
        next: () => {
          remaining -= 1;
          if (remaining === 0) {
            this.saving.set(false);
            localStorage.setItem("app.modules.initialized", "true");
          }
        },
        error: () => {
          remaining -= 1;
          if (remaining === 0) {
            this.saving.set(false);
            localStorage.setItem("app.modules.initialized", "true");
          }
        }
      });
    });
  }
  toggle(m) {
    if (m.is_system_module)
      return;
    this.saving.set(true);
    const prev = m.is_enabled;
    this.modules.update((list) => list.map((x) => x.id === m.id ? __spreadProps(__spreadValues({}, x), { is_enabled: !prev }) : x));
    const req = prev ? this.api.disableModule(m.id) : this.api.enableModule(m.id);
    req.subscribe({
      next: () => this.saving.set(false),
      error: () => {
        this.modules.update((list) => list.map((x) => x.id === m.id ? __spreadProps(__spreadValues({}, x), { is_enabled: prev }) : x));
        this.saving.set(false);
      }
    });
  }
  static \u0275fac = function ModuleSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleSettingsComponent, selectors: [["module-settings"]], decls: 25, vars: 2, consts: [[1, "space-y-4"], [1, "border", "border-gray-200", "p-5", "rounded-2xl", "shadow", "bg-white"], [1, "text-2xl", "font-medium", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"], [1, "text-sm", "text-gray-500", "mt-2"], [1, "border", "bg-white", "border-gray-200", "rounded-2xl", "shadow"], [1, "p-5", "pb-2"], [1, "text-2xl", "font-medium"], [1, "text-xs", "text-gray-500"], [1, "p-5", "space-y-6"], [1, "text-sm", "tracking-wide", "text-gray-500", "mb-3"], [1, "space-y-3"], ["class", "flex items-center justify-between border border-gray-200 rounded-2xl p-4 bg-gray-50", 4, "ngFor", "ngForOf"], [1, "text-sm", "tracking-wide", "text-gray-500", "mb-2"], ["class", "flex items-center justify-between border border-gray-200 rounded-2xl p-4", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "border", "border-gray-200", "rounded-2xl", "p-4", "bg-gray-50"], [1, "font-medium"], [1, "text-xs", "text-gray-600"], [1, "text-[10px]", "px-2", "py-1", "rounded-full", "bg-green-100", "text-green-700"], [1, "flex", "items-center", "justify-between", "border", "border-gray-200", "rounded-2xl", "p-4"], [1, "flex", "items-center", "gap-2"], [1, "text-[10px]", "px-2", "py-1", "rounded-full"], ["type", "button", 1, "relative", "inline-flex", "h-6", "w-11", "items-center", "rounded-full", "transition-all", "duration-300", "cursor-pointer", 3, "click", "disabled"], [1, "inline-block", "h-5", "w-5", "transform", "rounded-full", "bg-white", "transition-all", "duration-400"]], template: function ModuleSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Modules ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Enable/disable features and manage permissions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "h3", 8);
      \u0275\u0275text(11, "Module Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 9);
      \u0275\u0275text(13, "Control which modules are available to your team. System modules cannot be disabled.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 10)(15, "div")(16, "div", 11);
      \u0275\u0275text(17, "System Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12);
      \u0275\u0275template(19, ModuleSettingsComponent_div_19_Template, 8, 2, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div")(21, "div", 14);
      \u0275\u0275text(22, "Feature Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12);
      \u0275\u0275template(24, ModuleSettingsComponent_div_24_Template, 11, 20, "div", 15);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.systemModules());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.featureModules());
    }
  }, dependencies: [NgForOf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleSettingsComponent, [{
    type: Component,
    args: [{
      selector: "module-settings",
      standalone: true,
      imports: [NgForOf],
      template: `
    <div class="space-y-4">
      <div class="border border-gray-200 p-5 rounded-2xl shadow bg-white">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
          </svg>

          Modules
        </h2>
        <p class="text-sm text-gray-500 mt-2">Enable/disable features and manage permissions</p>
      </div>

      <div class="border bg-white border-gray-200 rounded-2xl shadow">
        <div class="p-5 pb-2">
          <h3 class="text-2xl font-medium">Module Management</h3>
          <p class="text-xs text-gray-500">Control which modules are available to your team. System modules cannot be
            disabled.</p>
        </div>

        <div class="p-5 space-y-6">
          <div>
            <div class="text-sm tracking-wide text-gray-500 mb-3">System Modules</div>
            <div class="space-y-3">
              <div *ngFor="let m of systemModules()"
                   class="flex items-center justify-between border border-gray-200 rounded-2xl p-4 bg-gray-50">
                <div>
                  <div class="font-medium">{{ m.display_name }}</div>
                  <div class="text-xs text-gray-600">{{ m.description }}</div>
                </div>
                <span class="text-[10px] px-2 py-1 rounded-full bg-green-100 text-green-700">Always Enabled</span>
              </div>
            </div>
          </div>

          <div>
            <div class="text-sm tracking-wide text-gray-500 mb-2">Feature Modules</div>
            <div class="space-y-3">
              <div *ngFor="let m of featureModules()"
                   class="flex items-center justify-between border border-gray-200 rounded-2xl p-4">
                <div>
                  <div class="font-medium">{{ m.display_name }}</div>
                  <div class="text-xs text-gray-600">{{ m.description }}</div>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-[10px] px-2 py-1 rounded-full" [class.bg-blue-100]="m.is_enabled"
                        [class.text-blue-700]="m.is_enabled" [class.bg-gray-100]="!m.is_enabled"
                        [class.text-gray-600]="!m.is_enabled">{{ m.is_enabled ? 'Enabled' : 'Disabled' }}</span>

                  <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 cursor-pointer"
                          [class.bg-blue-600]="m.is_enabled" [class.bg-gray-300]="!m.is_enabled" [disabled]="saving()"
                          (click)="toggle(m)">
                    <span class="inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-400"
                          [class.translate-x-5]="m.is_enabled" [class.translate-x-1]="!m.is_enabled"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleSettingsComponent, { className: "ModuleSettingsComponent", filePath: "src/app/settings/components/module-settings.component.ts", lineNumber: 73 });
})();

// src/app/settings/components/preferences.component.ts
var PreferencesComponent = class _PreferencesComponent {
  api = inject(SettingsService);
  form = signal({});
  saving = signal(false);
  ngOnInit() {
    this.api.getPreferences().subscribe((res) => this.form.set(res.data || {}));
  }
  patch(k, v) {
    this.form.set(__spreadProps(__spreadValues({}, this.form()), { [k]: v }));
  }
  toggle(k) {
    this.form.set(__spreadProps(__spreadValues({}, this.form()), { [k]: !this.form()[k] }));
  }
  save() {
    this.saving.set(true);
    this.api.updatePreferences(this.form()).subscribe({
      next: () => {
        this.saving.set(false);
        localStorage.setItem("app.preferences", JSON.stringify(this.form()));
      },
      error: () => this.saving.set(false)
    });
  }
  static \u0275fac = function PreferencesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PreferencesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PreferencesComponent, selectors: [["preferences-settings"]], decls: 111, vars: 70, consts: [[1, "space-y-6"], [1, "border", "bg-white", "border-gray-200", "p-5", "rounded-2xl", "shadow"], [1, "text-2xl", "font-medium", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"], [1, "text-sm", "text-gray-500", "mt-2"], [1, "text-2xl", "font-medium", "mb-4", "gap-2", "flex", "items-center"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"], [1, "space-y-4"], [1, "flex", "items-center", "justify-between"], [1, "font-medium", "text-sm"], [1, "text-xs", "text-gray-500"], ["type", "button", 1, "relative", "inline-flex", "h-6", "w-11", "items-center", "rounded-full", 3, "click"], [1, "inline-block", "h-5", "w-5", "transform", "rounded-full", "bg-white", "transition"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"], [1, "space-y-3"], [1, "text-sm", "font-medium", "mb-2", "block"], [1, "input", "border", "border-gray-200", "p-2", "rounded-lg", "w-full", 3, "change", "value"], ["value", "grid"], ["value", "list"], [3, "value"], [1, "text-2xl", "font-medium", "mb-2", "flex", "gap-2", "items-center"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], [1, "flex", "justify-end"], [1, "bg-blue-600", "text-white", "px-4", "py-3", "rounded-xl", "disabled:opacity-50", "transition-all", "duration-300", "ease-in-out", "hover:bg-blue-700", "cursor-pointer", 3, "click", "disabled"]], template: function PreferencesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Preferences ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Personal user preferences and notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 1)(9, "h3", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 3);
      \u0275\u0275element(11, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Notification Preferences ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div")(16, "div", 10);
      \u0275\u0275text(17, "Email Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 11);
      \u0275\u0275text(19, "Receive notifications via email");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_20_listener() {
        return ctx.toggle("email_notifications");
      });
      \u0275\u0275element(21, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 9)(23, "div")(24, "div", 10);
      \u0275\u0275text(25, "Push Notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275text(27, "Receive browser push notifications");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_28_listener() {
        return ctx.toggle("push_notifications");
      });
      \u0275\u0275element(29, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 9)(31, "div")(32, "div", 10);
      \u0275\u0275text(33, "Maintenance Alerts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 11);
      \u0275\u0275text(35, "Get notified about upcoming maintenance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_36_listener() {
        return ctx.toggle("maintenance_alerts");
      });
      \u0275\u0275element(37, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div", 9)(39, "div")(40, "div", 10);
      \u0275\u0275text(41, "Work Order Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 11);
      \u0275\u0275text(43, "Notifications for work order changes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_44_listener() {
        return ctx.toggle("work_order_updates");
      });
      \u0275\u0275element(45, "span", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(46, "div", 1)(47, "h3", 6);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(48, "svg", 3);
      \u0275\u0275element(49, "path", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Display Preferences ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "div", 15)(52, "div")(53, "label", 16);
      \u0275\u0275text(54, "Dashboard Layout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "select", 17);
      \u0275\u0275listener("change", function PreferencesComponent_Template_select_change_55_listener($event) {
        return ctx.patch("dashboard_layout", $event.target.value);
      });
      \u0275\u0275elementStart(56, "option", 18);
      \u0275\u0275text(57, "Grid View");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "option", 19);
      \u0275\u0275text(59, "List View");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "div")(61, "label", 16);
      \u0275\u0275text(62, "Items Per Page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "select", 17);
      \u0275\u0275listener("change", function PreferencesComponent_Template_select_change_63_listener($event) {
        return ctx.patch("items_per_page", +$event.target.value);
      });
      \u0275\u0275elementStart(64, "option", 20);
      \u0275\u0275text(65, "10 Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 20);
      \u0275\u0275text(67, "20 Items");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "option", 20);
      \u0275\u0275text(69, "50 Items");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "div", 9)(71, "div")(72, "div", 10);
      \u0275\u0275text(73, "Auto Refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 11);
      \u0275\u0275text(75, "Automatically refresh data every 30 seconds");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_76_listener() {
        return ctx.toggle("auto_refresh");
      });
      \u0275\u0275element(77, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 9)(79, "div")(80, "div", 10);
      \u0275\u0275text(81, "Compact View");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 11);
      \u0275\u0275text(83, "Use more compact spacing throughout the app");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_84_listener() {
        return ctx.toggle("compact_view");
      });
      \u0275\u0275element(85, "span", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 9)(87, "div")(88, "div", 10);
      \u0275\u0275text(89, "Show Avatars");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 11);
      \u0275\u0275text(91, "Display user avatars in lists and tables");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(92, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_92_listener() {
        return ctx.toggle("show_avatars");
      });
      \u0275\u0275element(93, "span", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "div", 1)(95, "h3", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(96, "svg", 3);
      \u0275\u0275element(97, "path", 22)(98, "path", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275text(99, " Accessibility ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(100, "div", 9)(101, "div")(102, "div", 10);
      \u0275\u0275text(103, "Dark Mode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 11);
      \u0275\u0275text(105, "Use dark theme (coming soon)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(106, "button", 12);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_106_listener() {
        return ctx.toggle("dark_mode");
      });
      \u0275\u0275element(107, "span", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 24)(109, "button", 25);
      \u0275\u0275listener("click", function PreferencesComponent_Template_button_click_109_listener() {
        return ctx.save();
      });
      \u0275\u0275text(110, "Save Preferences ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275classProp("bg-blue-600", ctx.form().email_notifications)("bg-gray-300", !ctx.form().email_notifications);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().email_notifications)("translate-x-1", !ctx.form().email_notifications);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("bg-blue-600", ctx.form().push_notifications)("bg-gray-300", !ctx.form().push_notifications);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().push_notifications)("translate-x-1", !ctx.form().push_notifications);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("bg-blue-600", ctx.form().maintenance_alerts)("bg-gray-300", !ctx.form().maintenance_alerts);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().maintenance_alerts)("translate-x-1", !ctx.form().maintenance_alerts);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("bg-blue-600", ctx.form().work_order_updates)("bg-gray-300", !ctx.form().work_order_updates);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().work_order_updates)("translate-x-1", !ctx.form().work_order_updates);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.form().dashboard_layout || "grid");
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.form().items_per_page || 20);
      \u0275\u0275advance();
      \u0275\u0275property("value", 10);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 20);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", 50);
      \u0275\u0275advance(8);
      \u0275\u0275classProp("bg-blue-600", ctx.form().auto_refresh)("bg-gray-300", !ctx.form().auto_refresh);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().auto_refresh)("translate-x-1", !ctx.form().auto_refresh);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("bg-blue-600", ctx.form().compact_view)("bg-gray-300", !ctx.form().compact_view);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().compact_view)("translate-x-1", !ctx.form().compact_view);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("bg-blue-600", ctx.form().show_avatars)("bg-gray-300", !ctx.form().show_avatars);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().show_avatars)("translate-x-1", !ctx.form().show_avatars);
      \u0275\u0275advance(13);
      \u0275\u0275classProp("bg-blue-600", ctx.form().dark_mode)("bg-gray-300", !ctx.form().dark_mode);
      \u0275\u0275advance();
      \u0275\u0275classProp("translate-x-5", ctx.form().dark_mode)("translate-x-1", !ctx.form().dark_mode);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.saving());
    }
  }, styles: ["\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n}\n/*# sourceMappingURL=preferences.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreferencesComponent, [{
    type: Component,
    args: [{ selector: "preferences-settings", standalone: true, template: `
    <div class="space-y-6 ">
      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
          </svg>

          Preferences
        </h2>
        <p class="text-sm text-gray-500 mt-2">Personal user preferences and notifications</p>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-4 gap-2 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
          </svg>

          Notification Preferences
        </h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Email Notifications</div>
              <div class="text-xs text-gray-500">Receive notifications via email</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().email_notifications" [class.bg-gray-300]="!form().email_notifications"
                    (click)="toggle('email_notifications')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().email_notifications"
                    [class.translate-x-1]="!form().email_notifications"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Push Notifications</div>
              <div class="text-xs text-gray-500">Receive browser push notifications</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().push_notifications" [class.bg-gray-300]="!form().push_notifications"
                    (click)="toggle('push_notifications')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().push_notifications"
                    [class.translate-x-1]="!form().push_notifications"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Maintenance Alerts</div>
              <div class="text-xs text-gray-500">Get notified about upcoming maintenance</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().maintenance_alerts" [class.bg-gray-300]="!form().maintenance_alerts"
                    (click)="toggle('maintenance_alerts')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().maintenance_alerts"
                    [class.translate-x-1]="!form().maintenance_alerts"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Work Order Updates</div>
              <div class="text-xs text-gray-500">Notifications for work order changes</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().work_order_updates" [class.bg-gray-300]="!form().work_order_updates"
                    (click)="toggle('work_order_updates')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().work_order_updates"
                    [class.translate-x-1]="!form().work_order_updates"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-4 gap-2 flex items-center">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"/>
          </svg>
          Display Preferences
        </h3>

        <div class="space-y-3">
          <div>
            <label class="text-sm font-medium mb-2 block">Dashboard Layout</label>
            <select class="input border border-gray-200 p-2 rounded-lg w-full" [value]="form().dashboard_layout || 'grid'"
                    (change)="patch('dashboard_layout', $any($event.target).value)">
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium mb-2 block">Items Per Page</label>
            <select class="input border border-gray-200 p-2 rounded-lg w-full" [value]="form().items_per_page || 20"
                    (change)="patch('items_per_page', +$any($event.target).value)">
              <option [value]="10">10 Items</option>
              <option [value]="20">20 Items</option>
              <option [value]="50">50 Items</option>
            </select>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Auto Refresh</div>
              <div class="text-xs text-gray-500">Automatically refresh data every 30 seconds</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().auto_refresh" [class.bg-gray-300]="!form().auto_refresh"
                    (click)="toggle('auto_refresh')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().auto_refresh" [class.translate-x-1]="!form().auto_refresh"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Compact View</div>
              <div class="text-xs text-gray-500">Use more compact spacing throughout the app</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().compact_view" [class.bg-gray-300]="!form().compact_view"
                    (click)="toggle('compact_view')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().compact_view" [class.translate-x-1]="!form().compact_view"></span>
            </button>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <div class="font-medium text-sm">Show Avatars</div>
              <div class="text-xs text-gray-500">Display user avatars in lists and tables</div>
            </div>
            <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                    [class.bg-blue-600]="form().show_avatars" [class.bg-gray-300]="!form().show_avatars"
                    (click)="toggle('show_avatars')">
              <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                    [class.translate-x-5]="form().show_avatars" [class.translate-x-1]="!form().show_avatars"></span>
            </button>
          </div>
        </div>
      </div>

      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h3 class="text-2xl font-medium mb-2 flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
          Accessibility
        </h3>
        <div class="flex items-center justify-between">
          <div>
            <div class="font-medium text-sm">Dark Mode</div>
            <div class="text-xs text-gray-500">Use dark theme (coming soon)</div>
          </div>
          <button type="button" class="relative inline-flex h-6 w-11 items-center rounded-full"
                  [class.bg-blue-600]="form().dark_mode" [class.bg-gray-300]="!form().dark_mode"
                  (click)="toggle('dark_mode')">
            <span class="inline-block h-5 w-5 transform rounded-full bg-white transition"
                  [class.translate-x-5]="form().dark_mode" [class.translate-x-1]="!form().dark_mode"></span>
          </button>
        </div>
      </div>

      <div class="flex justify-end">
        <button class="bg-blue-600 text-white px-4 py-3 rounded-xl disabled:opacity-50 transition-all duration-300 ease-in-out hover:bg-blue-700 cursor-pointer" [disabled]="saving()"
                (click)="save()">Save Preferences
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;72ce08b1c8fb04a74bec24a1a8f4213ff13d864b2a9f33ce901b0b571c03d629;D:/laragon-2025/laragon/www/assetGo-backend/assetGo-frontend/src/app/settings/components/preferences.component.ts */\n.input {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n}\n.input::placeholder {\n  color: #9ca3af;\n}\n.input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n}\n/*# sourceMappingURL=preferences.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PreferencesComponent, { className: "PreferencesComponent", filePath: "src/app/settings/components/preferences.component.ts", lineNumber: 209 });
})();

// src/app/settings/components/date-time-settings.component.ts
var DateTimeSettingsComponent = class _DateTimeSettingsComponent {
  api = inject(SettingsService);
  form = signal({});
  saving = signal(false);
  ngOnInit() {
    this.api.getPreferences().subscribe((res) => this.form.set(res.data || {}));
  }
  set(k, v) {
    this.form.set(__spreadProps(__spreadValues({}, this.form()), { [k]: v }));
  }
  previewDate() {
    const now = /* @__PURE__ */ new Date("2025-12-25T12:00:00Z");
    const fmt = this.form().date_format || "MM/DD/YYYY";
    const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(now.getUTCDate()).padStart(2, "0");
    const yyyy = now.getUTCFullYear();
    if (fmt === "DD/MM/YYYY")
      return `${dd}/${mm}/${yyyy}`;
    if (fmt === "YYYY-MM-DD")
      return `${yyyy}-${mm}-${dd}`;
    return `${mm}/${dd}/${yyyy}`;
  }
  previewTime() {
    return this.form().time_format === "24" ? "14:30" : "2:30 PM";
  }
  save() {
    this.saving.set(true);
    this.api.updatePreferences(this.form()).subscribe({
      next: () => this.saving.set(false),
      error: () => this.saving.set(false)
    });
  }
  static \u0275fac = function DateTimeSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DateTimeSettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateTimeSettingsComponent, selectors: [["date-time-settings"]], decls: 99, vars: 46, consts: [[1, "space-y-6"], [1, "border", "bg-white", "border-gray-200", "p-5", "rounded-2xl", "shadow"], [1, "text-2xl", "font-medium", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-6", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "text-sm", "text-gray-500", "mt-2"], [1, "border", "bg-white", "border-gray-200", "p-5", "rounded-2xl", "shadow", "space-y-6"], [1, "text-sm", "font-medium", "mb-2"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4"], [1, "p-6", "rounded-2xl", "border", "border-gray-200", "text-center", "hover:border-blue-400", "transition-all", "duration-300", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-center", "mb-3"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-5", "text-gray-400", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"], [1, "text-sm", "font-medium"], [1, "text-xs", "opacity-80", "mt-2"], [1, "text-xs", "text-gray-500", "mt-2"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "flex", "items-center", "justify-center", "mb-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "size-4", "text-gray-400"], [1, "input", "border", "border-gray-200", "p-2", "rounded", "w-full", 3, "change", "value"], ["value", "Asia/Dhaka"], ["value", "UTC"], ["value", "America/New_York"], ["value", "Europe/London"], [1, "flex", "justify-end"], [1, "bg-blue-600", "text-white", "px-4", "py-3", "rounded-xl", "disabled:opacity-50", "transition-all", "duration-300", "hover:bg-blue-700", "cursor-pointer", 3, "click", "disabled"]], template: function DateTimeSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, " Date & Time ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(6, "p", 5);
      \u0275\u0275text(7, "Date formats, timezone, and time preferences");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "h2", 2);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(10, "svg", 3);
      \u0275\u0275element(11, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, " Date, Time & Number Formats ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(13, "div")(14, "div", 7);
      \u0275\u0275text(15, "Date Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_17_listener() {
        return ctx.set("date_format", "MM/DD/YYYY");
      });
      \u0275\u0275elementStart(18, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 11);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_svg_click_19_listener() {
        return ctx.set("date_format", "MM/DD/YYYY");
      });
      \u0275\u0275element(20, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(21, "div", 13);
      \u0275\u0275text(22, "MM/DD/YYYY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14);
      \u0275\u0275text(24, "12/25/2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_25_listener() {
        return ctx.set("date_format", "DD/MM/YYYY");
      });
      \u0275\u0275elementStart(26, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(27, "svg", 11);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_svg_click_27_listener() {
        return ctx.set("date_format", "DD/MM/YYYY");
      });
      \u0275\u0275element(28, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(29, "div", 13);
      \u0275\u0275text(30, "DD/MM/YYYY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14);
      \u0275\u0275text(32, "25/12/2024");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_33_listener() {
        return ctx.set("date_format", "YYYY-MM-DD");
      });
      \u0275\u0275elementStart(34, "span", 10);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(35, "svg", 11);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_svg_click_35_listener() {
        return ctx.set("date_format", "YYYY-MM-DD");
      });
      \u0275\u0275element(36, "path", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(37, "div", 13);
      \u0275\u0275text(38, "YYYY-MM-DD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14);
      \u0275\u0275text(40, "2024-12-25");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 15);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div")(44, "div", 7);
      \u0275\u0275text(45, "Time Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 16)(47, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_47_listener() {
        return ctx.set("time_format", "12");
      });
      \u0275\u0275elementStart(48, "span", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(49, "svg", 18);
      \u0275\u0275element(50, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(51, "div", 13);
      \u0275\u0275text(52, "12-hour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 14);
      \u0275\u0275text(54, "2:30 PM");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_55_listener() {
        return ctx.set("time_format", "24");
      });
      \u0275\u0275elementStart(56, "span", 17);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(57, "svg", 18);
      \u0275\u0275element(58, "path", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(59, "div", 13);
      \u0275\u0275text(60, "24-hour");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 14);
      \u0275\u0275text(62, "14:30");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(63, "div", 15);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div")(66, "div", 7);
      \u0275\u0275text(67, "Number Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 8)(69, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_69_listener() {
        return ctx.set("number_format", "US");
      });
      \u0275\u0275elementStart(70, "div", 13);
      \u0275\u0275text(71, "US Format");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 14);
      \u0275\u0275text(73, "1,234.56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_74_listener() {
        return ctx.set("number_format", "EU");
      });
      \u0275\u0275elementStart(75, "div", 13);
      \u0275\u0275text(76, "European");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 14);
      \u0275\u0275text(78, "1.234,56");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "button", 9);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_79_listener() {
        return ctx.set("number_format", "AR");
      });
      \u0275\u0275elementStart(80, "div", 13);
      \u0275\u0275text(81, "Arabic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 14);
      \u0275\u0275text(83, "\u0661,\u0662\u0663\u0664\u066B\u0665\u0666");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "div")(85, "div", 7);
      \u0275\u0275text(86, "Timezone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "select", 19);
      \u0275\u0275listener("change", function DateTimeSettingsComponent_Template_select_change_87_listener($event) {
        return ctx.set("timezone", $event.target.value);
      });
      \u0275\u0275elementStart(88, "option", 20);
      \u0275\u0275text(89, "Asia/Dhaka");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "option", 21);
      \u0275\u0275text(91, "UTC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "option", 22);
      \u0275\u0275text(93, "America/New_York");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "option", 23);
      \u0275\u0275text(95, "Europe/London");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 24)(97, "button", 25);
      \u0275\u0275listener("click", function DateTimeSettingsComponent_Template_button_click_97_listener() {
        return ctx.save();
      });
      \u0275\u0275text(98, "Save Changes ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275classProp("bg-blue-600", ctx.form().date_format === "MM/DD/YYYY")("text-white", ctx.form().date_format === "MM/DD/YYYY");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-white", ctx.form().date_format === "MM/DD/YYYY");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("bg-blue-600", ctx.form().date_format === "DD/MM/YYYY")("text-white", ctx.form().date_format === "DD/MM/YYYY");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-white", ctx.form().date_format === "DD/MM/YYYY");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("bg-blue-600", ctx.form().date_format === "YYYY-MM-DD")("text-white", ctx.form().date_format === "YYYY-MM-DD");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-white", ctx.form().date_format === "YYYY-MM-DD");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Preview: ", ctx.previewDate(), "");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("bg-blue-600", ctx.form().time_format === "12")("text-white", ctx.form().time_format === "12");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-white", ctx.form().time_format === "12");
      \u0275\u0275advance(6);
      \u0275\u0275classProp("bg-blue-600", ctx.form().time_format === "24")("text-white", ctx.form().time_format === "24");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-white", ctx.form().time_format === "24");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Preview: ", ctx.previewTime(), "");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("bg-blue-600", ctx.form().number_format === "US")("text-white", ctx.form().number_format === "US");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("bg-blue-600", ctx.form().number_format === "EU")("text-white", ctx.form().number_format === "EU");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("bg-blue-600", ctx.form().number_format === "AR")("text-white", ctx.form().number_format === "AR");
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.form().timezone || "Asia/Dhaka");
      \u0275\u0275advance(10);
      \u0275\u0275property("disabled", ctx.saving());
    }
  }, styles: ["\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n}\n/*# sourceMappingURL=date-time-settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateTimeSettingsComponent, [{
    type: Component,
    args: [{ selector: "date-time-settings", standalone: true, template: `
    <div class="space-y-6">
      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>

          Date & Time
        </h2>
        <p class="text-sm text-gray-500 mt-2">Date formats, timezone, and time preferences</p>
      </div>
      <div class="border bg-white border-gray-200 p-5 rounded-2xl shadow space-y-6">
        <h2 class="text-2xl font-medium flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6 text-gray-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
          </svg>

          Date, Time & Number Formats
        </h2>
        <div>
          <div class="text-sm font-medium mb-2">Date Format</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().date_format==='MM/DD/YYYY'"
              [class.text-white]="form().date_format==='MM/DD/YYYY'" (click)="set('date_format','MM/DD/YYYY')">
              <span class="flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 text-gray-400"
                     [class.text-white]="form().date_format==='MM/DD/YYYY'" (click)="set('date_format','MM/DD/YYYY')">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>
              </span>
              <div class="text-sm font-medium">MM/DD/YYYY</div>
              <div class="text-xs opacity-80 mt-2">12/25/2024</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().date_format==='DD/MM/YYYY'"
              [class.text-white]="form().date_format==='DD/MM/YYYY'" (click)="set('date_format','DD/MM/YYYY')">
             <span class="flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 text-gray-400"
                     [class.text-white]="form().date_format==='DD/MM/YYYY'" (click)="set('date_format','DD/MM/YYYY')">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>
              </span>
              <div class="text-sm font-medium">DD/MM/YYYY</div>
              <div class="text-xs opacity-80 mt-2">25/12/2024</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().date_format==='YYYY-MM-DD'"
              [class.text-white]="form().date_format==='YYYY-MM-DD'" (click)="set('date_format','YYYY-MM-DD')">
               <span class="flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-5 text-gray-400"
                     [class.text-white]="form().date_format==='YYYY-MM-DD'" (click)="set('date_format','YYYY-MM-DD')">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                </svg>
              </span>
              <div class="text-sm font-medium">YYYY-MM-DD</div>
              <div class="text-xs opacity-80 mt-2">2024-12-25</div>
            </button>
          </div>
          <div class="text-xs text-gray-500 mt-2">Preview: {{ previewDate() }}</div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Time Format</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().time_format==='12'" [class.text-white]="form().time_format==='12'"
              (click)="set('time_format','12')">
              <span class="flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-4 text-gray-400" [class.text-white]="form().time_format==='12'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </span>
              <div class="text-sm font-medium">12-hour</div>
              <div class="text-xs opacity-80 mt-2">2:30 PM</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().time_format==='24'" [class.text-white]="form().time_format==='24'"
              (click)="set('time_format','24')">
              <span class="flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="size-4 text-gray-400" [class.text-white]="form().time_format==='24'">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
              </span>
              <div class="text-sm font-medium">24-hour</div>
              <div class="text-xs opacity-80 mt-2">14:30</div>
            </button>
          </div>
          <div class="text-xs text-gray-500 mt-2">Preview: {{ previewTime() }}</div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Number Format</div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().number_format==='US'" [class.text-white]="form().number_format==='US'"
              (click)="set('number_format','US')">
              <div class="text-sm font-medium">US Format</div>
              <div class="text-xs opacity-80 mt-2">1,234.56</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().number_format==='EU'" [class.text-white]="form().number_format==='EU'"
              (click)="set('number_format','EU')">
              <div class="text-sm font-medium">European</div>
              <div class="text-xs opacity-80 mt-2">1.234,56</div>
            </button>
            <button
              class="p-6 rounded-2xl border border-gray-200 text-center hover:border-blue-400 transition-all duration-300 cursor-pointer"
              [class.bg-blue-600]="form().number_format==='AR'" [class.text-white]="form().number_format==='AR'"
              (click)="set('number_format','AR')">
              <div class="text-sm font-medium">Arabic</div>
              <div class="text-xs opacity-80 mt-2">\u0661,\u0662\u0663\u0664\u066B\u0665\u0666</div>
            </button>
          </div>
        </div>
        <div>
          <div class="text-sm font-medium mb-2">Timezone</div>
          <select class="input border border-gray-200 p-2 rounded w-full" [value]="form().timezone || 'Asia/Dhaka'"
                  (change)="set('timezone',$any($event.target).value)">
            <option value="Asia/Dhaka">Asia/Dhaka</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end">
        <button class="bg-blue-600 text-white px-4 py-3 rounded-xl disabled:opacity-50 transition-all duration-300 hover:bg-blue-700 cursor-pointer" [disabled]="saving()"
                (click)="save()">Save Changes
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;72ce08b1c8fb04a74bec24a1a8f4213ff13d864b2a9f33ce901b0b571c03d629;D:/laragon-2025/laragon/www/assetGo-backend/assetGo-frontend/src/app/settings/components/date-time-settings.component.ts */\n.input {\n  width: 100%;\n  border-radius: 12px;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n}\n.input::placeholder {\n  color: #9ca3af;\n}\n.input:focus {\n  outline: none;\n  border-color: #3b82f6;\n  background: #ffffff;\n}\n/*# sourceMappingURL=date-time-settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateTimeSettingsComponent, { className: "DateTimeSettingsComponent", filePath: "src/app/settings/components/date-time-settings.component.ts", lineNumber: 178 });
})();

// src/app/settings/settings.component.ts
function SettingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("modules"));
    });
    \u0275\u0275text(1, " Modules ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_9_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTabChange("company"));
    });
    \u0275\u0275text(3, " Company ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r1.tab() === "modules" ? "!bg-blue-600 text-white" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r1.tab() === "company" ? "!bg-blue-600 text-white" : "");
  }
}
function SettingsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 7)(2, "h1", 8);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 9);
    \u0275\u0275element(4, "path", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Localization ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7, "Language, currency, and regional settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "currency-settings", 12)(9, "language-settings");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("disabled", !ctx_r1.isAdmin());
  }
}
function SettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "module-settings");
  }
}
function SettingsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "company-settings");
  }
}
function SettingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "preferences-settings");
  }
}
function SettingsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "date-time-settings");
  }
}
var SettingsComponent = class _SettingsComponent {
  access = inject(SettingsAccessService);
  auth = inject(AuthService);
  tab = signal("localisation");
  user = computed(() => this.auth.getCurrentUser());
  isAdmin = computed(() => this.access.isAdmin(this.user()));
  onTabChange(tab) {
    this.tab.set(tab);
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], decls: 19, vars: 9, consts: [[1, "p-6", "w-full"], [1, "max-w-6xl", "mx-auto"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-gray-600", "text-lg"], [1, "tabs", "bg-white", "shadow", "rounded-2xl", "grid", "grid-cols-1", "md:grid-cols-5", "lg:grid-cols-6", "gap-2", "p-2", "my-4", "text-center", "font-medium"], [1, "tab", "bg-white", "hover:bg-gray-200", "p-2", "rounded-lg", "cursor-pointer", 3, "click", "ngClass"], [1, "tab", "bg-white", "hover:bg-gray-200", "p-2", "rounded-lg", "cursor-pointer", "transition-all", "duration-200", 3, "click", "ngClass"], [1, "shadow", "bg-white", "p-5", "rounded-2xl", "mb-4"], [1, "text-2xl", "font-medium", "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-6", "h-6", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM2.25 12h19.5M12 2.25c3.5 3 3.5 16.5 0 19.5M12 2.25c-3.5 3-3.5 16.5 0 19.5"], [1, "text-gray-500", "mt-2", "text-sm"], [3, "disabled"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h4", 3);
      \u0275\u0275text(5, "Manage your application settings and preferences.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_7_listener() {
        return ctx.onTabChange("localisation");
      });
      \u0275\u0275text(8, " Localization ");
      \u0275\u0275elementEnd();
      \u0275\u0275template(9, SettingsComponent_Conditional_9_Template, 4, 2);
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_10_listener() {
        return ctx.onTabChange("preference");
      });
      \u0275\u0275text(11, " Preferences ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275listener("click", function SettingsComponent_Template_div_click_12_listener() {
        return ctx.onTabChange("date");
      });
      \u0275\u0275text(13, " Date & Time ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, SettingsComponent_Conditional_14_Template, 10, 1, "ng-container")(15, SettingsComponent_Conditional_15_Template, 1, 0, "module-settings")(16, SettingsComponent_Conditional_16_Template, 1, 0, "company-settings")(17, SettingsComponent_Conditional_17_Template, 1, 0, "preferences-settings")(18, SettingsComponent_Conditional_18_Template, 1, 0, "date-time-settings");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngClass", ctx.tab() === "localisation" ? "!bg-blue-600 text-white" : "");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isAdmin() ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.tab() === "preference" ? "!bg-blue-600 text-white" : "");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", ctx.tab() === "date" ? "!bg-blue-600 text-white" : "");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.tab() === "localisation" ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "modules" && ctx.isAdmin() ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "company" && ctx.isAdmin() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "preference" ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.tab() === "date" ? 18 : -1);
    }
  }, dependencies: [
    NgClass,
    CurrencySettingsComponent,
    LanguageSettingsComponent,
    CompanySettingsComponent,
    ModuleSettingsComponent,
    PreferencesComponent,
    DateTimeSettingsComponent
  ], styles: ["\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.5rem;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n}\n.input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n/*# sourceMappingURL=settings.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", imports: [
      NgClass,
      CurrencySettingsComponent,
      LanguageSettingsComponent,
      CompanySettingsComponent,
      ModuleSettingsComponent,
      PreferencesComponent,
      DateTimeSettingsComponent
    ], template: `<div class="p-6 w-full">\r
  <div class="max-w-6xl mx-auto">\r
    <!--Module heading-->\r
    <h1 class="text-2xl font-bold text-gray-900">Settings</h1>\r
    <h4 class="text-gray-600 text-lg">Manage your application settings and preferences.</h4>\r
\r
    <!--Tabs-->\r
    <div\r
      class="tabs bg-white shadow rounded-2xl grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-2 p-2 my-4 text-center font-medium">\r
      <div class="tab bg-white hover:bg-gray-200 p-2 rounded-lg cursor-pointer"\r
           [ngClass]="tab() === 'localisation' ? '!bg-blue-600 text-white' : ''" (click)="onTabChange('localisation')">\r
        Localization\r
      </div>\r
      @if (isAdmin()) {\r
        <div class="tab bg-white hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-all duration-200"\r
             [ngClass]="tab() === 'modules' ? '!bg-blue-600 text-white' : ''" (click)="onTabChange('modules')">\r
          Modules\r
        </div>\r
        <div class="tab bg-white hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-all duration-200"\r
             [ngClass]="tab() === 'company' ? '!bg-blue-600 text-white' : ''" (click)="onTabChange('company')">\r
          Company\r
        </div>\r
      }\r
      <div class="tab bg-white hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-all duration-200"\r
           [ngClass]="tab() === 'preference' ? '!bg-blue-600 text-white' : ''" (click)="onTabChange('preference')">\r
        Preferences\r
      </div>\r
      <div class="tab bg-white hover:bg-gray-200 p-2 rounded-lg cursor-pointer transition-all duration-200"\r
           [ngClass]="tab() === 'date' ? '!bg-blue-600 text-white' : ''" (click)="onTabChange('date')">\r
        Date & Time\r
      </div>\r
    </div>\r
\r
    <!--Module content-->\r
\r
    @if (tab() === 'localisation') {\r
      <ng-container>\r
        <div class="shadow bg-white p-5 rounded-2xl mb-4">\r
          <h1 class="text-2xl font-medium flex items-center gap-2">\r
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">\r
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM2.25 12h19.5M12 2.25c3.5 3 3.5 16.5 0 19.5M12 2.25c-3.5 3-3.5 16.5 0 19.5" />\r
            </svg>\r
            Localization\r
          </h1>\r
          <p class="text-gray-500 mt-2 text-sm">Language, currency, and regional settings</p>\r
        </div>\r
\r
        <currency-settings [disabled]="!isAdmin()"></currency-settings>\r
        <language-settings></language-settings>\r
      </ng-container>\r
    }\r
\r
    @if (tab() === 'modules' && isAdmin()) {\r
      <module-settings></module-settings>\r
    }\r
\r
    @if (tab() === 'company' && isAdmin()) {\r
      <company-settings></company-settings>\r
    }\r
\r
    @if (tab() === 'preference') {\r
      <preferences-settings></preferences-settings>\r
    }\r
\r
    @if (tab() === 'date') {\r
      <date-time-settings></date-time-settings>\r
    }\r
\r
  </div>\r
</div>\r
`, styles: ["/* src/app/settings/settings.component.scss */\n.input {\n  width: 100%;\n  border-radius: 0.5rem;\n  border: 1px solid #d1d5db;\n  padding: 0.75rem 0.875rem;\n  font-size: 1rem;\n  background: #ffffff;\n  transition: all 0.2s ease-in-out;\n}\n.input::placeholder {\n  color: #9ca3af;\n}\n/*# sourceMappingURL=settings.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/settings/settings.component.ts", lineNumber: 23 });
})();

// src/app/core/guards/module.guard.ts
var moduleGuard = (moduleKey) => {
  return () => {
    const settings = inject(SettingsService);
    const router = inject(Router);
    return settings.listModules().pipe(map((res) => {
      const enabled = {};
      const modules = res?.data?.modules ?? [];
      modules.forEach((m) => enabled[m.key] = !!m.is_enabled);
      const ok = !!enabled[moduleKey];
      if (!ok) {
        router.navigate(["/settings"], { queryParams: { module_disabled: moduleKey } });
      }
      return ok;
    }), catchError(() => {
      router.navigate(["/settings"]);
      return of(false);
    }));
  };
};

// src/app/app.routes.ts
var routes = [
  { path: "", component: LandingComponent },
  {
    path: "",
    loadChildren: () => import("./chunk-TP2I3ZDA.js").then((m) => m.AuthModule)
  },
  // Public asset view route (no authentication required)
  {
    path: "public/asset/:id",
    loadComponent: () => import("./chunk-6JL7CLZ3.js").then((m) => m.PublicAssetViewComponent)
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./chunk-W5Y6X4NW.js").then((m) => m.DashboardModule)
      },
      {
        path: "locations",
        loadChildren: () => import("./chunk-RLATL3VN.js").then((m) => m.LocationsModule)
      },
      {
        path: "assets",
        loadChildren: () => import("./chunk-6XT3N7CY.js").then((m) => m.AssetsModule),
        canActivate: [moduleGuard("assets")]
      },
      {
        path: "roles",
        loadChildren: () => import("./chunk-VBZZMW6Y.js").then((m) => m.RolesModule)
      },
      {
        path: "teams",
        loadChildren: () => import("./chunk-2GYKE73M.js").then((m) => m.TeamsModule)
      },
      {
        path: "work-orders",
        loadChildren: () => import("./chunk-LEW6GDQD.js").then((m) => m.WorkOrdersModule),
        canActivate: [moduleGuard("work_orders")]
      },
      {
        path: "inventory",
        loadChildren: () => import("./chunk-7PR2LZRS.js").then((m) => m.InventoryModule),
        canActivate: [moduleGuard("inventory")]
      },
      {
        path: "maintenance",
        loadChildren: () => import("./chunk-BUQDOCGC.js").then((m) => m.MaintenanceModule),
        canActivate: [moduleGuard("maintenance")]
      },
      {
        path: "settings",
        component: SettingsComponent,
        title: "Settings"
      },
      {
        path: "ai",
        loadComponent: () => import("./chunk-M5RCE2CT.js").then((m) => m.AIFeaturesComponent),
        title: "AI Features"
      },
      {
        path: "ai/image-recognition",
        loadComponent: () => import("./chunk-HWPHV3LR.js").then((m) => m.AIImageRecognitionComponent),
        title: "AI Image Recognition"
      },
      {
        path: "reports",
        loadChildren: () => import("./chunk-V34D2O2G.js").then((m) => m.ReportsModule)
      }
    ]
  },
  // Template download routes
  { path: "templates/asset-import", redirectTo: "/assets/asset-import-template.csv" },
  { path: "templates/asset-import.csv", redirectTo: "/assets/asset-import-template.csv" },
  { path: "templates/asset-import.xlsx", redirectTo: "/assets/asset-import-template.xlsx" },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var AuthInterceptor = class _AuthInterceptor {
  authService;
  constructor(authService) {
    this.authService = authService;
  }
  intercept(req, next) {
    const token = this.authService.getToken();
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${token}`)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
  static \u0275fac = function AuthInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthInterceptor)(\u0275\u0275inject(AuthService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthInterceptor, factory: _AuthInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthInterceptor, [{
    type: Injectable
  }], () => [{ type: AuthService }], null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Use DI-based interceptors so our class-based AuthInterceptor runs
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};

// src/app/shared/components/import-progress-popup/import-progress-popup.component.ts
function ImportProgressPopupComponent_div_0_div_11_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.state.importResults.total_assets, " assets to process ");
  }
}
function ImportProgressPopupComponent_div_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "p", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ImportProgressPopupComponent_div_0_div_11_p_3_Template, 2, 1, "p", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.state.importResults.file_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.importResults == null ? null : ctx_r0.state.importResults.total_assets);
  }
}
function ImportProgressPopupComponent_div_0_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ImportProgressPopupComponent_div_0_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.closeProgressBox());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "path", 25);
    \u0275\u0275elementEnd()();
  }
}
function ImportProgressPopupComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 26);
    \u0275\u0275element(2, "circle", 27)(3, "path", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "Processing...");
    \u0275\u0275elementEnd()();
  }
}
function ImportProgressPopupComponent_div_0_div_22_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "button", 45);
    \u0275\u0275listener("click", function ImportProgressPopupComponent_div_0_div_22_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.downloadFailedImportsCSV());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 43);
    \u0275\u0275element(3, "path", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Download Failed Imports CSV ");
    \u0275\u0275elementEnd()();
  }
}
function ImportProgressPopupComponent_div_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 3);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 30);
    \u0275\u0275element(3, "path", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 32);
    \u0275\u0275text(5, "Import Complete!");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 33)(7, "div", 34)(8, "div", 35)(9, "div", 36);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37);
    \u0275\u0275text(12, "Successful");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 35)(14, "div", 38);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 37);
    \u0275\u0275text(17, "Failed");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 35)(19, "div", 39);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 37);
    \u0275\u0275text(22, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, ImportProgressPopupComponent_div_0_div_22_div_23_Template, 5, 0, "div", 40);
    \u0275\u0275elementStart(24, "div", 41)(25, "button", 42);
    \u0275\u0275listener("click", function ImportProgressPopupComponent_div_0_div_22_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToAssetList());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 43);
    \u0275\u0275element(27, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Go to Asset List ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate((ctx_r0.state.importResults == null ? null : ctx_r0.state.importResults.successful_imports) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.state.importResults == null ? null : ctx_r0.state.importResults.failed_imports) || 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.state.importResults == null ? null : ctx_r0.state.importResults.total_assets) || 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r0.state.importResults == null ? null : ctx_r0.state.importResults.failed_imports) > 0);
  }
}
function ImportProgressPopupComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "p", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Job ID: ", ctx_r0.state.currentJobId, "");
  }
}
function ImportProgressPopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 5);
    \u0275\u0275element(5, "path", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 7)(7, "h3", 8);
    \u0275\u0275text(8, "Asset Import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ImportProgressPopupComponent_div_0_div_11_Template, 4, 2, "div", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ImportProgressPopupComponent_div_0_button_12_Template, 3, 0, "button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "span");
    \u0275\u0275text(16, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14);
    \u0275\u0275element(20, "div", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ImportProgressPopupComponent_div_0_div_21_Template, 6, 0, "div", 16)(22, ImportProgressPopupComponent_div_0_div_22_Template, 29, 4, "div", 17)(23, ImportProgressPopupComponent_div_0_div_23_Template, 3, 1, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.state.progressMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.importResults == null ? null : ctx_r0.state.importResults.file_name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.isCompleted);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.state.progressPercentage, "%");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.state.progressPercentage, "%");
    \u0275\u0275classProp("bg-blue-600", !ctx_r0.state.isCompleted)("bg-green-600", ctx_r0.state.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.state.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.isCompleted === true);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.state.currentJobId);
  }
}
var ImportProgressPopupComponent = class _ImportProgressPopupComponent {
  importProgressService;
  router;
  destroy$ = new Subject();
  state = {
    showProgressBox: false,
    currentJobId: null,
    progressPercentage: 0,
    progressMessage: "Starting import...",
    isCompleted: false,
    isImportComplete: false,
    importResults: null,
    failedImportsCsvData: null
  };
  constructor(importProgressService, router) {
    this.importProgressService = importProgressService;
    this.router = router;
  }
  ngOnInit() {
    this.importProgressService.state$.pipe(takeUntil(this.destroy$)).subscribe((state) => {
      this.state = state;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  /**
   * Close the progress box
   */
  closeProgressBox() {
    this.importProgressService.closeProgressBox();
  }
  /**
   * Download failed imports CSV
   */
  downloadFailedImportsCSV() {
    this.importProgressService.downloadFailedImportsCSV();
  }
  /**
   * Navigate to asset list page
   */
  goToAssetList() {
    this.router.navigate(["/assets/list"]);
  }
  static \u0275fac = function ImportProgressPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImportProgressPopupComponent)(\u0275\u0275directiveInject(ImportProgressService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImportProgressPopupComponent, selectors: [["app-import-progress-popup"]], decls: 1, vars: 1, consts: [["class", "fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-[420px] z-50", 4, "ngIf"], [1, "fixed", "bottom-6", "right-6", "bg-white", "rounded-xl", "shadow-2xl", "border", "border-gray-200", "p-6", "w-[420px]", "z-50"], [1, "flex", "items-start", "justify-between", "mb-4"], [1, "flex", "items-center"], [1, "w-8", "h-8", "bg-blue-100", "rounded-full", "flex", "items-center", "justify-center", "mr-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"], [1, "flex-1"], [1, "font-semibold", "text-gray-900"], [1, "text-sm", "text-gray-600"], ["class", "mt-2", 4, "ngIf"], ["class", "text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0", 3, "click", 4, "ngIf"], [1, "mb-4"], [1, "flex", "justify-between", "text-sm", "text-gray-600", "mb-2"], [1, "w-full", "bg-gray-200", "rounded-full", "h-2"], [1, "h-2", "rounded-full", "transition-all", "duration-300"], ["class", "flex items-center", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "mt-3 pt-3 border-t border-gray-100", 4, "ngIf"], [1, "mt-2"], [1, "text-xs", "text-gray-500", "truncate"], ["class", "text-xs text-gray-500", 4, "ngIf"], [1, "text-xs", "text-gray-500"], [1, "text-gray-400", "hover:text-gray-600", "ml-2", "flex-shrink-0", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-4", "w-4", "text-blue"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"], [1, "space-y-4"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-4", "h-4", "text-green-600", "mr-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-sm", "font-medium", "text-green-600"], [1, "bg-gray-50", "rounded-lg", "p-3", "space-y-2"], [1, "grid", "grid-cols-3", "gap-2", "text-xs"], [1, "text-center"], [1, "font-semibold", "text-green-700"], [1, "text-gray-600"], [1, "font-semibold", "text-red-700"], [1, "font-semibold", "text-gray-700"], ["class", "pt-2 border-t border-gray-200", 4, "ngIf"], [1, "pt-2", "border-t", "border-gray-200"], [1, "w-full", "text-xs", "bg-blue-50", "hover:bg-blue-100", "text-blue-700", "px-2", "py-1", "rounded", "transition-colors", "flex", "items-center", "justify-center", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-3", "h-3", "mr-1"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "w-full", "text-xs", "bg-red-50", "hover:bg-red-100", "text-red-700", "px-2", "py-1", "rounded", "transition-colors", "flex", "items-center", "justify-center", "mb-2", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"], [1, "mt-3", "pt-3", "border-t", "border-gray-100"], [1, "text-xs", "text-gray-400", "font-mono"]], template: function ImportProgressPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ImportProgressPopupComponent_div_0_Template, 24, 13, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.state.showProgressBox);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n}\n.popup-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n}\n.popup-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideInUp 0.3s ease-out;\n}\n.popup-exit[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideOutDown 0.3s ease-in;\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideOutDown {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=import-progress-popup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportProgressPopupComponent, [{
    type: Component,
    args: [{ selector: "app-import-progress-popup", standalone: true, imports: [CommonModule], template: '<!-- Import Progress Popup -->\r\n<div *ngIf="state.showProgressBox" class="fixed bottom-6 right-6 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-[420px] z-50">\r\n  <div class="flex items-start justify-between mb-4">\r\n    <div class="flex items-center">\r\n      <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">\r\n        <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>\r\n        </svg>\r\n      </div>\r\n      <div class="flex-1">\r\n        <h3 class="font-semibold text-gray-900">Asset Import</h3>\r\n        <p class="text-sm text-gray-600">{{ state.progressMessage }}</p>\r\n        <div *ngIf="state.importResults?.file_name" class="mt-2">\r\n          <p class="text-xs text-gray-500 truncate">{{ state.importResults.file_name }}</p>\r\n          <p class="text-xs text-gray-500" *ngIf="state.importResults?.total_assets">\r\n            {{ state.importResults.total_assets }} assets to process\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button *ngIf="state.isCompleted" (click)="closeProgressBox()" class="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0">\r\n      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>\r\n      </svg>\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Progress Bar -->\r\n  <div class="mb-4">\r\n    <div class="flex justify-between text-sm text-gray-600 mb-2">\r\n      <span>Progress</span>\r\n      <span>{{ state.progressPercentage }}%</span>\r\n    </div>\r\n    <div class="w-full bg-gray-200 rounded-full h-2">\r\n      <div class="h-2 rounded-full transition-all duration-300"\r\n           [class.bg-blue-600]="!state.isCompleted"\r\n           [class.bg-green-600]="state.isCompleted"\r\n           [style.width.%]="state.progressPercentage">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Processing Status (when not completed) -->\r\n  <div class="flex items-center" *ngIf="!state.isCompleted">\r\n    <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-blue" fill="none" viewBox="0 0 24 24">\r\n      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\r\n      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\r\n    </svg>\r\n    <span class="text-sm text-gray-600">Processing...</span>\r\n  </div>\r\n\r\n  <!-- Completion Report -->\r\n  <div *ngIf="state.isCompleted === true" class="space-y-4">\r\n    <!-- Summary Header -->\r\n    <div class="flex items-center">\r\n      <svg class="w-4 h-4 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>\r\n      </svg>\r\n      <span class="text-sm font-medium text-green-600">Import Complete!</span>\r\n    </div>\r\n\r\n    <!-- Import Statistics -->\r\n    <div class="bg-gray-50 rounded-lg p-3 space-y-2">\r\n      <div class="grid grid-cols-3 gap-2 text-xs">\r\n        <div class="text-center">\r\n          <div class="font-semibold text-green-700">{{ state.importResults?.successful_imports || 0 }}</div>\r\n          <div class="text-gray-600">Successful</div>\r\n        </div>\r\n        <div class="text-center">\r\n          <div class="font-semibold text-red-700">{{ state.importResults?.failed_imports || 0 }}</div>\r\n          <div class="text-gray-600">Failed</div>\r\n        </div>\r\n        <div class="text-center">\r\n          <div class="font-semibold text-gray-700">{{ state.importResults?.total_assets || 0 }}</div>\r\n          <div class="text-gray-600">Total</div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Failed Imports Actions -->\r\n      <div *ngIf="state.importResults?.failed_imports > 0" class="pt-2 border-t border-gray-200">\r\n        <button\r\n          (click)="downloadFailedImportsCSV()"\r\n          class="w-full text-xs bg-red-50 hover:bg-red-100 text-red-700 px-2 py-1 rounded transition-colors flex items-center justify-center mb-2">\r\n          <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>\r\n          </svg>\r\n          Download Failed Imports CSV\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Go to Asset List Button -->\r\n      <div class="pt-2 border-t border-gray-200">\r\n        <button\r\n          (click)="goToAssetList()"\r\n          class="w-full text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 px-2 py-1 rounded transition-colors flex items-center justify-center">\r\n          <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">\r\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>\r\n          </svg>\r\n          Go to Asset List\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Job ID for debugging/tracking -->\r\n  <div *ngIf="state.currentJobId" class="mt-3 pt-3 border-t border-gray-100">\r\n    <p class="text-xs text-gray-400 font-mono">Job ID: {{ state.currentJobId }}</p>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/shared/components/import-progress-popup/import-progress-popup.component.scss */\n:host {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n}\n.popup-container {\n  position: fixed;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  z-index: 9999;\n}\n.popup-enter {\n  animation: slideInUp 0.3s ease-out;\n}\n.popup-exit {\n  animation: slideOutDown 0.3s ease-in;\n}\n@keyframes slideInUp {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes slideOutDown {\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=import-progress-popup.component.css.map */\n"] }]
  }], () => [{ type: ImportProgressService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImportProgressPopupComponent, { className: "ImportProgressPopupComponent", filePath: "src/app/shared/components/import-progress-popup/import-progress-popup.component.ts", lineNumber: 14 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "assetGo-frontend";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet")(1, "app-import-progress-popup");
    }
  }, dependencies: [RouterOutlet, ImportProgressPopupComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, ImportProgressPopupComponent], template: "<router-outlet></router-outlet>\r\n\r\n<!-- Global Import Progress Popup -->\r\n<app-import-progress-popup></app-import-progress-popup>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 12 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/util-D9FfmVnv.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.14
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
