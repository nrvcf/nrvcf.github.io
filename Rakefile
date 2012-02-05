COMPASS_CONFIG = 'config/compass.rb'
JEKYLL_CONFIG = 'config/jekyll.yml'

task :default => 'build'

desc 'Build the website'
task :build do |t, args|
  sh("bundle exec compass compile --force --config #{COMPASS_CONFIG}")
  # sh('bundle exec jekyll')
end

desc 'Create a new page'
task :page do
  puts 'Creating new page...'
end

namespace :post do
  desc 'Create a new article'
  task :article do
    puts 'Creating new article...'
  end

  desc 'Create a new podcast'
  task :podcast do
    puts 'Creating new podcast...'
  end
end
