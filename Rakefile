
require 'jasmine'
load 'jasmine/tasks/jasmine.rake'

require 'json'
require 'uglifier'

LICENSE = <<-END
/*!
* jQuery Smoothies
* https://github.com/inukshuk/jquery.activate.js
*
* Copyright 2011, Sylvester Keil
* Distributed under the MIT license.
* https://github.com/inukshuk/jquery.activate.js/blob/master/LICENSE
*
* Date: #{ Time.now.to_s }
*/
END

task :minify do
  File.open('jquery.activate.min.js', 'w') do |f|
    f.puts LICENSE
    f.puts Uglifier.new.compile(File.open('src/activate.js', 'r:UTF-8').read)
  end
end
