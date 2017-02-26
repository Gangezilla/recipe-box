require 'compass/import-once/activate'
require 'autoprefixer-rails'
require 'sass-globbing'

gem 'bourbon'
gem 'neat'

http_path = "/"
css_dir = "src/css"
sass_dir = "src/sass"

output_style = :compressed
sourcemap = true