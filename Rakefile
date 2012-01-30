task :default => 'build'

desc 'Build the website'
task :build do
  sh('bundle exec compass compile --force')
  sh('bundle exec jekyll')
end

desc 'Publish the website'
task :publish do
end

desc 'Create a new page'
task :page do
end

namespace :post do
  desc 'Create a new podcast'
  task :podcast do
  end
end
