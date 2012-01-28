task :default => 'build'

desc 'Build the website'
task :build do
  sh('compass compile --force')
  sh('jekyll')
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
