task :default => 'build'

desc 'Build the website'
task :build do |t, args|
  sh("bundle exec compass compile --force")
  sh('bundle exec jekyll build')
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
