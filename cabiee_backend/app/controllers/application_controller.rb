class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def self.allow_cors(*methods)
    before_filter :cors_before_filter, :only => methods

    # Rails recommends to use :null_session for APIs
    protect_from_forgery with: :null_session, :only => methods
  end

  def cors_before_filter
    # Check that the `Origin` field matches our front-end client host
    if /\Ahttps?:\/\/localhost:8000\z/ =~ request.headers['Origin']
      headers['Access-Control-Allow-Origin'] = request.headers['Origin']
    end
  end
end
