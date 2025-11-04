import {
  E,
  autoTable
} from "./chunk-PQORQOZW.js";
import {
  AssetService
} from "./chunk-XSZSUCV7.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-AZ7SEGL7.js";
import {
  CommonModule,
  Location,
  NgForOf,
  NgIf
} from "./chunk-ENJBTPXH.js";
import {
  Component,
  Injectable,
  Subject,
  ViewChildren,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-SCVX3V3B.js";
import {
  __commonJS,
  __toESM
} from "./chunk-TXDUYLVM.js";

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    "use strict";
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    "use strict";
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    "use strict";
    exports.L = {
      bit: 1
    };
    exports.M = {
      bit: 0
    };
    exports.Q = {
      bit: 3
    };
    exports.H = {
      bit: 2
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    "use strict";
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    "use strict";
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    "use strict";
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    "use strict";
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    "use strict";
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    "use strict";
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    "use strict";
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    "use strict";
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    "use strict";
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    "use strict";
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    "use strict";
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    "use strict";
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error("Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8");
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t[key] = T[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T.default_sorter;
          return t;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = {
            value,
            cost
          };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    "use strict";
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.ALPHANUMERIC,
              length: seg.length
            }, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;
          case Mode.KANJI:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
            break;
          case Mode.BYTE:
            nodes.push([{
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table = {};
      const graph = {
        start: {}
      };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table[key] = {
            node,
            lastCount: 0
          };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return {
        map: graph,
        table
      };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path.length - 1; i++) {
        optimizedSegs.push(graph.table[path[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    "use strict";
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    "use strict";
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size, size);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    "use strict";
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    "use strict";
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// src/app/assets/components/public-asset-view/public-asset-view.component.ts
var QRCode = __toESM(require_browser());

// src/app/shared/services/pdf-export.service.ts
var PdfExportService = class _PdfExportService {
  constructor() {
  }
  exportAssetsToPdf(assets, title = "Asset Export Report") {
    console.log("Exporting assets to PDF:", assets.length, "assets");
    const doc = new E();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(title, margin, 30);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const currentDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
    doc.text(`Generated on: ${currentDate}`, margin, 45);
    const tableData = assets.map((asset) => [
      asset.asset_id || `AST-${asset.id}` || "",
      asset.name || "",
      asset.manufacturer || "",
      asset.model || "",
      asset.status || "Active",
      asset.location?.name || ""
    ]);
    console.log("Table data prepared:", tableData);
    autoTable(doc, {
      head: [["ID", "Name", "Manufacturer", "Model", "Status", "Location"]],
      body: tableData,
      startY: 60,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 9,
        cellPadding: 3,
        halign: "left"
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: "bold"
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      columnStyles: {
        0: { cellWidth: 25 },
        // ID
        1: { cellWidth: 40 },
        // Name
        2: { cellWidth: 30 },
        // Manufacturer
        3: { cellWidth: 30 },
        // Model
        4: { cellWidth: 20 },
        // Status
        5: { cellWidth: 35 }
        // Location
      }
    });
    console.log("PDF table created, saving file...");
    const fileName = `asset-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.pdf`;
    console.log("Saving PDF as:", fileName);
    doc.save(fileName);
  }
  exportSingleAssetToPdf(asset) {
    const doc = new E();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text("Asset Details Report", margin, 30);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    const currentDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    });
    doc.text(`Generated on: ${currentDate}`, margin, 45);
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(asset.name || "Unnamed Asset", margin, 65);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Asset ID: ${asset.asset_id || asset.id}`, margin, 75);
    if (asset.status) {
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(0, 128, 0);
      doc.text(`Status: ${asset.status.toUpperCase()}`, margin, 85);
      doc.setTextColor(0, 0, 0);
    }
    let yPosition = 100;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Basic Information", margin, yPosition);
    yPosition += 15;
    const basicInfo = [
      ["Category", asset.category?.name || "General"],
      ["Asset Type", asset.type || "Standard Asset"],
      ["Location", asset.location?.name || "Not specified"],
      ["Department", asset.department?.name || "Not specified"],
      ["Supplier", asset.supplier || "Not specified"],
      ["Description", asset.description || "No description available"]
    ];
    autoTable(doc, {
      body: basicInfo,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: "bold" },
        1: { cellWidth: 120 }
      },
      theme: "plain"
    });
    yPosition = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Technical Specifications", margin, yPosition);
    yPosition += 15;
    const techSpecs = [
      ["Manufacturer", asset.manufacturer || "Not specified"],
      ["Model Number", asset.model || "Not specified"],
      ["Serial Number", asset.serial_number || "Not specified"],
      ["Brand", asset.brand || "Not specified"]
    ];
    autoTable(doc, {
      body: techSpecs,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: "bold" },
        1: { cellWidth: 120 }
      },
      theme: "plain"
    });
    yPosition = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Financial Information", margin, yPosition);
    yPosition += 15;
    const financialInfo = [
      ["Purchase Cost", asset.purchase_price ? `$${asset.purchase_price.toLocaleString()}` : "$0"],
      ["Current Value", asset.current_value ? `$${asset.current_value.toLocaleString()}` : "$0"],
      ["Purchase Date", asset.purchase_date || "Not specified"],
      ["Depreciation Method", "Straight Line"],
      ["Useful Life", asset.depreciation ? `${asset.depreciation} years` : "10 years"]
    ];
    autoTable(doc, {
      body: financialInfo,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: "bold" },
        1: { cellWidth: 120 }
      },
      theme: "plain"
    });
    yPosition = doc.lastAutoTable.finalY + 20;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Health & Performance", margin, yPosition);
    yPosition += 15;
    const healthInfo = [
      ["Health Score", `${asset.health_score || 85}%`],
      ["Performance Status", "Excellent Health"],
      ["Last Assessment", "Not specified"],
      ["Next Assessment", "Not scheduled"]
    ];
    autoTable(doc, {
      body: healthInfo,
      startY: yPosition,
      margin: { left: margin, right: margin },
      styles: {
        fontSize: 10,
        cellPadding: 3
      },
      columnStyles: {
        0: { cellWidth: 40, fontStyle: "bold" },
        1: { cellWidth: 120 }
      },
      theme: "plain"
    });
    const fileName = `asset-${asset.asset_id || asset.id}-${currentDate.replace(/\//g, "-")}.pdf`;
    doc.save(fileName);
  }
  static \u0275fac = function PdfExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PdfExportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PdfExportService, factory: _PdfExportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PdfExportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/assets/components/public-asset-view/public-asset-view.component.ts
var _c0 = ["dateInput"];
function PublicAssetViewComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "div", 18);
    \u0275\u0275elementStart(3, "p", 19);
    \u0275\u0275text(4, "Loading asset details...");
    \u0275\u0275elementEnd()()();
  }
}
function PublicAssetViewComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 22);
    \u0275\u0275element(3, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "div")(5, "h3", 24);
    \u0275\u0275text(6, "Error Loading Asset");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function PublicAssetViewComponent_div_18_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_button_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyAssetId());
    });
    \u0275\u0275text(1, " Copy ID ");
    \u0275\u0275elementEnd();
  }
}
function PublicAssetViewComponent_div_18_img_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 48);
    \u0275\u0275listener("error", function PublicAssetViewComponent_div_18_img_38_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCategoryIconError($event, ctx_r0.asset.category));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.asset.category.icon, \u0275\u0275sanitizeUrl)("alt", ctx_r0.asset.category.name);
  }
}
function PublicAssetViewComponent_div_18_button_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_button_72_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyAssetId());
    });
    \u0275\u0275text(1, " Copy ");
    \u0275\u0275elementEnd();
  }
}
function PublicAssetViewComponent_div_18_button_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_button_79_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copySerialNumber());
    });
    \u0275\u0275text(1, " Copy ");
    \u0275\u0275elementEnd();
  }
}
function PublicAssetViewComponent_div_18_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "img", 50);
    \u0275\u0275elementStart(2, "div", 51)(3, "button", 47);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_div_84_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadQRCode());
    });
    \u0275\u0275text(4, " Download ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_div_84_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyPublicUrl());
    });
    \u0275\u0275text(6, " Copy URL ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.qrCodeDataUrl, \u0275\u0275sanitizeUrl);
  }
}
function PublicAssetViewComponent_div_18_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "img", 50);
    \u0275\u0275elementStart(2, "div", 51)(3, "button", 47);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_div_85_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadQRCode());
    });
    \u0275\u0275text(4, " Download ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 47);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_div_85_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.copyQRCodeUrl());
    });
    \u0275\u0275text(6, " Copy URL ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.asset.qr_code_url, \u0275\u0275sanitizeUrl);
  }
}
function PublicAssetViewComponent_div_18_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 52);
    \u0275\u0275element(2, "div", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 9);
    \u0275\u0275text(4, "Generating QR Code...");
    \u0275\u0275elementEnd()();
  }
}
function PublicAssetViewComponent_div_18_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 55);
    \u0275\u0275element(3, "path", 23);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span", 9);
    \u0275\u0275text(5, "QR Code not available");
    \u0275\u0275elementEnd()();
  }
}
function PublicAssetViewComponent_div_18_p_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("Public URL: ", ctx_r0.windowLocation, "/public/asset/", ctx_r0.asset.id, "");
  }
}
function PublicAssetViewComponent_div_18_div_143_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_18_div_143_div_6_Template_div_click_0_listener() {
      const image_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.viewFullImage(image_r9));
    });
    \u0275\u0275elementStart(1, "img", 60);
    \u0275\u0275listener("error", function PublicAssetViewComponent_div_18_div_143_div_6_Template_img_error_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onImageError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 62);
    \u0275\u0275element(4, "path", 63);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const image_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r9, \u0275\u0275sanitizeUrl)("alt", "Asset image " + (i_r10 + 1));
  }
}
function PublicAssetViewComponent_div_18_div_143_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "h2", 36);
    \u0275\u0275text(3, "Images");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 37)(5, "div", 57);
    \u0275\u0275template(6, PublicAssetViewComponent_div_18_div_143_div_6_Template, 5, 2, "div", 58);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r0.asset.images);
  }
}
function PublicAssetViewComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "div", 28)(3, "div", 4)(4, "div", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div")(8, "h1", 30);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 32)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PublicAssetViewComponent_div_18_button_17_Template, 2, 0, "button", 33);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "div", 34)(19, "div", 35)(20, "h2", 36);
    \u0275\u0275text(21, "Basic Information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 37)(23, "div", 38)(24, "div")(25, "label", 39);
    \u0275\u0275text(26, "Asset Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 40);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "label", 39);
    \u0275\u0275text(31, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p", 40);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "label", 39);
    \u0275\u0275text(36, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 5);
    \u0275\u0275template(38, PublicAssetViewComponent_div_18_img_38_Template, 1, 2, "img", 41);
    \u0275\u0275elementStart(39, "span", 40);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div")(42, "label", 39);
    \u0275\u0275text(43, "Current Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "label", 39);
    \u0275\u0275text(48, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 40);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div")(52, "label", 39);
    \u0275\u0275text(53, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "p", 40);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div")(57, "label", 39);
    \u0275\u0275text(58, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "p", 40);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div")(62, "label", 39);
    \u0275\u0275text(63, "Last Modified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p", 40);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div")(67, "label", 39);
    \u0275\u0275text(68, "Asset ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 5)(70, "p", 40);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275template(72, PublicAssetViewComponent_div_18_button_72_Template, 2, 0, "button", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div")(74, "label", 39);
    \u0275\u0275text(75, "Serial Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 5)(77, "p", 40);
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275template(79, PublicAssetViewComponent_div_18_button_79_Template, 2, 0, "button", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 42)(81, "label", 39);
    \u0275\u0275text(82, "QR Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 4);
    \u0275\u0275template(84, PublicAssetViewComponent_div_18_div_84_Template, 7, 1, "div", 43)(85, PublicAssetViewComponent_div_18_div_85_Template, 7, 1, "div", 43)(86, PublicAssetViewComponent_div_18_div_86_Template, 5, 0, "div", 43)(87, PublicAssetViewComponent_div_18_div_87_Template, 6, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div", 44)(89, "p");
    \u0275\u0275text(90, "Scan this QR code to access this asset's public page");
    \u0275\u0275elementEnd();
    \u0275\u0275template(91, PublicAssetViewComponent_div_18_p_91_Template, 2, 2, "p", 45);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(92, "div", 34)(93, "div", 35)(94, "h2", 36);
    \u0275\u0275text(95, "Asset Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 37)(97, "div", 38)(98, "div")(99, "label", 39);
    \u0275\u0275text(100, "Asset Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "p", 40);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(103, "div")(104, "label", 39);
    \u0275\u0275text(105, "Model");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "p", 40);
    \u0275\u0275text(107);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(108, "div")(109, "label", 39);
    \u0275\u0275text(110, "Manufacturer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p", 40);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "div")(114, "label", 39);
    \u0275\u0275text(115, "Purchase Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "p", 40);
    \u0275\u0275text(117);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div")(119, "label", 39);
    \u0275\u0275text(120, "Purchase Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "p", 40);
    \u0275\u0275text(122);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div")(124, "label", 39);
    \u0275\u0275text(125, "Depreciation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "p", 40);
    \u0275\u0275text(127);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(128, "div")(129, "label", 39);
    \u0275\u0275text(130, "Warranty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p", 40);
    \u0275\u0275text(132);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div")(134, "label", 39);
    \u0275\u0275text(135, "Insurance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "p", 40);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(138, "div")(139, "label", 39);
    \u0275\u0275text(140, "Health Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "p", 40);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(143, PublicAssetViewComponent_div_18_div_143_Template, 7, 1, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.asset.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.asset.description || "No description available");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ", ctx_r0.getStatusColorFromAssetStatus(ctx_r0.asset.asset_status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.asset.asset_status == null ? null : ctx_r0.asset.asset_status.name) || ctx_r0.asset.status || "Unknown", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("ID: ", ctx_r0.asset.id, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.asset.id);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.asset.name || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.description || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.asset.category == null ? null : ctx_r0.asset.category.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.asset.category == null ? null : ctx_r0.asset.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ", ctx_r0.getStatusColorFromAssetStatus(ctx_r0.asset.asset_status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.asset.asset_status == null ? null : ctx_r0.asset.asset_status.name) || ctx_r0.asset.status || "N/A", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.asset.location == null ? null : ctx_r0.asset.location.name) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.asset.department == null ? null : ctx_r0.asset.department.name) || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.asset.created_at));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.asset.updated_at));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.asset.id || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.asset.id);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.asset.serial_number || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.asset.serial_number);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.qrCodeDataUrl);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.qrCodeDataUrl && ctx_r0.asset.qr_code_url);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.qrCodeLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.qrCodeDataUrl && !ctx_r0.asset.qr_code_url && !ctx_r0.qrCodeLoading);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.asset.id);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.getAssetTypeName(ctx_r0.asset.asset_type));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.model || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.manufacturer || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(ctx_r0.asset.purchase_date));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.purchase_price ? "$" + ctx_r0.asset.purchase_price : "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.depreciation || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.warranty || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.insurance || "N/A");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.asset.health_score || "N/A");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.asset.images && ctx_r0.asset.images.length > 0);
  }
}
function PublicAssetViewComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_19_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeImageModal());
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_19_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 66);
    \u0275\u0275listener("click", function PublicAssetViewComponent_div_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeImageModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 67);
    \u0275\u0275element(4, "path", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(5, "img", 69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx_r0.selectedImageUrl, \u0275\u0275sanitizeUrl);
  }
}
var PublicAssetViewComponent = class _PublicAssetViewComponent {
  route;
  router;
  assetService;
  angularLocation;
  pdfExportService;
  destroy$ = new Subject();
  dateInputs;
  asset = null;
  loading = true;
  error = "";
  // Image gallery state
  currentImageIndex = 0;
  selectedImageUrl = null;
  // UI state
  descriptionExpanded = false;
  // QR Code state
  qrCodeDataUrl = null;
  qrCodeLoading = false;
  constructor(route, router, assetService, angularLocation, pdfExportService) {
    this.route = route;
    this.router = router;
    this.assetService = assetService;
    this.angularLocation = angularLocation;
    this.pdfExportService = pdfExportService;
  }
  ngOnInit() {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const id = params["id"];
      if (id) {
        this.loadAsset(id);
      }
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAsset(id) {
    this.loading = true;
    this.error = "";
    this.assetService.getAssetPublic(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.asset = response.data;
        this.loading = false;
        this.generateQRCode();
      },
      error: (error) => {
        console.error("Error loading asset:", error);
        this.error = "Failed to load asset details. Please check the URL and try again.";
        this.loading = false;
      }
    });
  }
  generateQRCode() {
    if (!this.asset)
      return;
    this.qrCodeLoading = true;
    const publicUrl = `${window.location.origin}/public/asset/${this.asset.id}`;
    QRCode.toDataURL(publicUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: "#000000",
        light: "#FFFFFF"
      }
    }).then((dataUrl) => {
      this.qrCodeDataUrl = dataUrl;
      this.qrCodeLoading = false;
    }).catch((error) => {
      console.error("Error generating QR code:", error);
      this.qrCodeLoading = false;
    });
  }
  downloadQRCode() {
    if (this.qrCodeDataUrl) {
      const link = document.createElement("a");
      link.href = this.qrCodeDataUrl;
      link.download = `asset-${this.asset.id}-qr.png`;
      link.click();
    } else if (this.asset?.qr_code_url) {
      const link = document.createElement("a");
      link.href = this.asset.qr_code_url;
      link.download = `asset-${this.asset.id}-qr.png`;
      link.click();
    }
  }
  copyQRCodeUrl() {
    if (this.asset?.qr_code_url) {
      navigator.clipboard.writeText(this.asset.qr_code_url).then(() => {
        console.log("QR code URL copied to clipboard");
      });
    }
  }
  copyPublicUrl() {
    const publicUrl = `${window.location.origin}/public/asset/${this.asset.id}`;
    navigator.clipboard.writeText(publicUrl).then(() => {
      console.log("Public URL copied to clipboard");
    });
  }
  get windowLocation() {
    return window.location.origin;
  }
  getStatusColor(status) {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      case "maintenance":
        return "bg-yellow-100 text-yellow-800";
      case "retired":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  }
  getStatusColorFromAssetStatus(assetStatus) {
    if (!assetStatus)
      return "bg-gray-100 text-gray-800";
    if (assetStatus.color) {
      const colorMap = {
        "#9CA3AF": "bg-gray-100 text-gray-800",
        "#EF4444": "bg-red-100 text-red-800",
        "#10B981": "bg-green-100 text-green-800",
        "#F59E0B": "bg-yellow-100 text-yellow-800",
        "#3B82F6": "bg-blue-100 text-blue-800",
        "#8B5CF6": "bg-purple-100 text-purple-800",
        "#EC4899": "bg-pink-100 text-pink-800",
        "#F97316": "bg-orange-100 text-orange-800"
      };
      return colorMap[assetStatus.color] || this.getStatusColor(assetStatus.name);
    }
    return this.getStatusColor(assetStatus.name);
  }
  getAssetTypeIcon() {
    if (!this.asset?.type)
      return "cube";
    const typeName = this.asset.type.toLowerCase();
    if (typeName.includes("computer") || typeName.includes("laptop"))
      return "computer";
    if (typeName.includes("furniture"))
      return "couch";
    if (typeName.includes("vehicle"))
      return "truck";
    if (typeName.includes("building"))
      return "building";
    if (typeName.includes("equipment"))
      return "wrench";
    return "cube";
  }
  formatDate(date) {
    if (!date)
      return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  getAssetTypeName(assetType) {
    if (!assetType)
      return "N/A";
    return assetType.name || "N/A";
  }
  onImageError(event) {
    event.target.style.display = "none";
  }
  onCategoryIconError(event, category) {
    event.target.src = "/assets/icons/cube.svg";
  }
  copyAssetId() {
    if (this.asset?.id) {
      navigator.clipboard.writeText(this.asset.id.toString()).then(() => {
        console.log("Asset ID copied to clipboard");
      });
    }
  }
  copySerialNumber() {
    if (this.asset?.serial_number) {
      navigator.clipboard.writeText(this.asset.serial_number).then(() => {
        console.log("Serial number copied to clipboard");
      });
    }
  }
  selectImage(index) {
    if (this.asset?.images && this.asset.images[index]) {
      this.currentImageIndex = index;
      this.selectedImageUrl = this.asset.images[index];
    }
  }
  previousImage() {
    if (this.asset?.images && this.asset.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.asset.images.length) % this.asset.images.length;
      this.selectedImageUrl = this.asset.images[this.currentImageIndex];
    }
  }
  nextImage() {
    if (this.asset?.images && this.asset.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.asset.images.length;
      this.selectedImageUrl = this.asset.images[this.currentImageIndex];
    }
  }
  viewFullImage(imageUrl) {
    this.selectedImageUrl = imageUrl;
  }
  closeImageModal() {
    this.selectedImageUrl = null;
  }
  static \u0275fac = function PublicAssetViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PublicAssetViewComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AssetService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(PdfExportService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PublicAssetViewComponent, selectors: [["app-public-asset-view"]], viewQuery: function PublicAssetViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.dateInputs = _t);
    }
  }, decls: 20, vars: 4, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "bg-white", "shadow-sm", "border-b"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "items-center", "justify-between", "h-16"], [1, "flex", "items-center", "space-x-4"], [1, "flex", "items-center", "space-x-2"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"], [1, "text-xl", "font-semibold", "text-gray-900"], [1, "text-sm", "text-gray-500"], ["href", "/", 1, "text-blue-600", "hover:text-blue-700", "font-medium"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-8"], ["class", "flex items-center justify-center py-12", 4, "ngIf"], ["class", "bg-red-50 border border-red-200 rounded-lg p-6", 4, "ngIf"], ["class", "space-y-8", 4, "ngIf"], ["class", "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-12"], [1, "text-center"], [1, "animate-spin", "rounded-full", "h-12", "w-12", "border-b-2", "border-blue-600", "mx-auto"], [1, "mt-4", "text-gray-600"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-6"], [1, "flex", "items-center", "space-x-3"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-red-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-lg", "font-medium", "text-red-800"], [1, "text-red-700"], [1, "space-y-8"], [1, "bg-white", "rounded-lg", "shadow-sm", "border", "p-6"], [1, "flex", "items-start", "justify-between"], [1, "w-16", "h-16", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], [1, "text-2xl", "font-bold", "text-gray-900"], [1, "text-gray-600", "mt-1"], [1, "flex", "items-center", "space-x-4", "mt-2"], ["class", "text-blue-600 hover:text-blue-700 text-sm", 3, "click", 4, "ngIf"], [1, "bg-white", "rounded-lg", "shadow-sm", "border"], [1, "px-6", "py-4", "border-b", "border-gray-200"], [1, "text-lg", "font-semibold", "text-gray-900"], [1, "p-6"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], [1, "text-gray-900"], ["class", "w-5 h-5", 3, "src", "alt", "error", 4, "ngIf"], [1, "col-span-full"], ["class", "flex flex-col items-center space-y-2", 4, "ngIf"], [1, "mt-3", "text-xs", "text-gray-500"], ["class", "mt-1", 4, "ngIf"], ["class", "bg-white rounded-lg shadow-sm border", 4, "ngIf"], [1, "text-blue-600", "hover:text-blue-700", "text-sm", 3, "click"], [1, "w-5", "h-5", 3, "error", "src", "alt"], [1, "flex", "flex-col", "items-center", "space-y-2"], ["alt", "QR Code", 1, "w-32", "h-32", "border", "border-gray-200", "rounded-lg", 3, "src"], [1, "flex", "space-x-2"], [1, "w-32", "h-32", "border", "border-gray-200", "rounded-lg", "flex", "items-center", "justify-center"], [1, "animate-spin", "rounded-full", "h-8", "w-8", "border-b-2", "border-blue-600"], [1, "w-32", "h-32", "border", "border-gray-200", "rounded-lg", "flex", "items-center", "justify-center", "bg-gray-50"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-gray-400"], [1, "mt-1"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-4"], ["class", "relative group cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "relative", "group", "cursor-pointer", 3, "click"], [1, "w-full", "h-32", "object-cover", "rounded-lg", "group-hover:opacity-75", "transition-opacity", 3, "error", "src", "alt"], [1, "absolute", "inset-0", "bg-black", "bg-opacity-0", "group-hover:bg-opacity-20", "transition-all", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-white", "opacity-0", "group-hover:opacity-100", "transition-opacity"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"], [1, "fixed", "inset-0", "bg-black", "bg-opacity-75", "flex", "items-center", "justify-center", "z-50", 3, "click"], [1, "relative", "max-w-4xl", "max-h-full", "p-4", 3, "click"], [1, "absolute", "top-4", "right-4", "text-white", "hover:text-gray-300", "z-10", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], ["alt", "Full size image", 1, "max-w-full", "max-h-full", "object-contain", 3, "src"]], template: function PublicAssetViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(6, "svg", 6);
      \u0275\u0275element(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(8, "span", 8);
      \u0275\u0275text(9, "AssetGo");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275text(11, "Public Asset View");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 4)(13, "a", 10);
      \u0275\u0275text(14, "Back to Home");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(15, "div", 11);
      \u0275\u0275template(16, PublicAssetViewComponent_div_16_Template, 5, 0, "div", 12)(17, PublicAssetViewComponent_div_17_Template, 9, 1, "div", 13)(18, PublicAssetViewComponent_div_18_Template, 144, 39, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, PublicAssetViewComponent_div_19_Template, 6, 1, "div", 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.asset && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedImageUrl);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ["\n\n.activity-history-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.activity-history-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.activity-history-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.activity-history-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.image-gallery-item[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease-in-out;\n}\n.image-gallery-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n/*# sourceMappingURL=public-asset-view.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PublicAssetViewComponent, [{
    type: Component,
    args: [{ selector: "app-public-asset-view", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="min-h-screen bg-gray-50">
  <!-- Header -->
  <div class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            <span class="text-xl font-semibold text-gray-900">AssetGo</span>
          </div>
          <div class="text-sm text-gray-500">Public Asset View</div>
        </div>
        <div class="flex items-center space-x-4">
          <a href="/" class="text-blue-600 hover:text-blue-700 font-medium">Back to Home</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Loading State -->
    <div *ngIf="loading" class="flex items-center justify-center py-12">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p class="mt-4 text-gray-600">Loading asset details...</p>
      </div>
    </div>

    <!-- Error State -->
    <div *ngIf="error && !loading" class="bg-red-50 border border-red-200 rounded-lg p-6">
      <div class="flex items-center space-x-3">
        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="text-lg font-medium text-red-800">Error Loading Asset</h3>
          <p class="text-red-700">{{ error }}</p>
        </div>
      </div>
    </div>

    <!-- Asset Content -->
    <div *ngIf="asset && !loading" class="space-y-8">
      <!-- Asset Header -->
      <div class="bg-white rounded-lg shadow-sm border p-6">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">{{ asset.name }}</h1>
              <p class="text-gray-600 mt-1">{{ asset.description || 'No description available' }}</p>
              <div class="flex items-center space-x-4 mt-2">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {{ getStatusColorFromAssetStatus(asset.asset_status) }}">
                  {{ asset.asset_status?.name || asset.status || 'Unknown' }}
                </span>
                <span class="text-sm text-gray-500">ID: {{ asset.id }}</span>
                <button 
                  *ngIf="asset.id"
                  (click)="copyAssetId()"
                  class="text-blue-600 hover:text-blue-700 text-sm">
                  Copy ID
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Basic Information -->
      <div class="bg-white rounded-lg shadow-sm border">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900">Basic Information</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Asset Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Asset Name</label>
              <p class="text-gray-900">{{ asset.name || 'N/A' }}</p>
            </div>

            <!-- Description -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <p class="text-gray-900">{{ asset.description || 'N/A' }}</p>
            </div>

            <!-- Category -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div class="flex items-center space-x-2">
                <img 
                  *ngIf="asset.category?.icon" 
                  [src]="asset.category.icon" 
                  [alt]="asset.category.name"
                  (error)="onCategoryIconError($event, asset.category)"
                  class="w-5 h-5">
                <span class="text-gray-900">{{ asset.category?.name || 'N/A' }}</span>
              </div>
            </div>

            <!-- Current Status -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium {{ getStatusColorFromAssetStatus(asset.asset_status) }}">
                {{ asset.asset_status?.name || asset.status || 'N/A' }}
              </span>
            </div>

            <!-- Location -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <p class="text-gray-900">{{ asset.location?.name || 'N/A' }}</p>
            </div>

            <!-- Department -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <p class="text-gray-900">{{ asset.department?.name || 'N/A' }}</p>
            </div>

            <!-- Creation Date -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Created</label>
              <p class="text-gray-900">{{ formatDate(asset.created_at) }}</p>
            </div>

            <!-- Last Modified -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last Modified</label>
              <p class="text-gray-900">{{ formatDate(asset.updated_at) }}</p>
            </div>

            <!-- Asset ID/Barcode -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Asset ID</label>
              <div class="flex items-center space-x-2">
                <p class="text-gray-900">{{ asset.id || 'N/A' }}</p>
                <button 
                  *ngIf="asset.id"
                  (click)="copyAssetId()"
                  class="text-blue-600 hover:text-blue-700 text-sm">
                  Copy
                </button>
              </div>
            </div>

            <!-- Serial Number -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
              <div class="flex items-center space-x-2">
                <p class="text-gray-900">{{ asset.serial_number || 'N/A' }}</p>
                <button 
                  *ngIf="asset.serial_number"
                  (click)="copySerialNumber()"
                  class="text-blue-600 hover:text-blue-700 text-sm">
                  Copy
                </button>
              </div>
            </div>

            <!-- QR Code -->
            <div class="col-span-full">
              <label class="block text-sm font-medium text-gray-700 mb-2">QR Code</label>
              <div class="flex items-center space-x-4">
                <!-- Generated QR Code -->
                <div *ngIf="qrCodeDataUrl" class="flex flex-col items-center space-y-2">
                  <img [src]="qrCodeDataUrl" alt="QR Code" class="w-32 h-32 border border-gray-200 rounded-lg">
                  <div class="flex space-x-2">
                    <button 
                      (click)="downloadQRCode()"
                      class="text-blue-600 hover:text-blue-700 text-sm">
                      Download
                    </button>
                    <button 
                      (click)="copyPublicUrl()"
                      class="text-blue-600 hover:text-blue-700 text-sm">
                      Copy URL
                    </button>
                  </div>
                </div>
                
                <!-- Server QR Code (fallback) -->
                <div *ngIf="!qrCodeDataUrl && asset.qr_code_url" class="flex flex-col items-center space-y-2">
                  <img [src]="asset.qr_code_url" alt="QR Code" class="w-32 h-32 border border-gray-200 rounded-lg">
                  <div class="flex space-x-2">
                    <button 
                      (click)="downloadQRCode()"
                      class="text-blue-600 hover:text-blue-700 text-sm">
                      Download
                    </button>
                    <button 
                      (click)="copyQRCodeUrl()"
                      class="text-blue-600 hover:text-blue-700 text-sm">
                      Copy URL
                    </button>
                  </div>
                </div>
                
                <!-- Loading state -->
                <div *ngIf="qrCodeLoading" class="flex flex-col items-center space-y-2">
                  <div class="w-32 h-32 border border-gray-200 rounded-lg flex items-center justify-center">
                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                  <span class="text-sm text-gray-500">Generating QR Code...</span>
                </div>
                
                <!-- Error state -->
                <div *ngIf="!qrCodeDataUrl && !asset.qr_code_url && !qrCodeLoading" class="flex flex-col items-center space-y-2">
                  <div class="w-32 h-32 border border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span class="text-sm text-gray-500">QR Code not available</span>
                </div>
              </div>
              
              <!-- QR Code Information -->
              <div class="mt-3 text-xs text-gray-500">
                <p>Scan this QR code to access this asset's public page</p>
                <p *ngIf="asset.id" class="mt-1">Public URL: {{ windowLocation }}/public/asset/{{ asset.id }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Asset Details -->
      <div class="bg-white rounded-lg shadow-sm border">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900">Asset Details</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Asset Type -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Asset Type</label>
              <p class="text-gray-900">{{ getAssetTypeName(asset.asset_type) }}</p>
            </div>

            <!-- Model -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Model</label>
              <p class="text-gray-900">{{ asset.model || 'N/A' }}</p>
            </div>

            <!-- Manufacturer -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
              <p class="text-gray-900">{{ asset.manufacturer || 'N/A' }}</p>
            </div>

            <!-- Purchase Date -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Purchase Date</label>
              <p class="text-gray-900">{{ formatDate(asset.purchase_date) }}</p>
            </div>

            <!-- Purchase Price -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Purchase Price</label>
              <p class="text-gray-900">{{ asset.purchase_price ? '$' + asset.purchase_price : 'N/A' }}</p>
            </div>

            <!-- Depreciation -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Depreciation</label>
              <p class="text-gray-900">{{ asset.depreciation || 'N/A' }}</p>
            </div>

            <!-- Warranty -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Warranty</label>
              <p class="text-gray-900">{{ asset.warranty || 'N/A' }}</p>
            </div>

            <!-- Insurance -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Insurance</label>
              <p class="text-gray-900">{{ asset.insurance || 'N/A' }}</p>
            </div>

            <!-- Health Score -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Health Score</label>
              <p class="text-gray-900">{{ asset.health_score || 'N/A' }}</p>
            </div>
          </div>
        </div>
      </div>



      <!-- Images Gallery -->
      <div *ngIf="asset.images && asset.images.length > 0" class="bg-white rounded-lg shadow-sm border">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-semibold text-gray-900">Images</h2>
        </div>
        <div class="p-6">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div 
              *ngFor="let image of asset.images; let i = index"
              (click)="viewFullImage(image)"
              class="relative group cursor-pointer">
              <img 
                [src]="image" 
                [alt]="'Asset image ' + (i + 1)"
                (error)="onImageError($event)"
                class="w-full h-32 object-cover rounded-lg group-hover:opacity-75 transition-opacity">
              <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Image Modal -->
  <div *ngIf="selectedImageUrl" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" (click)="closeImageModal()">
    <div class="relative max-w-4xl max-h-full p-4" (click)="$event.stopPropagation()">
      <button 
        (click)="closeImageModal()"
        class="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <img 
        [src]="selectedImageUrl" 
        alt="Full size image"
        class="max-w-full max-h-full object-contain">
    </div>
  </div>
</div> `, styles: ["/* src/app/assets/components/public-asset-view/public-asset-view.component.scss */\n.activity-history-container::-webkit-scrollbar {\n  width: 6px;\n}\n.activity-history-container::-webkit-scrollbar-track {\n  background: #f1f5f9;\n  border-radius: 3px;\n}\n.activity-history-container::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 3px;\n}\n.activity-history-container::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}\n.image-gallery-item {\n  transition: transform 0.2s ease-in-out;\n}\n.image-gallery-item:hover {\n  transform: scale(1.02);\n}\n.modal-backdrop {\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n/*# sourceMappingURL=public-asset-view.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: AssetService }, { type: Location }, { type: PdfExportService }], { dateInputs: [{
    type: ViewChildren,
    args: ["dateInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PublicAssetViewComponent, { className: "PublicAssetViewComponent", filePath: "src/app/assets/components/public-asset-view/public-asset-view.component.ts", lineNumber: 17 });
})();

export {
  require_browser,
  PdfExportService,
  PublicAssetViewComponent
};
//# sourceMappingURL=chunk-LANYBLM7.js.map
