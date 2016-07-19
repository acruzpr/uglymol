
var ElMap = ElMap || require('../src/elmap'); // eslint-disable-line
var isosurface = isosurface || require('../src/isosurface'); // eslint-disable-line
var util = util || require('./util'); // eslint-disable-line

(function () {  // namespace is needed for perf.html
'use strict';

var dmap_buf = util.open_as_array_buffer('1mru.omap');
var map = new ElMap();
map.from_dsn6(dmap_buf.slice(0));
map.extract_block(15, [25, 26, 35]);

util.bench('isosurface', function () {
  var bl = map.block;
  isosurface(bl.size, bl.points, bl.values, 1.0);
});
})();
