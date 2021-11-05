FROM ruby:2.6.3
RUN apt-get update -qq && apt-get install -y build-essential
WORKDIR /todo_list 
COPY Gemfile* /todo_list/
RUN bundle install
COPY . /todo_list

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]