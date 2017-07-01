import $ from 'jquery';
import EventBus from 'krasimir/EventBus';

$.fn.priceFormat = function(options) {
  const defaults = {
    prefix: 'US$ ',
    suffix: '',
    centsSeparator: '.',
    thousandsSeparator: ',',
    limit: false,
    centsLimit: 2,
    clearPrefix: false,
    clearSufix: false,
    allowNegative: false,
    insertPlusSign: false
  };

  var options = $.extend(defaults, options);

  return this.each(function() {
    const obj = $(this);
    const is_number = /[0-9]/;
    const prefix = options.prefix;
    const suffix = options.suffix;
    let centsSeparator = options.centsSeparator;
    const thousandsSeparator = options.thousandsSeparator;
    const limit = options.limit;
    const centsLimit = options.centsLimit;
    const clearPrefix = options.clearPrefix;
    const clearSuffix = options.clearSuffix;
    let allowNegative = options.allowNegative;
    const insertPlusSign = options.insertPlusSign;
    if (insertPlusSign) allowNegative = true;

    function to_numbers(str) {
      let formatted = '';
      let char_;
      for (let i = 0; i < (str.length); i++) {
        char_ = str.charAt(i);
        if (formatted.length === 0 && char_ === 0) char_ = false;
        if (char_ && char_.match(is_number)) {
          if (limit) {
            if (formatted.length < limit) formatted = formatted + char_;
          } else {
            formatted = formatted + char_;
          }
        }
      }
      return formatted;
    }

    function fill_with_zeroes(str) {
      while (str.length < (centsLimit + 1)) str = '0' + str;
      return str;
    }

    function price_format(str) {
      var formatted = fill_with_zeroes(to_numbers(str));
      var thousandsFormatted = '';
      var char_;
      var thousandsCount = 0;

      if (centsLimit == 0) {
          centsSeparator = '';
          centsVal = '';
      }

      var centsVal = formatted.substr(formatted.length - centsLimit, centsLimit);
      var integerVal = formatted.substr(0, formatted.length - centsLimit);
      formatted = (centsLimit == 0) ? integerVal : integerVal + centsSeparator + centsVal;
      if (thousandsSeparator || $.trim(thousandsSeparator) !== '') {
        for (var j = integerVal.length; j > 0; j--) {
          char_ = integerVal.substr(j - 1, 1);
          thousandsCount++;
          if (thousandsCount % 3 === 0) char_ = thousandsSeparator + char_;
          thousandsFormatted = char_ + thousandsFormatted;
        }
        if (thousandsFormatted.substr(0, 1) === thousandsSeparator) thousandsFormatted = thousandsFormatted.substring(1, thousandsFormatted.length);
        formatted = (centsLimit === 0) ? thousandsFormatted : thousandsFormatted + centsSeparator + centsVal
      }
      if (allowNegative && (integerVal !== 0 || centsVal !== 0)) {
        if (str.indexOf('-') !== -1 && str.indexOf('+') < str.indexOf('-')) {
          formatted = '-' + formatted
        } else {
          if (!insertPlusSign) formatted = '' + formatted;
          else formatted = '+' + formatted;
        }
      }
      if (prefix) formatted = prefix + formatted;
      if (suffix) formatted = formatted + suffix;
      return formatted;
    }

    function key_check(e) {
      const code = (e.keyCode ? e.keyCode : e.which);
      const typed = String.fromCharCode(code);
      let functional = false;
      const str = obj.val();
      const newValue = price_format(str + typed);
      if ((code >= 48 && code <= 57) || (code >= 96 && code <= 105)) functional = true;
      if (code === 8) functional = true;
      if (code === 9) functional = true;
      if (code === 13) functional = true;
      if (code === 46) functional = true;
      if (code === 37) functional = true;
      if (code === 39) functional = true;
      if (allowNegative && (code === 189 || code === 109)) functional = true;
      if (insertPlusSign && (code === 187 || code === 107)) functional = true;
      if (!functional) {
        e.preventDefault();
        e.stopPropagation();
        if (str !== newValue) obj.val(newValue);
      }
    }

    function price_it() {
      const str = obj.val();
      const price = price_format(str);
      if (str !== price) obj.val(price);
    }

    function add_prefix() {
      const val = obj.val();
      obj.val(prefix + val);
    }

    function add_suffix() {
      const val = obj.val();
      obj.val(val + suffix);
    }

    function clear_prefix() {
      if ($.trim(prefix) !== '' && clearPrefix) {
        const array = obj.val().split(prefix);
        obj.val(array[1]);
      }
    }

    function clear_suffix() {
      if ($.trim(suffix) !== '' && clearSuffix) {
        const array = obj.val().split(suffix);
        obj.val(array[0]);
      }
    }

    $(this).bind('keydown.price_format', key_check);
    $(this).bind('keyup.price_format', price_it);
    $(this).bind('focusout.price_format', price_it);
    $(document).off('format-price').on('format-price', (event) => {});

    if (clearPrefix) {
      $(this).bind('focusout.price_format', () => {
        clear_prefix();
      });
      $(this).bind('focusin.price_format', () => {
        add_prefix();
      });
    }

    if (clearSuffix) {
      $(this).bind('focusout.price_format', () => {
        clear_suffix();
      });
      $(this).bind('focusin.price_format', () => {
        add_suffix();
      });
    }

    if ($(this).val().length > 0) {
      price_it();
      clear_prefix();
      clear_suffix();
    }
  });
};

$.fn.unpriceFormat = function() {
  return $(this).unbind('.price_format');
};

$.fn.unmask = function() {
  const field = $(this).val();
  let result = '';
  for (const f in field) {
    if (!isNaN(field[f]) || field[f] === '-') result += field[f];
  }
  return result;
};

function currencyFormat($filter) {
  return {
    require: '?ngModel',
    link: function(scope, elem, attrs, ctrl) {
      if (!ctrl) return;
      let format = {
        prefix: '',
        centsSeparator: '',
        thousandsSeparator: '',
        centsLimit: 0
      };

      // elem.priceFormat(format);

      EventBus.addEventListener('locale:set', (event) => {
        const locale = event.target;
        format = {
          prefix: '',
          centsSeparator: locale.NUMBER_FORMATS.DECIMAL_SEP,
          thousandsSeparator: locale.NUMBER_FORMATS.GROUP_SEP,
          centsLimit: 0
        };
        elem[0].value = ctrl.$modelValue + '0';
        elem.priceFormat(format);

        elem[0].value = ctrl.$modelValue;
        elem.priceFormat(format);
      });

      ctrl.$parsers.unshift((value) => {
        elem.priceFormat(format);
        return elem[0].value;
      });

      ctrl.$formatters.unshift((value) => {
        elem[0].value = ctrl.$modelValue * 100;
        elem.priceFormat(format);
        return elem[0].value;
      });
    }
  };
}

export default currencyFormat;
