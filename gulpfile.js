var gulp = require('gulp');
var selenium = require('selenium-standalone');
var nightwatch = require('gulp-nightwatch');

gulp.task('selenium', function (done) {
  selenium.install({
    logger: function (message) { }
  }, function (err) {
    if (err) return done(err);

    selenium.start(function (err, child) {
      if (err) return done(err);
      selenium.child = child;
      done();
    });
  });
});

gulp.task('integration', ['selenium'], function () {
  return gulp.src('')
    .pipe(nightwatch({
      configFile: 'nightwatch.json'
    }));
});


gulp.task('test', ['integration'], function () {
  selenium.child.kill();
});