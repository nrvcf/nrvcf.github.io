require 'date'

task :build do
  sh('compass compile --force')
  sh('jekyll')
end

task :default => 'build'
